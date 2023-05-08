import React from 'react';
import "./index.css"
import aboutImg from "../../assets/about.png";


const About = () => {
    return (
        <div className="about">
            <div className="about__text">
                <h2>
                    Learn, create, and sell encouraging courses
                </h2>
                <h3>
                    Study exclusive courses on the subject of technical education and much more
                </h3>
                <div className="about__form">
                    <button className="about__btn filled">
                        Explore
                    </button>
                    <button className="about__btn empty">
                        Create
                    </button>
                </div>
            </div>
            <div className="about__img">
                <img width="500" src={aboutImg} alt=""/>
            </div>
        </div>
    );
};

export default About;
