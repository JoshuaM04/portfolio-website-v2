import { useEffect, useRef, useState } from 'react';
import Resume from './Resume';
import { Marker, SectionLabel, Framed } from './Primitives';
import MeshBackdrop from './MeshBackdrop';
import {
    projectInformationOne,
    projectInformationTwo,
    technicalSkills,
    workExperience,
    contactDetails,
    socialLinks,
    timeline,
} from '../data';

/**
 * Holds an entrance state on an element and releases it when the element
 * scrolls into view, so CSS owns the animation and this owns only the timing.
 *
 * Starts armed rather than at rest: arming inside the effect would render one
 * frame of finished content before hiding it again, which reads as a flash.
 * Under prefers-reduced-motion it jumps straight to shown, leaving the resting
 * appearance untouched.
 */
function useReveal<T extends HTMLElement>(threshold = 0.2) {
    const ref = useRef<T>(null);

    // Reduced motion is known before the first paint, so it seeds the initial
    // state rather than being set from the effect, which would render once in
    // the held state and then again to release it.
    const [shown, setShown] = useState(
        () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );

    useEffect(() => {
        const element = ref.current;
        if (!element || shown) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setShown(true);
                observer.disconnect();
            },
            { threshold }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, shown]);

    // A tuple rather than an object: returning { ref, className } makes the
    // hooks lint rule read the whole return value as a ref and flag the
    // className as a ref access during render.
    return [ref, shown ? 'reveal is-visible' : 'reveal'] as const;
}

export default function Main() {
    return (
        <main>
            <Hero />
            <PersonalOverview />
            <Projects />
            <Experience />
            <Contact />
        </main>
    );
}

/* ==========================================================================
   HERO
   ========================================================================== */

function Hero() {
    return (
        <section id="hero" className="hero">
            {/* An animated node mesh stands in for a backdrop photo: it avoids
                reusing the overview image and gives the hero some slow motion
                without competing with the headline. */}
            <div className="hero-media">
                <MeshBackdrop />
            </div>
            <div className="hero-veil" aria-hidden="true" />

            <div className="hero-content shell flex flex-col justify-between grow">
                {/* Headline */}
                <div className="max-w-4xl">
                    <div className="flex items-center gap-3 pb-6">
                        <Marker haze />
                        <span className="micro">Software Engineer</span>
                    </div>

                    <h1 className="display-xl hero-heading sheen">
                        Building<br />
                        accessible<br />
                        interfaces
                    </h1>
                </div>

                {/* Base rail: supporting copy on the left, the overlapping
                    statement on the right. */}
                <div className="hero-base flex flex-col">
                    <p className="hero-statement sheen ml-auto max-w-3xl">
                        Clear, responsive,<br />and built to last
                    </p>

                    {/* Right-aligned to sit under the statement above it. The
                        supporting paragraphs that used to share this row were
                        removed: they repeated what the overview says at length,
                        and on narrow screens they stacked into a wall of small
                        caps directly beneath the headline. */}
                    <div className="flex flex-wrap justify-end gap-3">
                        <a href="#projects" className="btn-solid">Projects</a>
                        <a href="#contact" className="btn-outline">Contact</a>
                        <Resume variant="outline" />
                    </div>
                </div>
            </div>
        </section>
    );
}


/* ==========================================================================
   PERSONAL OVERVIEW
   ========================================================================== */

function PersonalOverview() {
    const [timelineRef, timelineRevealClass] = useReveal<HTMLOListElement>();

    return (
        <section id="personal-overview" className="section-pad border-t border-rule">
            <div className="shell">
                <SectionLabel label="Personal Overview" index="01 / 03" />

                {/* Left-aligned on the shell edge, sharing a margin with the
                    section label above and the prose below, so the whole
                    section reads off one axis. The offset version sat in
                    columns 6-12 and floated away from the content it
                    introduces. max-w keeps the measure sane at display sizes. */}
                <h2 className="display-lg max-w-4xl pt-8">
                    Designing interfaces that feel as clear as they are memorable.
                </h2>

                {/* The heading needs air on desktop, where it sits beside a tall
                    column; on a phone the two stack and 96px reads as a hole. */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8 pt-10 md:pt-24">
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        {/* Lead and supporting paragraph rather than two equal
                            slabs: the first is larger, the second steps down in
                            both size and tone, and a hairline separates them. The
                            wording is untouched — the hierarchy is doing the work. */}
                        <p className="lead">
                            I'm a software engineer and <span className="text-bone-50">recent computer science graduate </span> 
                            specializing in building accessible, responsive web applications using HTML, CSS,
                            TypeScript, React, Next.js, and Tailwind CSS, with a strong focus on WCAG compliant design.
                        </p>
                        <p className="body-lg text-bone-400 border-t border-rule-soft pt-8">
                            Experience enhancing AI model accuracy and optimizing development workflows through
                            testing and validation, alongside working with non-relational databases such as
                            MongoDB. Actively expanding into back end and full-stack development while
                            continuously refining technical skills and workflow efficiency.
                        </p>

                        {/* The milestones sit on a fixed gap rather than being
                            spread to fill the column. Stretching them to match
                            the portrait opposite works until the portrait gets
                            tall — it scales with column width, so at 1920 it
                            reached 981px and left 515px of slack to distribute,
                            pushing the entries 172px apart. */}
                        <div className="flex flex-col pt-6">
                            <div className="flex items-center gap-3 pb-4 border-b border-rule">
                                <Marker small />
                                <span className="micro-sm">Timeline</span>
                            </div>

                            <ol
                                ref={timelineRef}
                                className={`timeline ${timelineRevealClass} flex flex-col gap-8 mt-8`}
                            >
                                {timeline.map((item, index) => (
                                    <li key={index} className="timeline-item flex flex-col gap-1">
                                        <span className="micro-sm">{item.period}</span>
                                        <p className="index-cell text-sm">{item.title}</p>
                                        <p className="body-sm">{item.detail}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6">
                        {/* One block per kind of skill, all rendered from the
                            same data as the resume modal so the two cannot
                            disagree. */}
                        {technicalSkills.map((group) => (
                            <div key={group.label} className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 pb-4 border-b border-rule">
                                    <Marker small />
                                    <span className="micro-sm">{group.label}</span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span key={item} className="tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Image and caption are one figure so the caption
                            always sits directly beneath the portrait. No fixed
                            height and no object-fit, so the box takes the image's
                            own aspect ratio and the full portrait shows at every
                            width instead of being cropped to a band. */}
                        <figure className="flex flex-col gap-3 mt-6">
                            <Framed>
                                <div className="media-hover overflow-hidden bg-ink-900">
                                    <img
                                        className="media block w-full h-auto"
                                        src="/images/hero-image.webp"
                                        alt="Joshua Martinez"
                                    />
                                </div>
                            </Framed>

                            <figcaption className="micro-sm">Based in San Marcos, Texas</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ==========================================================================
   PROJECTS
   ========================================================================== */

function Projects() {
    return (
        <section id="projects" className="section-pad border-t border-rule">
            <div className="shell flex flex-col gap-28">
                <ProjectGrid
                    label="Full-Stack Apps"
                    index="02 / 03"
                    heading="Full-stack apps"
                    projects={projectInformationTwo}
                    showNewLabel
                />

                <ProjectGrid
                    label="UI / UX Projects"
                    heading="UI / UX projects"
                    projects={projectInformationOne}
                />
            </div>
        </section>
    );
}

type Project = {
    image: string;
    link: string;
    heading: string;
    description: string;
    source?: string;
    tools: string[];
};

type ProjectGridProps = {
    label: string;
    index?: string;
    heading: string;
    projects: Project[];
    showNewLabel?: boolean;
};

function ProjectGrid({ label, index, heading, projects, showNewLabel }: ProjectGridProps) {
    return (
        <div>
            <SectionLabel label={label} index={index} />

            <h2 className="display-lg pb-14">{heading}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((item, projectIndex) => (
                    <article key={projectIndex} className="project-card media-hover flex flex-col relative">
                        {showNewLabel && (
                            <span className="badge-new absolute top-4 right-4 z-3">
                                <span className="badge-new-inner micro-sm text-bone-50">New</span>
                            </span>
                        )}

                        {/* The box matches the screenshots' own 2560x1230 ratio,
                            so object-cover fills it edge to edge while cropping
                            nothing off them. Only an off-ratio image loses
                            anything, and then just the few percent that would
                            otherwise show as bars. */}
                        <a href={item.link} target="_blank" rel="noreferrer" className="block overflow-hidden bg-ink-950">
                            <img
                                className="media block w-full aspect-[256/123] object-cover"
                                src={item.image}
                                alt={`${item.heading} screenshot`}
                            />
                        </a>

                        <div className="flex flex-col gap-5 p-6 grow border-t border-rule-soft">
                            <h3 className="index-cell text-sm">{item.heading}</h3>

                            <p className="body-sm grow">{item.description}</p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {item.tools.map((tool, toolIndex) => (
                                    <span key={toolIndex} className="tag">{tool}</span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <a href={item.link} target="_blank" rel="noreferrer" className="bracket-link">
                                    Live site
                                </a>
                                {item.source && (
                                    <a href={item.source} target="_blank" rel="noreferrer" className="bracket-link">
                                        Source
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

/* ==========================================================================
   EXPERIENCE
   ========================================================================== */

function Experience() {
    return (
        <section id="experience" className="section-pad border-t border-rule bg-ink-900">
            <div className="shell">
                <SectionLabel label="Experience" index="03 / 03" />

                {/* Laid out like the projects list rather than the two-column
                    narrative sections: a full-width heading over a stack of
                    entries. Each entry stays a single column at every
                    width, capped to a tower so it never stretches with the
                    viewport. */}
                <h2 className="display-lg pb-14">Experience</h2>

                {/* Towers wrap into a row as roles are added rather than
                    stretching to fill the shell. Below md the project grid
                    drops to a single column, so the capped towers centre to
                    match it instead of hugging the left edge. */}
                <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                    {workExperience.map((role, index) => (
                        <article
                            key={index}
                            className="experience-entry bg-ink-850 border border-rule-soft p-6 md:p-8 flex flex-col gap-8"
                        >
                            <div className="flex flex-col gap-4">
                                <span className="index-cell text-sm">{role.company}</span>

                                <p className="micro text-bone-200">{role.role}</p>

                                {/* The location is a qualifier on the period, not a
                                    peer of it. A square bullet in the text's own
                                    colour marks it as its own datum without pulling
                                    focus, and the wider gap stops the two lines
                                    reading as one broken block. */}
                                <div className="flex flex-col gap-2">
                                    <span className="micro-sm">{role.period}</span>
                                    <span className="micro-sm flex items-center gap-2">
                                        <span aria-hidden="true" className="size-1 bg-bone-600 shrink-0" />
                                        {role.location}
                                    </span>
                                </div>
                            </div>

                            {/* The tower caps the measure on its own, so the
                                smaller type is back — body-lg at this width
                                would leave only ~30 characters per line. */}
                            <div className="flex flex-col gap-5 border-t border-rule-soft pt-8">
                                {role.summary.map((paragraph, paragraphIndex) => (
                                    <p key={paragraphIndex} className="body-sm">{paragraph}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ==========================================================================
   CONTACT
   ========================================================================== */

function Contact() {
    return (
        <section id="contact" className="section-pad border-t border-rule">
            <div className="shell">
                <SectionLabel label="Contact" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 gap-x-8">
                    <div className="lg:col-span-7 flex flex-col gap-10">
                        <h2 className="display-lg">
                            Let's create<br />something meaningful
                        </h2>

                        <p className="body-lg max-w-xl">
                            Let's collaborate on your next project. Whether you need frontend engineering,
                            accessible interface design, or a full-stack build, I'm here to help turn your
                            ideas into reality.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a href="mailto:joshmartinezny08@gmail.com" className="btn-solid">Start a project</a>
                            <Resume variant="outline" />
                        </div>
                    </div>

                    {/* Availability and socials live here rather than in the
                        footer, so the whole "how to reach me" story sits in one
                        column instead of being split across two sections. */}
                    <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <Marker haze />
                            <span className="micro-sm">Available for work</span>
                        </div>

                        <div className="flex flex-col">
                            {contactDetails.map((detail, index) => (
                                <div key={index} className="flex flex-col gap-1 py-4 border-t border-rule">
                                    <span className="micro-sm">{detail.label}</span>
                                    {detail.href ? (
                                        <a
                                            href={detail.href}
                                            className="index-cell text-sm hover:text-haze-300 transition-colors duration-300 break-all"
                                        >
                                            {detail.value}
                                        </a>
                                    ) : (
                                        <span className="index-cell text-sm">{detail.value}</span>
                                    )}
                                </div>
                            ))}

                            <div className="flex flex-col gap-1 py-4 border-t border-rule">
                                <span className="micro-sm">Socials</span>
                                <div className="flex flex-wrap items-center gap-x-4">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
