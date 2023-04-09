import React from 'react';
import "./index.css"
import Burger from "../../assets/burger.svg"
import Logo from "../../assets/Logo.svg"

const Header = () => {
    function toggleNav() {
        const navbar = document.getElementById("navbar")
        navbar.classList.toggle("show")
    }
    return (
        <header className="marginX">
            <div className="logo">
                <img width="125" src={Logo} alt="burger"/>
            </div>
            <nav className="nav">
                <ul id="navbar">
                    <li className="nav-link">
                        <a href="#income" onClick={toggleNav}>
                            Входящие уведомления
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="#outcome" onClick="toggleNav()">
                            Исходящие уведомления
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="#instructions" onClick="toggleNav()">
                            Инструкция call center
                        </a>
                    </li>
                </ul>
            </nav>
            <div id="burger" className="burger mobile" onClick={toggleNav}>
                <img src={Burger} alt="burger"/>
            </div>
        </header>

);
};

export default Header;
