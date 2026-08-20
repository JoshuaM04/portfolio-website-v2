import Resume from './Resume';
import { Marker, SectionLabel, Marquee, Framed } from './Primitives';
import {
    projectInformationOne,
    projectInformationTwo,
    coreCompetencies,
    workExperience,
    contactDetails,
    socialLinks,
    marqueeItems,
} from '../data';

export default function Main() {
    return (
        <main>
            <Hero />
            <TickerRails />
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
            <div className="hero-media">
                <img src="/austin-texas.webp" alt="" aria-hidden="true" />
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
   TICKER RAILS
   ========================================================================== */

function TickerRails() {
    return (
        <div className="relative overflow-hidden py-12 bg-ink-950" aria-hidden="true">
            <div className="flex flex-col gap-2">
                <Marquee items={marqueeItems} angle={-2} duration={38} />
                <Marquee items={marqueeItems} angle={2} duration={44} reverse />
            </div>
        </div>
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

                {/* The oversized thesis statement, offset to the right the way
                    the reference sets its section openers. */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8 pt-8">
                    <div className="lg:col-span-5" />

                    <h2 className="lg:col-span-7 display-lg">
                        Designing interfaces that feel as clear as they are memorable.
                    </h2>
                </div>

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

                        <a href="#contact" className="bracket-link w-fit">Get in touch</a>
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

                        <Framed className="mt-6">
                            <div className="media-hover overflow-hidden bg-ink-900">
                                <img
                                    className="media w-full h-64 object-cover"
                                    src="/austin-texas.webp"
                                    alt="Downtown Austin, Texas"
                                />
                            </div>
                        </Framed>

                        <div className="flex items-center gap-3">
                            <Marker small />
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

                        <a href={item.link} target="_blank" rel="noreferrer" className="block overflow-hidden">
                            <img
                                className="media w-full aspect-16/10 object-cover object-top"
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

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8">
                    <h2 className="lg:col-span-4 display-lg">Experience</h2>

                    <div className="lg:col-span-8 flex flex-col gap-px">
                        {workExperience.map((role, index) => (
                            <article key={index} className="border-t border-rule pt-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-3">
                                            <Marker haze small />
                                            <span className="index-cell text-sm">{role.company}</span>
                                        </div>
                                        <span className="micro-sm">{role.period}</span>
                                        <span className="micro-sm">{role.location}</span>
                                    </div>

                                    <div className="md:col-span-2 flex flex-col gap-5">
                                        <p className="micro text-bone-200">{role.role}</p>
                                        {role.summary.map((paragraph, paragraphIndex) => (
                                            <p key={paragraphIndex} className="body-sm">{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
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

                    <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-10">
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
                        </div>

                        <div className="flex flex-col gap-3">
                            <span className="micro-sm">Elsewhere</span>
                            <div className="flex flex-col items-start gap-1">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
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
        </section>
    );
}
