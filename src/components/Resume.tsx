import { DialogTrigger } from 'react-aria-components/Modal';
import { Modal } from 'react-aria-components/Modal';
import { Dialog, Heading } from 'react-aria-components/Modal';
import { Button } from 'react-aria-components/Modal';
import { coreCompetencies, education, experience, socialLinks } from '../data';
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
                                <Marker haze className="marker-pulse" />
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
                                <p className="micro text-bone-200">Software Engineer &mdash; Frontend Developer</p>
                            </div>

                            <ResumeBlock index="01" label="Education" items={education} />
                            <ResumeBlock index="02" label="Experience" items={experience} />
                            <ResumeBlock index="03" label="Core Competencies" items={coreCompetencies} inline />

                            {/* Action bar: the download sits with the profile
                                links rather than floating at the end of the copy. */}
                            <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-ink-950 border-t border-rule">
                                <a href="/Computer Science Resume.pdf" download className="btn-solid">
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
    items: string[];
    /** Lay the items out as a wrapping row of tags rather than stacked lines. */
    inline?: boolean;
};

function ResumeBlock({ index, label, items, inline }: ResumeBlockProps) {
    return (
        <div className="flex flex-col gap-4 p-6 border-b border-rule-soft last:border-b-0">
            <div className="flex items-center gap-3">
                <span className="micro-sm">{index}</span>
                <Marker small />
                <span className="micro-sm">{label}</span>
            </div>

            <div className={inline ? 'flex flex-wrap gap-2' : 'flex flex-col gap-2'}>
                {items.map((item, itemIndex) =>
                    inline ? (
                        <span key={itemIndex} className="tag">{item}</span>
                    ) : (
                        <p key={itemIndex} className="body-sm text-bone-200">{item}</p>
                    )
                )}
            </div>
        </div>
    );
}
