import Link from "next/link";

const NavUser = ({user, open}) => {

    const links = [
        {title: "Features", href: "#fetures"},
        {title: "Examples", href: "#examples"},
        {title: "Pricing", href: "#pricing"}
    ];

    return (
        <ul className="menu-nav flex-row hidden md:flex text-(--color-main) h-full text-xl gap-5">
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
    );
};

export default NavUser;