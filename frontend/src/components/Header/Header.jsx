import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

import './Header.css'

const Header = () => {
    return (
        <header className="app-header px-5 py-2.5 h-25">
            <div className="container mx-auto my-0 flex flex-row justify-between items-end ">
                <Logo/>
                <Menu />
            </div>
        </header>
    );
};

export default Header;