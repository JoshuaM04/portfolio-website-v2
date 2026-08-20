import { useEffect, useRef } from 'react';

/**
 * A slow-drifting node/link mesh drawn to a canvas, used as the hero backdrop.
 *
 * Nodes are drawn as small squares so the field echoes the double-square marker
 * motif used throughout the page, and links fade out with distance so the mesh
 * reads as a soft graph rather than a hard wireframe.
 *
 * Behaviour worth knowing:
 * - Honours prefers-reduced-motion by painting a single static frame.
 * - Pauses the animation loop whenever the hero is scrolled out of view.
 * - Node count scales with area, so small viewports do proportionally less work.
 */

type Node = {
    x: number;
    y: number;
    vx: number;
    vy: number;
};

/* --- Tunables ---------------------------------------------------------- */
/** Links only draw between nodes closer than this (CSS px). */
const LINK_DISTANCE = 155;
/** One node per this many square px of hero, before the cap. */
const AREA_PER_NODE = 15000;
const MAX_NODES = 90;
/** Drift speed in px per frame — deliberately slow. */
const SPEED = 0.05;
/** Peak opacity of a link at zero distance, and of a node. */
const LINK_ALPHA = 0.22;
const NODE_ALPHA = 0.38;
/** haze-400 and bone-50 from the design tokens. */
const LINK_RGB = '168, 191, 178';
const NODE_RGB = '244, 244, 241';

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
        let nodes: Node[] = [];
        let frameId = 0;
        let running = false;

        const buildField = () => {
            const rect = canvas.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;

            // Cap the backing store at 2x so high-DPI screens don't pay for
            // pixels nobody can distinguish in a backdrop this faint.
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = rect.width;
            height = rect.height;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.min(MAX_NODES, Math.round((width * height) / AREA_PER_NODE));
            nodes = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 2 * SPEED,
                vy: (Math.random() - 0.5) * 2 * SPEED,
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Links first, so nodes sit on top of the web.
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance >= LINK_DISTANCE) continue;

                    ctx.strokeStyle = `rgba(${LINK_RGB}, ${(1 - distance / LINK_DISTANCE) * LINK_ALPHA})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }

            ctx.fillStyle = `rgba(${NODE_RGB}, ${NODE_ALPHA})`;
            for (const node of nodes) {
                ctx.fillRect(node.x - 1, node.y - 1, 2.5, 2.5);
            }
        };

        const step = () => {
            for (const node of nodes) {
                node.x += node.vx;
                node.y += node.vy;
                // Bounce off the edges so the field never drains out of frame.
                if (node.x <= 0 || node.x >= width) node.vx *= -1;
                if (node.y <= 0 || node.y >= height) node.vy *= -1;
            }
            draw();
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

        buildField();
        draw();
        if (!reduceMotion) start();

        // Rebuild on resize; the field density depends on the hero's box.
        const resizeObserver = new ResizeObserver(() => {
            buildField();
            draw();
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
