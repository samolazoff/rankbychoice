import Link from "next/link";
import Image from "next/image";

import imgProfile from '../../../public/nav/profile.png';
import imgLogout from '../../../public/nav/logout.png';

const NavMobile = ({open, setOpen, user}) => {
    const linksGuest = [
        {title: "Features", href: "#fetures"},
        {title: "Examples", href: "#examples"},
        {title: "Pricing", href: "#pricing"}
    ];
    return (
        <div className={open?'menu-mobile flex flex-col h-screen w-full justify-center items-center gap-10 absolute z-0 top-0 right-0':'hidden'}>
            {
                user?(
                    <ul className="w-full flex flex-col justify-center items-center gap-5">
                        <li className="w-full">
                            <ul className="menu-login flex flex-row gap-4 w-full">
                                <li>
                                    <button className="flex flex-row items-end  gap-4 text-xl px-2 py-2 " onClick={() => setOpen(!open)}>
                                        <Image src={imgProfile} alt="profile img" width={48} height={48} />
                                        <span>User</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="flex flex-row items-end  gap-4 text-xl px-2 py-2" onClick={() => setOpen(!open)}>
                                        <Image src={imgLogout} alt="logout img" width={48} height={48} />
                                    </button>
                                </li>
                            </ul>
                        </li>
                        <li></li>

                    </ul>       
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
            <ul className="flex flex-col text-(--color-main) text-xl gap-5">
                {
                    linksGuest.map((itm, idx) => {
                        const {title, href} = itm;
                        return (
                            <li className="menu-nav-item px-2 py-2 hover:opacity-30 duration-300" key={idx} onClick={() => setOpen(!open)}>
                                <Link href={href}>{title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
            
    );
};

export default NavMobile;