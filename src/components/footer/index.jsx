import React from 'react';
import "./index.css"
import Logo from "../../assets/footer-logo.png"
import Telegram from "../../assets/Vector.svg"
import Telegram1 from "../../assets/Vector (1).svg"
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
                        <img src={Telegram} alt=""/>
                        <img src={Telegram1} alt=""/>
                        <img src={Telegram2} alt=""/>
                        <img src={Telegram3} alt=""/>
                    </div>
                </div>
                <hr/>
                <div className="footer__info">
                    <p>Connect</p>
                    <p>123-456-7890</p>
                    <p>123 Anywhere St., Any City, ST 12345 </p>
                    <p>hello@reallygreatsite.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
