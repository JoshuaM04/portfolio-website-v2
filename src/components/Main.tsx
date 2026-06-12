export default function Main() {
    return (
        <main>
            <section id="hero" className="flex justify-around items-center gap-10">
                <div id="career-overview" className="flex flex-col gap-5">
                    <p className="font-semibold text-blue-400">Software Engineer</p>
                    <h1 className="text-8xl">Joshua Martinez</h1>
                    <p className="text-slate-500">I specialize in crafting interactive, responsive, and accessible applications.</p>
                    
                    <div id="cta-buttons" className="font-semibold flex gap-5">
                        <button className="text-white uppercase bg-black pl-6 pr-6 pt-2 pb-2">Projects</button>
                        <button className="uppercase border-2 pl-6 pr-6 pt-2 pb-2">Contact</button>
                        <button className="text-white uppercase bg-blue-400 pl-6 pr-6 pt-2 pb-2">Resume</button>
                    </div>
                </div>

                <div id="portrait">
                    <img src="/austin-texas.webp" />
                </div>
            </section>
        </main>
    );
}