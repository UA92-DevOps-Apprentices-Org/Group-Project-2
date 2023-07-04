import Link from "next/link";

export default function Navbar() {
    return <>
        <nav className="fixed flex items-center top-6 gap-24 px-24 left-6 right-6 h-16 z-20 bg-slate-800 rounded-full">
            <h1 className="text-2xl font-extrabold">DevNexus</h1>
            <Link className="text-lg font-bold ml-auto" href={""}>Home</Link>
            <Link className="text-lg font-bold" href={""}>Services</Link>
            <Link className="text-lg font-bold" href={""}>Portfolio</Link>
            <Link className="text-lg font-bold" href={""}>Contact</Link>

        </nav>
    </>
}