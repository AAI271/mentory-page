import React from 'react';
import "./index.css"
import Instagram from "../../assets/footer__links/instagram.svg"
import Linkedin from "../../assets/footer__links/linkedin.svg"
import Whatsapp from "../../assets/footer__links/Untitled.png"
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="footer__container marginX">
                <div className="footer__info">
                    <p className="footer__info-title"><strong>{t("footerCourse")}</strong></p>
                    <p><Link to="mentory-page/Data_Analysis">Data Analysis</Link></p>
                    <p><Link to="mentory-page/C_Sharp">C#</Link></p>
                    <p><Link to="mentory-page/Frontend">Frontend</Link></p>
                    <p><Link to="mentory-page/QA_Engineering">QA_Engineering</Link></p>
                </div>

                <hr/>
                <div className="footer__info">
                    <p className="footer__info-title"><strong>Mentory</strong></p>
                    <p><a href="#about">{t("footerMentory1")}</a></p>
                    <p><a href="#vacancy">{t("footerMentory2")}</a></p>
                    <p><a href="#roadmap">{t("footerMentory3")}</a></p>
                    <p><a href="#order">{t("footerMentory4")}</a></p>
                </div>

                <hr/>
                <div className="footer__info">
                    <p className="footer__info-title"><strong>{t("footerContacts")}</strong></p>
                    <p><a href="tel:+77710110102">+7 (771) 011-01-02</a></p>
                    <p>{t("footerContactsAddress")}</p>
                    <p><a href="mailto:info@mentory.pro">info@mentory.pro</a></p>
                </div>

                <hr/>
                <div className="footer__links">
                    <div>
                        <h5 className="footer__links-title">{t("footerCommunity")}</h5>
                        <div className="footer__contacts">
                            <a href="https://instagram.com/mentory_education?igshid=NTc4MTIwNjQ2YQ==">
                                <img src={Instagram} alt=""/>
                            </a>
                            <a href="https://www.linkedin.com/company/mentoryedu/">
                                <img src={Linkedin} alt=""/>
                            </a>
                            <a href="https://wa.me/+77770222988">
                                <img src={Whatsapp} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div>
                        <p>
                            {t("footerGray")}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
