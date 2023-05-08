import React from 'react';
import "./index.css"
import Burger from "../../assets/burger.svg"
import Logo from "../../assets/Logo.svg"

const Header = () => {
    function toggleNav() {
        const navbar = document.getElementById("navbar")
        navbar.classList.toggle("show")
    }
    const location = window.location.origin
    return (
        <header>
            <div className="logo">
                <a href={location}>
                <img width="165" src={Logo} alt="logo"/>
                </a>
            </div>
            <nav className="nav">
                <ul id="navbar">
                    <li className="nav-link">
                        <a href="#about" className='header__text'>
                            О нас
                        </a>
                    </li>
                    <li className="nav-link" >
                        <a href="#roadmap" className='header__text'>
                            Обучение
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="#vacancy" className='header__text'>
                            Вакансии
                        </a>
                    </li>
                    <li className="nav-link nav-link_empty">
                        <a href="#order" className='header__text'>
                            Записаться
                        </a>
                    </li>
                    <li className="nav-link nav-link_filled">
                        <a href="#order">
                            Войти
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
