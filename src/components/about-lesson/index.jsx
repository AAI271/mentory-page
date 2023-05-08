import React from 'react';
import "./index.css"

const AboutLesson = ( {aboutLesson}) => {
    return (
        <div className="about-lesson main-box">
            <div className="about-lesson__content">
                <h2>
                    {aboutLesson.text}
                </h2>
                <div className="about-lesson__stack-list">
                    {aboutLesson.stackList.map((stack,index)=>(
                        <div key={`stack ${index}`} className="about-lesson__stack-border">
                            <div className="about-lesson__stack">
                                <p><strong>{stack}</strong></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <form className="about-lesson__form" action="#">
                <input className="my-input" type="text" placeholder="Имя"/>
                <input className="my-input" type="tel" placeholder="Номер телефона"/>
                <button className="my-btn" type="submit">Получить консультацию</button>
            </form>
        </div>
    );
};

export default AboutLesson;
