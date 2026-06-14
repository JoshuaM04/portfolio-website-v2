import {DialogTrigger} from 'react-aria-components/Modal';
import {Modal} from 'react-aria-components/Modal';
import {Dialog, Heading} from 'react-aria-components/Modal';
import {Button} from 'react-aria-components/Modal';

export default function Header() {
    return (
        <header className="sticky top-0 opacity-98 z-1 bg-orange-100 border-b border-red-200 pl-5 pr-5 pt-5 pb-5">
            <nav className="flex justify-between items-center">
                <a href="#hero" className="text-xl font-bold">Joshua M<span className="text-indigo-400">.</span></a>

                <div className="flex gap-5">
                    <ul className="text-taupe-500 uppercase font-semibold flex justify-between items-center gap-5 max-sm:hidden max-sm:aria-hidden">
                        <li><a href="#personal-overview" className="hover:animate-border hover:text-red-900 hover:cursor-pointer">about</a></li>
                        <li><a href="#projects" className="hover:animate-border hover:text-red-900 hover:cursor-pointer">projects</a></li>
                        <li><a href="#experience" className="hover:animate-border hover:text-red-900 hover:cursor-pointer">experience</a></li>
                        <li><a href="#contact" className="hover:animate-border hover:text-red-900 hover:cursor-pointer">contact</a></li>
                    </ul>

                    <DialogTrigger>
                        <Button className="text-white uppercase rounded-sm bg-black pl-6 pr-6 pt-1 pb-1 hover:cursor-pointer hover:bg-red-600">Resume</Button>
                        <Modal className="z-2 fixed left-[50%] top-[50%] translate-[-50%] w-full h-full flex justify-center items-center backdrop-blur-lg bg-black/80">
                            <Dialog className="modal-pop-up bg-white flex flex-col gap-5 p-5 font-shareTech rounded-sm animate-modal-fade">
                                <div className="flex justify-between bg-linear-to-r from-red-200 to-orange-200 p-5 -ml-5 -mr-5 -mt-5 rounded-t-sm">
                                        <div>
                                            <p>Resume</p>
                                            <Heading className="text-2xl">Joshua Martinez</Heading>
                                        </div>
                                        <Button slot="close">
                                            <svg className="bg-white/30 hover:bg-red-500/20 rounded-full size-6 w-8 h-8 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </Button>
                                    </div>
                                    <div className="flex flex-col gap-10 justify-center">
                                        <p className="text-xl">Software Engineer - Frontend Developer</p>

                                        <div className="flex flex-col gap-10 p-5 bg-orange-500/10 rounded-sm border border-red-900">
                                            <div className="flex flex-col gap-2">
                                                <div>
                                                    <p className="uppercase">education</p>
                                                    <hr />
                                                </div>
                                                <div className="flex justify-between">
                                                    <p>B.S. Computer Science @ Texas State University</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <div>
                                                    <p className="uppercase">experience</p>
                                                    <hr />
                                                </div>

                                                <div className="flex justify-between">
                                                    <p>AI Tester and Validation @ Stellar AI</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <div>
                                                    <p className="uppercase">core competencies</p>
                                                    <hr />
                                                </div>

                                                <div className="flex flex-wrap gap-5">
                                                    <p>HTML5</p>
                                                    <p>CSS3</p>
                                                    <p>TypeScript</p>
                                                    <p>Tailwind CSS</p>
                                                    <p>React</p>
                                                    <p>Figma</p>
                                                </div>
                                            </div>
                                        </div>

                                        <a href="/Computer Science Resume.pdf" download className="flex justify-center items-center gap-4 text-xl text-white rounded-sm bg-black pl-6 pr-6 pt-1 pb-1 hover:cursor-pointer w-fit hover:bg-red-600">
                                            Download
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                            </svg>
                                        </a>
                                    </div>
                            </Dialog>
                        </Modal>
                    </DialogTrigger>
                </div>
            </nav>
        </header>
    );
}