import React from "react";
import { useContext } from "react";
import { BsTranslate } from "react-icons/bs";
import { LanguajeContext } from "../providers/LanguajeProvider";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";

export const MenuMovil = () => {
    const { languaje, changeLanguaje } = useContext(LanguajeContext);

    const openMenu = () => {
        var menu = document.querySelector(".menu-m");
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "flex";
        }
    };
    const closeMenu = () => {
        var menu = document.querySelector(".menu-m");
        var ancho = window.innerWidth;
        if (ancho <= 1200 && menu.style.display === "flex") {
            menu.style.display = "none";
        }
    };
    return (
        <div className="nav-movil">
            <div className="logo-movil">
                <span className="color-p">{"{"}</span>
                <span>{"i"}</span>
                <span className="color-p">{"}"}</span>
            </div>
            <div className="hamburger" onClick={openMenu}>
                {" "}
                <BiMenu className="icon-movil" />{" "}
            </div>
            <ul className="menu-m" onClick={closeMenu}>
                {languaje.menu.map((men, i) => (
                    <li className="menu-movil" key={i}>
                        <a className="menu-a" href={`#${men.link}`}>
                            <h6 className="color-p">{`0${i + 1}.`}</h6>
                            <h6 className="menu-title">{men.title}</h6>
                        </a>
                    </li>
                ))}

                <li className="menu-language" onClick={changeLanguaje}>
                    <BsTranslate className="icon-language" />.
                    <h6 className="text-language">{languaje.title}</h6>

                </li>
            </ul>
        </div>
    );
};
