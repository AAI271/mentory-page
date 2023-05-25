import React, {useState} from 'react';
import "./index.css"
import aboutImg from "../../assets/about.png";
import Modal from "../modal";
import {useTranslation} from "react-i18next";


const About = () => {
    const { t } = useTranslation();

    const [modal, setModal]=useState(false)

    return (
        <div className="about">
            <div className="about__text">
                <h2>
                    {t("aboutH2")}
                </h2>
                <h3>
                    {t("aboutH3")}
                </h3>
                <div className="about__form">
                    <button className="about__btn filled" onClick={()=>{setModal(true)}}>
                        {t("takeCourse")}
                    </button>
                </div>
            </div>
            <div className="about__img">
                <img src={aboutImg} alt=""/>
            </div>
            {modal?<Modal setModal={setModal}/>:<></>}
        </div>
    );
};

export default About;
