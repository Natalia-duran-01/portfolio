import React, { useEffect } from "react";
import { HeaderBox } from "../../utils/exportStyles";
import { MenuMovil } from "../../components/MenuMovil";
import { MenuDesktop } from "../../components/MenuDesktop";

export const Nav = () => {

    useEffect(() => {
        const navbar = document.querySelector(".header-nav");
        let prevScrollPos = window.pageYOffset;
        window.onscroll = () => {
            if (navbar.style.top === "") {
                navbar.style.top = "0px";
            }
            let currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) navbar.style.top = "0px";
            else navbar.style.top = "-80px";
            prevScrollPos = currentScrollPos;
        };
    }, []);
    return (
        <HeaderBox>
            <header className="header-nav">
                <nav className="nav">
                    <MenuDesktop />
                    <MenuMovil />
                </nav>
            </header>
        </HeaderBox>
    );
};
