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
                <img width="125" src={Logo} alt="logo"/>
            </div>
            <nav className="nav">
                <ul id="navbar">
                    <li className="nav-link">
                        <a href="#about">
                            О нас
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="#roadmap">
                            Обучение
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="#vacancy">
                            Вакансии
                        </a>
                    </li>
                    <li className="nav-link last">
                        <a href="#order">
                            Записаться
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
