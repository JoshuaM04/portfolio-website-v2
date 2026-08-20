import { useEffect, useRef } from 'react';

/**
 * A grid of vertices spanning the hero, with a wave travelling across it from
 * left to right. The wave both displaces the grid vertically and brightens it,
 * so the ripple reads as a crest moving through a sheet rather than as a
 * gradient sliding over a static image.
 *
 * Behaviour worth knowing:
 * - Honours prefers-reduced-motion by painting a single static frame.
 * - Pauses the animation loop whenever the hero is scrolled out of view.
 * - Grid spacing scales with width, so a phone gets a proportionate mesh
 *   rather than four columns of it.
 */

/* --- Tunables ---------------------------------------------------------- */
/** Grid spacing in CSS px, clamped either side of a width-derived value. */
const MIN_SPACING = 44;
const MAX_SPACING = 72;
/** Roughly how many columns to aim for before clamping. */
const TARGET_COLUMNS = 22;

/** Distance in px between one wave crest and the next. */
const WAVE_LENGTH = 460;
/** Crest travel in px per second. */
const WAVE_SPEED = 105;
/** How far the crest lifts the grid, in px. */
const AMPLITUDE = 11;
/** Leans the wavefront so it crosses on a diagonal instead of as a flat wall. */
const WAVE_TILT = 0.3;
/** Higher values narrow the crest into a distinct ripple rather than a swell. */
const CREST_SHARPNESS = 2.6;

/** Line and vertex opacity in the trough and at the crest. */
const LINE_ALPHA_BASE = 0.045;
const LINE_ALPHA_CREST = 0.26;
const NODE_ALPHA_BASE = 0.1;
const NODE_ALPHA_CREST = 0.62;
/** Vertex edge in px at the crest; the trough draws them smaller. */
const NODE_SIZE = 2.6;

/** Quantising alpha lets every segment at a given level stroke as one path. */
const ALPHA_STEPS = 7;

/** haze-400 (steel) for the lines, bone-50 for the vertices. */
const LINE_RGB = '143, 163, 184';
const NODE_RGB = '244, 244, 241';

const TAU = Math.PI * 2;

type Vertex = {
    x: number;
    y: number;
    /** 0 in the trough, 1 at the crest. Drives both opacity and size. */
    crest: number;
};

export default function MeshBackdrop() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let width = 0;
        let height = 0;
        let spacing = MAX_SPACING;
        let columns = 0;
        let rows = 0;
        /** Column-major, so a column's vertices are contiguous. */
        let grid: Vertex[][] = [];
        let frameId = 0;
        let running = false;

        const build = () => {
            const rect = canvas.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;

            // Cap the backing store at 2x: this is a backdrop, and the extra
            // pixels cost more than they show.
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = rect.width;
            height = rect.height;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            spacing = Math.max(MIN_SPACING, Math.min(MAX_SPACING, width / TARGET_COLUMNS));

            // One row and column of overspill on each side, so the mesh runs off
            // the edges rather than stopping short of them.
            columns = Math.ceil(width / spacing) + 3;
            rows = Math.ceil(height / spacing) + 3;

            grid = Array.from({ length: columns }, () =>
                Array.from({ length: rows }, () => ({ x: 0, y: 0, crest: 0 }))
            );
        };

        const positionGrid = (time: number) => {
            const originX = -spacing;
            const originY = -spacing;
            const travel = (time * WAVE_SPEED) / WAVE_LENGTH;

            for (let i = 0; i < columns; i++) {
                const column = grid[i];
                const x = originX + i * spacing;

                for (let j = 0; j < rows; j++) {
                    const baseY = originY + j * spacing;
                    const phase = ((x + baseY * WAVE_TILT) / WAVE_LENGTH - travel) * TAU;
                    const wave = Math.sin(phase);
                    const crest = Math.pow((wave + 1) / 2, CREST_SHARPNESS);

                    const vertex = column[j];
                    vertex.x = x;
                    vertex.y = baseY + wave * AMPLITUDE;
                    vertex.crest = crest;
                }
            }
        };

        /** Bucket index for a crest value, so segments can be batched. */
        const bucketOf = (crest: number) =>
            Math.min(ALPHA_STEPS - 1, Math.floor(crest * ALPHA_STEPS));

        const draw = (time: number) => {
            positionGrid(time);
            ctx.clearRect(0, 0, width, height);

            // Lines first. Every segment lands in one of a handful of opacity
            // buckets, so the whole mesh strokes in ALPHA_STEPS passes rather
            // than one per segment.
            const paths = Array.from({ length: ALPHA_STEPS }, () => new Path2D());

            for (let i = 0; i < columns; i++) {
                for (let j = 0; j < rows; j++) {
                    const vertex = grid[i][j];

                    if (i + 1 < columns) {
                        const right = grid[i + 1][j];
                        const path = paths[bucketOf((vertex.crest + right.crest) / 2)];
                        path.moveTo(vertex.x, vertex.y);
                        path.lineTo(right.x, right.y);
                    }

                    if (j + 1 < rows) {
                        const below = grid[i][j + 1];
                        const path = paths[bucketOf((vertex.crest + below.crest) / 2)];
                        path.moveTo(vertex.x, vertex.y);
                        path.lineTo(below.x, below.y);
                    }
                }
            }

            ctx.lineWidth = 1;
            for (let step = 0; step < ALPHA_STEPS; step++) {
                const crest = (step + 0.5) / ALPHA_STEPS;
                const alpha = LINE_ALPHA_BASE + crest * (LINE_ALPHA_CREST - LINE_ALPHA_BASE);
                ctx.strokeStyle = `rgba(${LINE_RGB}, ${alpha})`;
                ctx.stroke(paths[step]);
            }

            // Vertices on top, brightening and growing through the crest.
            for (let i = 0; i < columns; i++) {
                for (let j = 0; j < rows; j++) {
                    const { x, y, crest } = grid[i][j];
                    const alpha = NODE_ALPHA_BASE + crest * (NODE_ALPHA_CREST - NODE_ALPHA_BASE);
                    const size = NODE_SIZE * (0.75 + crest * 0.6);
                    ctx.fillStyle = `rgba(${NODE_RGB}, ${alpha})`;
                    ctx.fillRect(x - size / 2, y - size / 2, size, size);
                }
            }
        };

        const step = () => {
            draw(performance.now() / 1000);
            frameId = requestAnimationFrame(step);
        };

        const start = () => {
            if (running || reduceMotion) return;
            running = true;
            frameId = requestAnimationFrame(step);
        };

        const stop = () => {
            running = false;
            cancelAnimationFrame(frameId);
        };

        build();
        draw(0);
        if (!reduceMotion) start();

        const resizeObserver = new ResizeObserver(() => {
            build();
            draw(performance.now() / 1000);
        });
        resizeObserver.observe(canvas);

        // Don't burn frames animating a backdrop nobody is looking at.
        const intersectionObserver = new IntersectionObserver(
            ([entry]) => (entry.isIntersecting ? start() : stop()),
            { threshold: 0 }
        );
        intersectionObserver.observe(canvas);

        return () => {
            stop();
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
        };
    }, []);

    return <canvas ref={canvasRef} className="block w-full h-full" aria-hidden="true" />;
}
