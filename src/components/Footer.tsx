import { Marker } from './Primitives';
import { socialLinks } from '../data';

const siteLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#personal-overview', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
];

const disciplines = ['Frontend Development', 'Accessible Interfaces', 'Responsive Design', 'Full-Stack Builds'];

export default function Footer() {
    return (
        <footer className="border-t border-rule bg-ink-950 overflow-hidden">
            <div className="shell pt-20 pb-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 pb-24">
                    <div className="col-span-2 md:col-span-2 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <Marker haze />
                            <span className="micro-sm">Available for work</span>
                        </div>
                        <p className="body-sm max-w-xs">
                            Software Engineer building interactive, responsive, and accessible applications.
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-1">
                        <span className="micro-sm pb-3">Index</span>
                        {siteLinks.map((link) => (
                            <a key={link.href} href={link.href} className="bracket-link bracket-link-ghost">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col items-start gap-1">
                        <span className="micro-sm pb-3">Elsewhere</span>
                        {socialLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="bracket-link bracket-link-ghost"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 pb-10">
                    {disciplines.map((discipline) => (
                        <span key={discipline} className="micro-sm">{discipline}</span>
                    ))}
                </div>
            </div>

            <div className="shell border-t border-rule-soft py-6 flex flex-wrap items-center justify-between gap-4">
                <span className="micro-sm">&copy; {new Date().getFullYear()} Joshua Martinez</span>
                <span className="micro-sm">All rights reserved</span>
            </div>
        </footer>
    );
}
