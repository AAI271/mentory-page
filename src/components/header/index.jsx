import React, {useState} from 'react';
import "./index.css"
import Burger from "../../assets/burger.svg"
import Logo from "../../assets/Logo.svg"
import Modal from "../modal";

const Header = () => {
    const [modal, setModal]=useState(false)

    function toggleNav() {
        const navbar = document.getElementById("navbar")
        navbar.classList.toggle("show")
    }
    const location = window.location.origin
    return (
        <header className="marginX">
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
                    <li className="nav-link" onClick={()=>{setModal(true)}}>
                        <a className='header__text nav-link_empty'>
                            Записаться
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="https://mentory.pro/auth/login " className="nav-link_filled">
                            Войти
                        </a>
                    </li>
                </ul>
            </nav>
            <div id="burger" className="burger mobile" onClick={toggleNav}>
                <img src={Burger} alt="burger"/>
            </div>
            {modal?<Modal setModal={setModal}/>:<></>}
        </header>

);
};

export default Header;
