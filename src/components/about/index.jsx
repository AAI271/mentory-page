import React, {useState} from 'react';
import "./index.css"
import aboutImg from "../../assets/about.png";
import Modal from "../modal";


const About = () => {
    const [modal, setModal]=useState(false)

    return (
        <div className="about">
            <div className="about__text">
                <h2>
                    Обучение через выполнение настоящих заказов
                </h2>
                <h3>
                    Учись лучше других, выполняй задания, повышай свои скиллы и зарабатывай на Mentory
                </h3>
                <div className="about__form">
                    <button className="about__btn filled" onClick={()=>{setModal(true)}}>
                        Записаться
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
