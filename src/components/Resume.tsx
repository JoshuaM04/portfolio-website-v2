import { DialogTrigger } from 'react-aria-components/Modal';
import { Modal } from 'react-aria-components/Modal';
import { Dialog, Heading } from 'react-aria-components/Modal';
import { Button } from 'react-aria-components/Modal';
import { coreCompetencies, education, experience } from '../data';
import { Marker } from './Primitives';

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
                <Dialog className="modal-pop-up bg-ink-900 border border-rule flex flex-col animate-modal-fade outline-none">
                    <div className="flex justify-between items-start gap-6 p-6 border-b border-rule">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <Marker haze />
                                <span className="micro">Resume</span>
                            </div>
                            <Heading slot="title" className="display-md">Joshua Martinez</Heading>
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

                    <div className="flex flex-col gap-8 p-6">
                        <p className="micro text-bone-200">Software Engineer &mdash; Frontend Developer</p>

                        <div className="flex flex-col gap-7">
                            <ResumeBlock label="Education" items={education} />
                            <ResumeBlock label="Experience" items={experience} />
                            <ResumeBlock label="Core Competencies" items={coreCompetencies} inline />
                        </div>

                        <a href="/Computer Science Resume.pdf" download className="btn-solid w-fit">
                            Download
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
                    </div>
                </Dialog>
            </Modal>
        </DialogTrigger>
    );
}

type ResumeBlockProps = {
    label: string;
    items: string[];
    /** Lay the items out as a wrapping row of tags rather than stacked lines. */
    inline?: boolean;
};

function ResumeBlock({ label, items, inline }: ResumeBlockProps) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 pb-2 border-b border-rule-soft">
                <Marker small />
                <span className="micro-sm">{label}</span>
            </div>

            <div className={inline ? 'flex flex-wrap gap-2' : 'flex flex-col gap-2'}>
                {items.map((item, index) =>
                    inline ? (
                        <span key={index} className="tag">{item}</span>
                    ) : (
                        <p key={index} className="body-sm text-bone-200">{item}</p>
                    )
                )}
            </div>
        </div>
    );
}
