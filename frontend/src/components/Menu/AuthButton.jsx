import Image from "next/image";
import Link from "next/link";

import imgProfile from '../../../public/nav/profile.png';
import imgLogout from '../../../public/nav/logout.png';

const AuthButton = ({user}) => {
    return (
    <div className="hidden md:flex flex-row gap-4 text-xl text-(--color-primery) hover:opacity-30 duration-300 cursor-pointer">
        {
            user?(
                <ul className="menu-login flex flex-row gap-4">
                    <li>
                        <button className="flex flex-row items-end  gap-4 text-xl px-2 py-2">
                            <Image src={imgProfile} alt="profile img" width={48} height={48} />
                            <span>User</span>
                        </button>
                    </li>
                    <li>
                        <button className="flex flex-row items-end  gap-4 text-xl px-2 py-2">
                            <Image src={imgLogout} alt="logout img" width={48} height={48} />
                        </button>
                    </li>
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
    </div>
        
    );
};

export default AuthButton;