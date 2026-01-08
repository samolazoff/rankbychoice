import Logo from "../Logo/Logo";

import './Header.css'

const Header = () => {
    return (
        <header className="app-header flex flex-row justify-between items-center px-5 py-2.5">
            <Logo/>
        </header>
    );
};

export default Header;