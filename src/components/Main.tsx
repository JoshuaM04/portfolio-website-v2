import {DialogTrigger} from 'react-aria-components/Modal';
import {Modal} from 'react-aria-components/Modal';
import {Dialog, Heading} from 'react-aria-components/Modal';
import {Button} from 'react-aria-components/Modal';

export default function Main() {
    return (
        <main className="bg-orange-100">
            <section id="hero" className="hero-container bg-linear-to-b from-orange-100 to-red-300 flex justify-center items-center flex-wrap gap-50 pl-5 pr-5">
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
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
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

            <section id="personal-overview" className="flex flex-col items-center gap-10 pt-50 pb-50 pl-5 pr-5">
                <h2 className="text-6xl font-bold">Personal Overview</h2>

                <div className="personal-overview-container flex flex-wrap gap-20">
                    <div className="personal-overview-text flex flex-col gap-5">
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

                    <div className="personal-overview-skills flex flex-col gap-5 bg-white border border-red-200 rounded-sm shadow-lg p-5 h-min">
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
                <div className="featured-projects-container flex flex-wrap gap-10">
                    <h2 className="text-6xl font-bold">Featured Projects</h2>
                    
                    <div className="featured-project bg-white rounded-sm w-120 shadow-sm transition-all duration-1000 ease-out hover:translate-y-[-3%] hover:shadow-xl hover:cursor-pointer">
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

                    <div className="featured-project bg-white rounded-sm w-120 shadow-sm transition-all duration-1000 ease-out hover:translate-y-[-3%] hover:shadow-xl hover:cursor-pointer">
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

                    <div className="featured-project bg-white rounded-sm w-120 shadow-sm transition-all duration-1000 ease-out hover:translate-y-[-3%] hover:shadow-xl hover:cursor-pointer">
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

                    <div className="featured-project bg-white rounded-sm w-120 shadow-sm transition-all duration-1000 ease-out hover:translate-y-[-3%] hover:shadow-xl hover:cursor-pointer">
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

                    <div className="featured-project bg-white rounded-sm w-120 shadow-sm transition-all duration-1000 ease-out hover:translate-y-[-3%] hover:shadow-xl hover:cursor-pointer">
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

                    <div className="featured-project bg-white rounded-sm w-120 shadow-sm transition-all duration-1000 ease-out hover:translate-y-[-3%] hover:shadow-xl hover:cursor-pointer">
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
                <div className="featured-experience-container flex flex-wrap gap-10">
                    <h2 className="text-6xl font-bold">Experience</h2>

                    <div className="featured-experience flex flex-col gap-5 bg-white border border-red-200 p-5 shadow-lg rounded-sm">
                        <div className="bg-linear-to-b from-orange-200 to-red-200 p-5 -ml-5 -mr-5 -mt-5">
                            <p className="text-red-900 text-lg font-bold">Stellar AI</p>
                            <p className="font-semibold text-red-500/60">AI Tester and Validation</p>
                        </div>

                        <div className="text-slate-500 flex flex-col gap-5">
                            <div className="text-red-900">
                                <p>2025 - 2025</p>
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

            <section id="contact" className="flex flex-col items-center gap-10 pt-50 pb-50 pl-5 pr-5">
                <div className="contact-information-container flex flex-wrap gap-10">
                    <h2 className="text-6xl font-bold">Contact</h2>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <p className="uppercase">Email:</p>
                            <p className="uppercase">Phone:</p>
                            <p className="uppercase">Location:</p>
                        </div>
                        <div className="flex gap-5">
                            <a href="">
                                <svg fill="#000000" width="40px" height="40px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.192"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect> <path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" data-name="github"></path> </g> </g></svg>
                            </a>
                            <a href="">
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="#000000"></path> </g></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}