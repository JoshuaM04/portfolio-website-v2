import { DialogTrigger } from 'react-aria-components/Modal';
import { Modal } from 'react-aria-components/Modal';
import { Dialog, Heading } from 'react-aria-components/Modal';
import { Button } from 'react-aria-components/Modal';
import { technicalSkills, education, workExperience, socialLinks } from '../data';
import { Marker, Framed } from './Primitives';

type ResumeProps = {
    /** "solid" for the hero call-to-action, "outline" for the header. */
    variant?: 'solid' | 'outline';
};

export default function Resume({ variant = 'solid' }: ResumeProps) {
    return (
        <DialogTrigger>
            <Button className={variant === 'solid' ? 'btn-solid' : 'btn-outline'}>
                Resume
            </Button>

            <Modal className="z-50 fixed inset-0 w-full h-full flex justify-center items-center backdrop-blur-md bg-ink-950/85 p-5">
                {/* The registration marks wrap the panel rather than the dialog
                    itself, so they stay pinned to the corners while the dialog
                    scrolls its own content. */}
                <Framed>
                    <Dialog className="modal-pop-up bg-ink-900 border border-rule flex flex-col outline-none animate-modal-fade">
                        {/* Status rail — same availability signal as the header,
                            so the panel reads as part of the site. */}
                        <div className="flex items-center justify-between gap-6 px-6 py-3 border-b border-rule bg-ink-950">
                            <div className="flex items-center gap-3">
                                <Marker haze />
                                <span className="micro-sm">Available for work</span>
                            </div>

                            <Button
                                slot="close"
                                aria-label="Close resume"
                                className="text-bone-400 hover:text-bone-50 hover:cursor-pointer transition-colors duration-300 shrink-0"
                            >
                                <svg
                                    className="size-6 border border-rule p-1.5 hover:border-rule-strong transition-colors duration-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </Button>
                        </div>

                        <div className="modal-stagger flex flex-col">
                            <div className="flex flex-col gap-2 p-6 border-b border-rule">
                                <span className="micro-sm">Resume</span>
                                <Heading slot="title" className="display-md">Joshua Martinez</Heading>
                                <p className="micro text-bone-200">Software Engineer</p>
                            </div>

                            <ResumeBlock index="01" label="Education">
                                {education.map((item, index) => (
                                    <ResumeEntry
                                        key={index}
                                        title={item.institution}
                                        titleAside={item.location}
                                        subtitle={item.degree}
                                        subtitleAside={item.detail}
                                        awards={item.awards}
                                    />
                                ))}
                            </ResumeBlock>

                            <ResumeBlock index="02" label="Experience">
                                {workExperience.map((item, index) => (
                                    <ResumeEntry
                                        key={index}
                                        title={item.company}
                                        titleAside={item.period}
                                        subtitle={item.role}
                                        subtitleAside={item.location}
                                    />
                                ))}
                            </ResumeBlock>

                            <ResumeBlock index="03" label="Technical Skills">
                                <div className="flex flex-col gap-5">
                                    {technicalSkills.map((group) => (
                                        <div key={group.label} className="flex flex-col gap-2">
                                            <span className="micro-sm">{group.label}</span>

                                            <div className="flex flex-wrap gap-2">
                                                {group.items.map((item) => (
                                                    <span key={item} className="tag">{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ResumeBlock>

                            {/* Action bar: the download sits with the profile
                                links rather than floating at the end of the copy. */}
                            <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-ink-950 border-t border-rule">
                                <a href="/documents/Joshua-Martinez-Resume.pdf" download className="btn-solid">
                                    Download PDF
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                        />
                                    </svg>
                                </a>

                                <div className="flex flex-wrap items-center gap-1">
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
                    </Dialog>
                </Framed>
            </Modal>
        </DialogTrigger>
    );
}

type ResumeBlockProps = {
    /** Two-digit index, matching the numbering the page sections use. */
    index: string;
    label: string;
    children: React.ReactNode;
};

function ResumeBlock({ index, label, children }: ResumeBlockProps) {
    return (
        <div className="flex flex-col gap-4 p-6 border-b border-rule-soft last:border-b-0">
            <div className="flex items-center gap-3">
                <span className="micro-sm">{index}</span>
                <Marker small />
                <span className="micro-sm">{label}</span>
            </div>

            {children}
        </div>
    );
}

type ResumeEntryProps = {
    title: string;
    titleAside: string;
    subtitle: string;
    subtitleAside: string;
    awards?: string[];
};

/**
 * One resume line item, set the way the printed resume sets it: the
 * organisation and its dates on the first line, the role and its location on
 * the second, each pair pushed to opposite edges. The asides drop under their
 * pair rather than colliding when the panel is too narrow to hold both.
 */
function ResumeEntry({ title, titleAside, subtitle, subtitleAside, awards }: ResumeEntryProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <span className="index-cell text-sm">{title}</span>
                <span className="micro-sm">{titleAside}</span>
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <span className="body-sm text-bone-200">{subtitle}</span>
                <span className="micro-sm">{subtitleAside}</span>
            </div>

            {awards && awards.length > 0 && (
                <div className="flex flex-col gap-2 pt-2 mt-1 border-t border-rule-soft">
                    <span className="micro-sm">Awards &amp; Honors</span>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        {awards.map((award, index) => (
                            <span key={award} className="flex items-center gap-3">
                                {index > 0 && (
                                    <span aria-hidden="true" className="w-px h-3 bg-rule-strong" />
                                )}
                                <span className="body-sm text-bone-200">{award}</span>
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
