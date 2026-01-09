import Link from "next/link";
import Image from "next/image";

import imgProfile from '../../../public/nav/profile.png';

const Menu = ()=> {

    const links = [
        {title: "Features", href: "#fetures"},
        {title: "Examples", href: "#examples"},
        {title: "Pricing", href: "#pricing"}
    ];

    const user = true;

    return (
        <nav className="">
            <ul className="flex flex-row items-end gap-4 text-xl text-(--color-main) h-full">
                <li className="h-full">
                    <ul className="menu-nav flex-row hidden md:flex">
                        {
                            links.map((itm, idx) => {
                                const {title, href} = itm;
                                return (
                                    <li className="menu-nav-item px-2 py-2 hover:opacity-30 duration-300" key={idx}>
                                        <Link href={href}>{title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li className="hidden md:flex flex-row gap-4 text-xl text-(--color-primery)">
                    {
                        user?(
                            <button className="flex flex-row items-end  gap-4 text-xl px-2 py-2">
                                <Image src={imgProfile} alt="profile img" width={48} height={48} />
                                <span>User</span>
                            </button>

                        ):(
                            <ul className="menu-login flex flex-row gap-4 text-xl text-(--color-primery)"> 
                                <li className="px-2 py-2">
                                    <Link href={'/login'}>Sign In</Link>
                                </li>
                                <li className="px-2 py-2 border rounded">
                                    <Link href={'/register'}>Get started</Link>
                                </li>
                            </ul>
                        )
                    }
                   
                </li>
            </ul>
        </nav>
    );
};

export default Menu;