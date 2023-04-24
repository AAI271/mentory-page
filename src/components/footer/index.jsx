import React from 'react';
import "./index.css"
import Logo from "../../assets/Logo.svg"
import Telegram from "../../assets/Vector.svg"
import Instagram from "../../assets/Vector (1).svg"
import Telegram2 from "../../assets/Vector (2).svg"
import Telegram3 from "../../assets/Vector (3).svg"

const Footer = () => {
    const location = window.location.origin
    return (
        <footer>
            <div className="footer__container marginX">
                <div className="footer__links">
                    <a href={location}>
                        <img width="160" src={Logo} alt="logo"/>
                    </a>
                    <div className="footer__contacts">
                        <a href="https://www.instagram.com/mentory_education/">
                            <img src={Instagram} alt=""/>
                        </a>
                    </div>
                </div>
                <hr/>
                <div className="footer__info">
                    <p className="footer__info-title"><strong>Наши курсы</strong></p>
                    <p><a href={`${location}/mentory-page/Data_Analysis`}>Data Analysis</a></p>
                    <p><a href={`${location}/mentory-page/C_Sharp`}>C#</a></p>
                    <p><a href={`${location}/mentory-page/Frontend`}>Frontend</a></p>
                    <p><a href={`${location}/mentory-page/QA_Engineering`}>QA_Engineering</a></p>
                </div>

                <hr/>
                <div className="footer__info">
                    <p className="footer__info-title"><strong>Наши контакты</strong></p>
                    <p><a href="tel:+77710110102">+7 (771) 011-01-02</a></p>
                    <p>Астана,Проспект Мангилик Ел,С3.5,офис 203</p>
                    <p><a href="mailto:info@mentory.pro">info@mentory.pro</a></p>
                </div>

                <hr/>
                <div className="footer__info">
                    <p className="footer__info-title"><strong>Mentory</strong></p>
                    <p><a href="#about">О нас</a></p>
                    <p><a href="#vacancy">Наши курсы</a></p>
                    <p><a href="#roadmap">Учебный процесс</a></p>
                    <p><a href="#order">Отправить заказ</a></p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
