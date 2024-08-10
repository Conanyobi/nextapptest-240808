import Link from "next/link";

export default function Nav() {
    return (
        <nav className="h-[50px] w-full bg-gray-800 text-white flex items-center gap-3 p-3">
            <Link href="/">Firestore database</Link>
            <Link href="/realtime">RealTime Database</Link>
            <Link href="/signInandUp">Login</Link>
            <Link href="/dashboard">Dashboard</Link>
        </nav>
    )
}