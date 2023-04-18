import React from 'react';
import "./index.css"
import BgImage from "../../assets/bg.png";

const About = () => {
    return (
        <div className="about main-box" style={{backgroundImage: `url(${BgImage})`}}>
            <div className="about__text">
                <h2>
                    Готовим специалистов
                    под вакансии в IT компаниях
                </h2>
                <h3>
                    Учись и зарабатывай
                </h3>
            </div>
            <form className="about__form" action="#">
                <input className="my-input" type="text" placeholder="Имя"/>
                <input className="my-input" type="tel" placeholder="Номер телефона"/>
                <button className="my-btn" type="submit">Записаться на курс</button>
            </form>
        </div>
    );
};

export default About;
