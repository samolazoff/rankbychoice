"use client";

import { useState } from "react";

import Logo from "../Logo/Logo";
import NavUser from "../Menu/NavUser";
import AuthButton from "../Menu/AuthButton";
import Burger from "../Burger/Burger";
import NavMobile from "../Menu/NavMobile";

import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(false);

    return (
        <header className="app-header px-5 py-2.5 h-25 relative">
            <NavMobile open={open} setOpen={setOpen} user={user}/>
            <div className="container mx-auto my-0 flex flex-row justify-between items-end relative z-10">
                <Logo/>
                <NavUser user={user} open={open}/>
                <AuthButton user={user}/>
                <Burger open={open} setOpen={setOpen}></Burger>
            </div>
        </header>
    );
};

export default Header;