import React from 'react';
import "./index.css"
import SendForm from "../send-form";

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
            <SendForm isEmail={false} message_type={'Получить консультацию'}/>
        </div>
    );
};

export default AboutLesson;
