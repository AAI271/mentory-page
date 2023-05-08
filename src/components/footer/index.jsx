import React from 'react';
import "./index.css"
import Logo from "../../assets/Logo.svg"
import Instagram from "../../assets/footer__links/instagram.svg"
import Youtube from "../../assets/footer__links/youtube.svg"
import Linkedin from "../../assets/footer__links/linkedin.svg"
import Twitter from "../../assets/footer__links/twitter.svg"

const Footer = () => {
    const location = window.location.origin
    return (
        <footer>
            <div className="footer__container marginX">
                <div className="footer__info">
                    <p className="footer__info-title"><strong>Наши курсы</strong></p>
                    <p><a href={`${location}/mentory-page/Data_Analysis`}>Data Analysis</a></p>
                    <p><a href={`${location}/mentory-page/C_Sharp`}>C#</a></p>
                    <p><a href={`${location}/mentory-page/Frontend`}>Frontend</a></p>
                    <p><a href={`${location}/mentory-page/QA_Engineering`}>QA_Engineering</a></p>
                </div>

                <hr/>
                <div className="footer__info">
                    <p className="footer__info-title"><strong>Mentory</strong></p>
                    <p><a href="#about">О нас</a></p>
                    <p><a href="#vacancy">Наши курсы</a></p>
                    <p><a href="#roadmap">Учебный процесс</a></p>
                    <p><a href="#order">Отправить заказ</a></p>
                </div>

                <hr/>
                <div className="footer__info">
                    <p className="footer__info-title"><strong>Наши контакты</strong></p>
                    <p><a href="tel:+77710110102">+7 (771) 011-01-02</a></p>
                    <p>Астана,Проспект Мангилик Ел,С3.5,офис 203</p>
                    <p><a href="mailto:info@mentory.pro">info@mentory.pro</a></p>
                </div>

                <hr/>
                <div className="footer__links">
                    <div>
                        <h5 className="footer__links-title">Join The Community</h5>
                        <div className="footer__contacts">
                            <a href="https://www.instagram.com/mentory_education/">
                                <img width="50" src={Instagram} alt=""/>
                            </a>
                            <a href="https://www.instagram.com/mentory_education/">
                                <img width="50" src={Youtube} alt=""/>
                            </a>
                            <a href="https://www.instagram.com/mentory_education/">
                                <img width="50" src={Linkedin} alt=""/>
                            </a>
                            <a href="https://www.instagram.com/mentory_education/">
                                <img width="50" src={Twitter} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div>
                        <p>
                            © 2023, Mentory. All rights reserved.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
