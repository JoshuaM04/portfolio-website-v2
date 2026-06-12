export default function Header() {
    return (
        <header className="border-b pl-5 pr-5 pb-5 -ml-5 -mr-5">
            <nav className="flex justify-between">
                <p className="text-xl font-bold">Joshua M<span className="text-blue-400">.</span></p>

                <ul className="text-slate-500 uppercase font-semibold flex justify-between gap-5">
                    <li><a>about</a></li>
                    <li><a>projects</a></li>
                    <li><a>experience</a></li>
                    <li><a>contact</a></li>
                </ul>
            </nav>
        </header>
    );
}