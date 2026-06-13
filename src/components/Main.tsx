import {DialogTrigger} from 'react-aria-components/Modal';
import {Modal} from 'react-aria-components/Modal';
import {Dialog, Heading} from 'react-aria-components/Modal';
import {Button} from 'react-aria-components/Modal';

export default function Main() {
    return (
        <main className="bg-orange-100">
            <section id="hero" className="bg-linear-to-b from-orange-100 to-red-300 flex justify-center items-center flex-wrap gap-50 pt-110 pb-110 pl-5 pr-5">
                <div id="career-overview" className="flex flex-col gap-5">
                    <p className="font-semibold text-indigo-400">Software Engineer</p>
                    <h1 className="text-8xl">Joshua Martinez</h1>
                    <p className="text-slate-500">I specialize in crafting interactive, responsive, and accessible applications.</p>
                    
                    <div id="cta-buttons" className="font-semibold flex gap-5">
                        <a href="#projects" className="text-white uppercase rounded-sm bg-black pl-6 pr-6 pt-2 pb-2 hover:cursor-pointer hover:bg-red-600">Projects</a>
                        <a href="#contact" className="uppercase border-2 rounded-sm pl-6 pr-6 pt-2 pb-2 hover:cursor-pointer hover:bg-black hover:border-black hover:text-white">Contact</a>
                        <DialogTrigger>
                            <Button className="text-white uppercase rounded-sm bg-indigo-400 pl-6 pr-6 pt-2 pb-2 hover:cursor-pointer hover:bg-indigo-300">Resume</Button>
                            <Modal className="bg-white absolute top-0 bottom-0 left-0 right-0 m-auto p-5 w-150 h-200 font-shareTech rounded-sm animate-modal-fade">
                                <Dialog>
                                    <div className="flex justify-between bg-linear-to-r from-red-200 to-orange-200 p-5 -ml-5 -mr-5 -mt-5">
                                        <div>
                                            <p>Resume</p>
                                            <Heading className="text-2xl">Joshua Martinez</Heading>
                                        </div>
                                        <Button slot="close">
                                            <svg className="bg-orange-300 rounded-full size-6 w-8 h-8 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path stroke-linecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </Button>
                                    </div>
                                </Dialog>
                            </Modal>
                        </DialogTrigger>
                    </div>
                </div>

                <div id="portrait">
                    <img className="rounded-sm" src="/austin-texas.webp" />
                </div>
            </section>

            <section id="personal-overview" className="flex flex-col special:items-center gap-10 pt-50 pb-50 pl-5 pr-5">
                <h2 className="text-6xl font-bold w-270 max-special:w-125">Personal Overview</h2>

                <div className="flex flex-wrap gap-20">
                    <div className="flex flex-col gap-5 w-125">
                        <p className="text-slate-500">
                            I'm a <span className="font-bold">recent graduate</span> Software Engineer specializing in building accessible, responsive web applications using
                            HTML, CSS, TypeScript, React, and Tailwind CSS, with a strong focus on WCAG
                            compliant design.
                        </p>
                        <p className="text-slate-500">
                            Experience enhancing AI model accuracy and optimizing development
                            workflows through testing and validation, alongside working with relational databases in
                            UNIX-like environments using PostgreSQL, SQL, and Bash. Actively expanding into back
                            end and full-stack development while continuously refining technical skills and workflow
                            efficiency.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 bg-white border border-red-200 rounded-sm shadow-lg p-5 h-min w-125">
                        <div className="bg-linear-to-b from-orange-200 to-red-200 p-5 -ml-5 -mr-5 -mt-5">
                            <p className="text-red-900 font-semibold">Core Competencies</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <p className="border border-red-400 rounded-full pl-4 pr-4 pt-1 pb-1 transition-all hover:bg-red-500/10 duration-1000 ease-out">HTML5</p>
                            <p className="border border-red-400 rounded-full pl-4 pr-4 pt-1 pb-1 transition-all hover:bg-red-500/10 duration-1000 ease-out">CSS3</p>
                            <p className="border border-red-400 rounded-full pl-4 pr-4 pt-1 pb-1 transition-all hover:bg-red-500/10 duration-1000 ease-out">TypeScript</p>
                            <p className="border border-red-400 rounded-full pl-4 pr-4 pt-1 pb-1 transition-all hover:bg-red-500/10 duration-1000 ease-out">Tailwind CSS</p>
                            <p className="border border-red-400 rounded-full pl-4 pr-4 pt-1 pb-1 transition-all hover:bg-red-500/10 duration-1000 ease-out">React</p>
                            <p className="border border-red-400 rounded-full pl-4 pr-4 pt-1 pb-1 transition-all hover:bg-red-500/10 duration-1000 ease-out">Figma</p>
                            <p className="border border-red-400 rounded-full pl-4 pr-4 pt-1 pb-1 transition-all hover:bg-red-500/10 duration-1000 ease-out">PostgreSQL</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="flex flex-col items-center gap-10 pt-50 pb-50 pl-5 pr-5">
                <h2 className="text-6xl font-bold w-270">Featured Projects</h2>

                <div className="flex flex-wrap gap-10 w-270">
                    <div className="bg-white rounded-sm w-120 shadow-sm transition-all duration-1000 ease-out hover:translate-y-[-3%] hover:shadow-xl hover:cursor-pointer">
                        <a href="https://loop-studios-landing-page-kohl.vercel.app/"><img className="rounded-t-sm border-b-2 border-red-400" src="/loopStudiosDesktop.png" alt="" /></a>
                        
                        <div className="flex flex-col gap-5 p-5">
                            <p className="font-semibold">LoopStudios Landing Page</p>
                            <p className="text-slate-500">
                                An animation-driven landing page that showcases VR technology. Crafted with React to organize contents of the page into functional components, Tailwind CSS to enhance type-writer effects via the theme directive, and TypeScript
                                for static typing.
                            </p>
                            <a href="https://github.com/JoshuaM04/LoopStudios-Landing-Page" className="flex items-center gap-2 hover:text-indigo-900 hover:font-bold">
                                Source
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </a>

                            <div className="flex flex-wrap gap-2">
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">React</p>
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">TypeScript</p>
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">Tailwind CSS</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-sm w-120 shadow-sm transition-all duration-1000 ease-out hover:translate-y-[-3%] hover:shadow-xl hover:cursor-pointer">
                        <a href="https://tip-calculator-app-brown-three.vercel.app/"><img className="rounded-t-sm border-b-2 border-red-400" src="/tipCalculatorDesktop.png" alt="" /></a>

                        <div className="flex flex-col gap-5 p-5">
                            <p className="font-semibold">Tip Calculator App</p>
                            <p className="text-slate-500">
                                A web application powered by React that uses useState() React hooks to store any active states (e.g. the tip button option that is selected). Furthermore, it utilizes a modular approach to organizing the parts of the webpage into different
                                functional components.
                            </p>
                            <a href="https://github.com/JoshuaM04/Tip-Calculator-App" className="flex items-center gap-2 hover:text-indigo-900 hover:font-bold">
                                Source
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </a>

                            <div className="flex flex-wrap gap-2">
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">React</p>
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">JavaScript</p>
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">Tailwind CSS</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-sm w-120 shadow-sm transition-all duration-1000 ease-out hover:translate-y-[-3%] hover:shadow-xl hover:cursor-pointer">
                        <a href="https://contact-form-eosin-psi.vercel.app/"><img className="rounded-t-sm border-b-2 border-red-400" src="/contactFormDesktop.png" alt="" /></a>

                        <div className="flex flex-col gap-5 p-5">
                            <p className="font-semibold">Contact Form</p>
                            <p className="text-slate-500">
                                A interative contact form using custom-built regex classifications for user input. This customized approach allows dynamic styling for error states pertaining to input fields. Furthermore, the application is powered by React.
                            </p>
                            <a href="https://github.com/JoshuaM04/Contact-Form" className="flex items-center gap-2 hover:text-indigo-900 hover:font-bold">
                                Source
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </a>

                            <div className="flex flex-wrap gap-2">
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">HTML5</p>
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">CSS3</p>
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">JavaScript</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-sm w-120 shadow-sm transition-all duration-1000 ease-out hover:translate-y-[-3%] hover:shadow-xl hover:cursor-pointer">
                        <a href="https://time-tracking-dashboard-zeta-plum.vercel.app/"><img className="rounded-t-sm border-b-2 border-red-400" src="/timeTrackingDashboardDesktop.png" alt="" /></a>

                        <div className="flex flex-col gap-5 p-5">
                            <p className="font-semibold">Time Tracking Dashboard</p>
                            <p className="text-slate-500">
                                A multi-component web application that features a responsive design, allowing the components to be organized differently within a grid. The information showcased is dynamically rendered to the webpage via user input when selecting
                                an option such as 'Daily', 'Weekly', or 'Monthly' which is fetched from an external data.json file.
                            </p>
                            <a href="https://github.com/JoshuaM04/Time-Tracking-Dashboard" className="flex items-center gap-2 hover:text-indigo-900 hover:font-bold">
                                Source
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </a>

                            <div className="flex flex-wrap gap-2">
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">HTML5</p>
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">CSS3</p>
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">JavaScript</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-sm w-120 shadow-sm transition-all duration-1000 ease-out hover:translate-y-[-3%] hover:shadow-xl hover:cursor-pointer">
                        <a href="https://news-homepage-seven-sooty.vercel.app/"><img className="rounded-t-sm border-b-2 border-red-400" src="/newsHomepageDesktop.png" alt="" /></a>

                        <div className="flex flex-col gap-5 p-5">
                            <p className="font-semibold">News Homepage</p>
                            <p className="text-slate-500">
                                A website application that showcases sections tailored to different types of media. The application applies a unique navigation menu on mobile resolutions which uses a modal pop-up which is activated via user-input and a navigation list on
                                desktop resolutions.
                            </p>
                            <a href="https://github.com/JoshuaM04/News-Homepage" className="flex items-center gap-2 hover:text-indigo-900 hover:font-bold">
                                Source
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </a>

                            <div className="flex flex-wrap gap-2">
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">HTML5</p>
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">CSS3</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-sm w-120 shadow-sm transition-all duration-1000 ease-out hover:translate-y-[-3%] hover:shadow-xl hover:cursor-pointer">
                        <a href="https://interactive-rating-component-azure-seven.vercel.app/"><img className="rounded-t-sm border-b-2 border-red-400" src="/interactiveRatingComponentDesktop.png" alt="" /></a>

                        <div className="flex flex-col gap-5 p-5">
                            <p className="font-semibold">Interactive Rating Component</p>
                            <p className="text-slate-500">
                                An interactive rating component that uses React to store the rating via user-input. The rating is determined by user-selection amongst
                                an array of buttons that are rendered via a .map() callback function. Upon submission, the state variable that contains
                                the rating is then displayed to the user in a pop-over dialog.
                            </p>
                            <a href="https://github.com/JoshuaM04/Interactive-Rating-Component" className="flex items-center gap-2 hover:text-indigo-900 hover:font-bold">
                                Source
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </a>

                            <div className="flex flex-wrap gap-2">
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">React</p>
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">TypeScript</p>
                                <p className="text-red-500/60 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">Tailwind CSS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience" className="flex flex-col items-center gap-10 pt-50 pb-50 pl-5 pr-5">
                <h2 className="text-6xl font-bold w-270">Experience</h2>

                <div className="w-270">
                    <div className="flex flex-col gap-5 bg-white border border-red-200 p-5 w-100 shadow-lg">
                        <div className="bg-linear-to-b from-orange-200 to-red-200 p-5 -ml-5 -mr-5 -mt-5">
                            <p className="text-red-900 text-lg font-bold">Stellar AI</p>
                            <p className="font-semibold text-red-500">AI Tester and Validation</p>
                        </div>

                        <div className="text-slate-500 flex flex-col gap-5">
                            <div className="text-red-900">
                                <p>January 2025 - April 2025</p>
                                <p>Remote</p>
                            </div>
                            
                            <p>
                                Executed performance and accuracy evaluations on machine learning models
                                using Python, boosting model accuracy by 15%, and analyzed sample batches to
                                document reproducible scenarios that improved AI-driven GitHub issue resolution
                                speed and accuracy by 20%.
                            </p>
                            <p>
                                Authored detailed technical specifications for 10+ GitHub issues, enabling AI
                                models to reliably reproduce complex virtualized-environment bugs and
                                streamline automated troubleshooting workflows.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                
            </section>
        </main>
    );
}