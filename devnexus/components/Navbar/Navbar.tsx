import Link from "next/link";

export default function Navbar() {
    return <>
        <nav className="fixed flex items-center top-6 gap-24 px-24 left-6 right-6 h-16 z-20 bg-slate-800 rounded-full">
            <Link className="text-2xl font-extrabold" href={"/"}>DevNexus</Link>
            <Link className="text-lg font-bold ml-auto" href={"/about"}>About Us</Link>
            <Link className="text-lg font-bold" href={"/services"}>Services</Link>
            <Link className="text-lg font-bold" href={"/portfolio"}>Portfolio</Link>
            <Link className="text-lg font-bold" href={""}>Contact</Link>

        </nav>
    </>
}