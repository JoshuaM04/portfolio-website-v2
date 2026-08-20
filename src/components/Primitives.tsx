/**
 * Shared visual primitives for the editorial-dark system.
 * These carry the motifs that repeat across every section: the double-square
 * marker, the labelled section header, and the ticker rails.
 */

type MarkerProps = {
    haze?: boolean;
    small?: boolean;
    className?: string;
};

/** The recurring "▪ ▪" registration mark. */
export function Marker({ haze, small, className = '' }: MarkerProps) {
    return (
        <span
            aria-hidden="true"
            className={`marker ${haze ? 'marker-haze' : ''} ${small ? 'marker-sm' : ''} ${className}`}
        >
            <span />
            <span />
        </span>
    );
}

type SectionLabelProps = {
    /** The small tracked-out label, e.g. "SELECTED WORK". */
    label: string;
    /** Optional index shown at the far right, e.g. "02 / 05". */
    index?: string;
};

/** A hairline-topped section header: marker, label, and an optional index. */
export function SectionLabel({ label, index }: SectionLabelProps) {
    return (
        <div className="flex items-center justify-between gap-4 pb-6">
            <div className="flex items-center gap-3">
                <Marker />
                <span className="micro">{label}</span>
            </div>
            {index && <span className="micro-sm">{index}</span>}
        </div>
    );
}

type MarqueeProps = {
    items: string[];
    /** Run the rail right-to-left (default) or left-to-right. */
    reverse?: boolean;
    /** Degrees of skew, so stacked rails cross one another. */
    angle?: number;
    /** Seconds for one full pass. */
    duration?: number;
};

/**
 * A seamless ticker rail. The item list is rendered twice inside the track and
 * the track is translated -50%, so the second copy lands exactly where the
 * first began and the loop is invisible.
 */
export function Marquee({ items, reverse = false, angle = 0, duration = 40 }: MarqueeProps) {
    const track = (
        <div
            className="marquee-track"
            style={{
                animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${duration}s linear infinite`,
            }}
        >
            {[...items, ...items].map((item, index) => (
                <span key={index} className="marquee-item">
                    {item}
                    <Marker small />
                </span>
            ))}
        </div>
    );

    return (
        <div className="marquee" style={{ transform: `rotate(${angle}deg)` }}>
            {track}
            {/* A second identical track fills the gap the first leaves as it
                translates away, keeping the rail continuous at any width. */}
            <div
                className="marquee-track"
                aria-hidden="true"
                style={{
                    animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${duration}s linear infinite`,
                }}
            >
                {[...items, ...items].map((item, index) => (
                    <span key={index} className="marquee-item">
                        {item}
                        <Marker small />
                    </span>
                ))}
            </div>
        </div>
    );
}

type FramedProps = {
    children: React.ReactNode;
    className?: string;
};

/** Wraps media in the four-corner registration marks. */
export function Framed({ children, className = '' }: FramedProps) {
    return (
        <div className={`framed ${className}`}>
            <div className="framed-inner absolute inset-0 z-2 pointer-events-none" aria-hidden="true" />
            {children}
        </div>
    );
}
