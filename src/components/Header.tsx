import Resume from './Resume';
import { Marker } from './Primitives';

const navItems = [
    { href: '#personal-overview', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-30 border-b border-rule bg-ink-950/85 backdrop-blur-md">
            <div className="shell">
                {/* Top rail: status, wordmark, resume. The wordmark is centred
                    optically by giving the flanking columns equal basis. */}
                <div className="flex items-center justify-between gap-4 py-4">
                    <div className="flex-1 hidden md:flex items-center gap-3">
                        <Marker haze />
                        <span className="micro-sm">Available for work</span>
                    </div>

                    <a
                        href="#hero"
                        className="display-md text-lg md:text-xl lowercase tracking-tight hover:text-haze-300 transition-colors duration-300"
                    >
                        joshua martinez
                    </a>

                    <div className="flex-1 flex justify-end">
                        <Resume variant="outline" />
                    </div>
                </div>

                {/* Bottom rail: the anchor navigation. Native smooth scrolling
                    is handled by scroll-behavior on <html>. */}
                <nav aria-label="Primary" className="border-t border-rule-soft">
                    {/* Gaps tighten and the separators drop away on narrow
                        screens so all four links stay on one row without
                        overflowing the viewport. */}
                    <ul className="flex items-center justify-center gap-4 sm:gap-10 py-3">
                        {navItems.map((item, index) => (
                            <li key={item.href} className="flex items-center gap-4 sm:gap-10">
                                <a href={item.href} className="nav-link">{item.label}</a>
                                {index < navItems.length - 1 && (
                                    <Marker small className="hidden sm:inline-flex opacity-40" />
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
