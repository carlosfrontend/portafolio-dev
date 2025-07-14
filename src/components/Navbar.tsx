'use client'
import ThemeSelector from './ThemeSelector'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LINKS } from '@/consts/consts'


export default function Navbar() {
    const pathName: string = usePathname()

    const handleClickItem = () => {
        const elem = document.activeElement;
        if (elem) {
            (elem as HTMLElement)?.blur();
        }
    }
    if (pathName.match(/\/studio\/*/)) return null
    return (
        <header className="navbar bg-base-100 border-b-1 border-base-content/10 sticky top-0 z-40">
            <div className="navbar-start">
                <div className="dropdown" >
                    <div tabIndex={0} role="button" aria-label='Menu' className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <nav className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4">
                        <ul tabIndex={0}>
                            {LINKS.map((link) => (
                                <li onClick={handleClickItem} key={link.name}><Link className={`${pathName === link.path ? "bg-primary text-white" : ""} text-lg`} href={link.path}>{link.name}</Link></li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <Link href={"/"} className="btn btn-ghost text-[15px] md:text-2xl">
                    <h1>Portafolio de Carlos Pulido</h1>
                </Link>
            </div>
            <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {LINKS.map((link) => (
                        <li key={link.name}><Link onClick={handleClickItem} className={`${pathName === link.path ? "bg-primary text-white " : ""} text-md`} href={link.path}>{link.name}</Link></li>
                    ))}
                </ul>
            </nav>
            <div className="navbar-end">
                <ThemeSelector />
            </div>
        </header>
    )
}
