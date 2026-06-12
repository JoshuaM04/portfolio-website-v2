export default function Main() {
    return (
        <main className="bg-orange-100">
            <section id="hero" className="bg-linear-to-b from-orange-100 to-red-300 flex justify-center items-center gap-50 pt-110 pb-110 pl-5 pr-5">
                <div id="career-overview" className="flex flex-col gap-5">
                    <p className="font-semibold text-indigo-400">Software Engineer</p>
                    <h1 className="text-8xl">Joshua Martinez</h1>
                    <p className="text-slate-500">I specialize in crafting interactive, responsive, and accessible applications.</p>
                    
                    <div id="cta-buttons" className="font-semibold flex gap-5">
                        <button className="text-white uppercase rounded-sm bg-black pl-6 pr-6 pt-2 pb-2 hover:cursor-pointer hover:bg-red-600">Projects</button>
                        <button className="uppercase border-2 rounded-sm pl-6 pr-6 pt-2 pb-2 hover:cursor-pointer hover:bg-black hover:border-black hover:text-white">Contact</button>
                        <button className="text-white uppercase rounded-sm bg-indigo-400 pl-6 pr-6 pt-2 pb-2 hover:cursor-pointer hover:bg-indigo-300">Resume</button>
                    </div>
                </div>

                <div id="portrait">
                    <img className="rounded-sm" src="/austin-texas.webp" />
                </div>
            </section>

            <section id="personal-overview" className="flex flex-col items-center gap-10 pt-50 pb-50 pl-5 pr-5">
                <h2 className="text-6xl font-bold w-270">Personal Overview</h2>

                <div className="grid grid-cols-[500px_500px] gap-20">
                    <div className="flex flex-col gap-5">
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

                    <div className="flex flex-col gap-5 bg-white border border-red-200 shadow-lg p-5 h-min">
                        <p className="text-slate-500 font-semibold">Core Competencies</p>

                        <div className="flex flex-wrap gap-2">
                            <p className="border border-red-400 rounded-full pl-4 pr-4 pt-1 pb-1">HTML5</p>
                            <p className="border border-red-400 rounded-full pl-4 pr-4 pt-1 pb-1">CSS3</p>
                            <p className="border border-red-400 rounded-full pl-4 pr-4 pt-1 pb-1">TypeScript</p>
                            <p className="border border-red-400 rounded-full pl-4 pr-4 pt-1 pb-1">Tailwind CSS</p>
                            <p className="border border-red-400 rounded-full pl-4 pr-4 pt-1 pb-1">React</p>
                            <p className="border border-red-400 rounded-full pl-4 pr-4 pt-1 pb-1">Figma</p>
                            <p className="border border-red-400 rounded-full pl-4 pr-4 pt-1 pb-1">PostgreSQL</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="flex flex-col items-center gap-10 pt-50 pb-50 pl-5 pr-5">
                <h2 className="text-6xl font-bold w-270">Projects</h2>

                <div>
                    <div className="w-150 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer">
                        <img src="/loopStudiosDesktop.png" alt="" />
                        <div className="flex flex-col gap-5 bg-white p-5">
                            <p className="font-semibold">LoopStudios Landing Page</p>
                            <p className="text-slate-500">
                                An animation-driven landing page that showcases VR technology. Crafted with React to organize contents of the page into functional components, Tailwind CSS to enhance type-writer effects via the theme directive, and TypeScript
                                for static typing.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <p className="text-red-500 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">React</p>
                                <p className="text-red-500 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">TypeScript</p>
                                <p className="text-red-500 font-semibold bg-orange-100 rounded-full pl-4 pr-4 pt-1 pb-1">Tailwind CSS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience" className="flex flex-col items-center gap-10 pt-50 pb-50 pl-5 pr-5">
                <h2 className="text-6xl font-bold w-270">Experience</h2>

                <div>
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
        </main>
    );
}