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
                            <Dialog className="modal-pop-up bg-white p-5 font-shareTech rounded-sm animate-modal-fade">
                                <div className="flex justify-between bg-linear-to-r from-red-200 to-orange-200 p-5 -ml-5 -mr-5 -mt-5">
                                    <div>
                                        <p>Resume</p>
                                        <Heading className="text-2xl">Joshua Martinez</Heading>
                                    </div>
                                    <Button slot="close">
                                        <svg className="bg-orange-300 rounded-full size-6 w-8 h-8 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </Button>
                                </div>
                            </Dialog>
                        </Modal>
                    </DialogTrigger>
                </div>
            </nav>
        </header>
    );
}