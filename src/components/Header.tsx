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
                        <li><a className="hover:animate-border hover:text-red-900 hover:cursor-pointer">contact</a></li>
                    </ul>

                    <button className="text-white uppercase rounded-sm bg-black pl-6 pr-6 pt-1 pb-1 hover:cursor-pointer hover:bg-red-600">Resume</button>
                </div>
            </nav>
        </header>
    );
}