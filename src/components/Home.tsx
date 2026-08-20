import Resume from './Resume';
import { Marker, SectionLabel, Framed } from './Primitives';
import MeshBackdrop from './MeshBackdrop';
import {
    projectInformationOne,
    projectInformationTwo,
    coreCompetencies,
    workExperience,
    contactDetails,
    socialLinks,
    timeline,
} from '../data';

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

            <div className="hero-content shell flex flex-col justify-between grow pt-16 pb-10 md:pt-24 md:pb-14">
                {/* Headline */}
                <div className="max-w-4xl">
                    <div className="flex items-center gap-3 pb-6">
                        <Marker haze />
                        <span className="micro">Software Engineer</span>
                    </div>

                    <h1 className="display-xl">
                        Building<br />
                        interfaces that<br />
                        move
                    </h1>
                </div>

                {/* Base rail: supporting copy on the left, the overlapping
                    statement on the right. */}
                <div className="flex flex-col gap-12 pt-20">
                    <p className="hero-statement ml-auto max-w-3xl">
                        Turning complexity<br />into clarity
                    </p>

                    <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-8">
                        <div className="flex flex-wrap gap-x-12 gap-y-8">
                            <p className="micro max-w-[16rem] leading-relaxed">
                                Crafting interfaces that feel as intentional as they look.
                            </p>
                            <p className="micro max-w-[22rem] leading-relaxed">
                                Working across accessibility, responsive design, and frontend
                                architecture to build applications that communicate clearly.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a href="#projects" className="btn-solid">Projects</a>
                            <a href="#contact" className="btn-outline">Contact</a>
                            <Resume variant="outline" />
                        </div>
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

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8 pt-24">
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <p className="body-lg">
                            I'm a <span className="text-bone-50">recent graduate</span> Software Engineer
                            specializing in building accessible, responsive web applications using HTML, CSS,
                            TypeScript, React, and Tailwind CSS, with a strong focus on WCAG compliant design.
                        </p>
                        <p className="body-lg">
                            Experience enhancing AI model accuracy and optimizing development workflows through
                            testing and validation, alongside working with non-relational databases such as
                            MongoDB. Actively expanding into back end and full-stack development while
                            continuously refining technical skills and workflow efficiency.
                        </p>

                        {/* Fills the column beneath the prose. From lg the grid
                            row is as tall as the portrait opposite, so grow +
                            justify-between spreads the milestones down that
                            height instead of leaving the column half empty. */}
                        <div className="flex flex-col grow pt-6">
                            <div className="flex items-center gap-3 pb-4 border-b border-rule">
                                <Marker small />
                                <span className="micro-sm">Timeline</span>
                            </div>

                            <ol className="timeline flex flex-col gap-8 lg:gap-0 grow lg:justify-between mt-8">
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
                        <div className="flex items-center gap-3 pb-4 border-b border-rule">
                            <Marker small />
                            <span className="micro-sm">Core Competencies</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {coreCompetencies.map((item, index) => (
                                <span key={index} className="tag">{item}</span>
                            ))}
                        </div>

                        {/* No fixed height and no object-fit: the box takes the
                            image's own aspect ratio, so the full portrait shows
                            at every width instead of being cropped to a band. */}
                        <Framed className="mt-6">
                            <div className="media-hover overflow-hidden bg-ink-900">
                                <img
                                    className="media block w-full h-auto"
                                    src="/hero-image.webp"
                                    alt="Joshua Martinez"
                                />
                            </div>
                        </Framed>

                        <div className="flex items-center gap-3">
                            <span className="micro-sm">Based in San Marcos, Texas</span>
                        </div>
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
    category: string;
    year: string;
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
                            <span className="absolute top-4 right-4 z-3 micro-sm text-ink-950 bg-haze-400 px-2 py-1">
                                New
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
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="index-cell text-sm">{item.heading}</h3>
                                <span className="micro-sm shrink-0">{item.year}</span>
                            </div>

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
                                <div className="flex items-center gap-3">
                                    <Marker haze small />
                                    <span className="index-cell text-sm">{role.company}</span>
                                </div>

                                <p className="micro text-bone-200">{role.role}</p>

                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                    <span className="micro-sm">{role.period}</span>
                                    <span className="micro-sm" aria-hidden="true">&mdash;</span>
                                    <span className="micro-sm">{role.location}</span>
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
