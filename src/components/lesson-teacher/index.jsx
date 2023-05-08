import React from 'react';
import "./index.css"
import Linkedin from "../../assets/linkedin.svg"

const LessonTeacher = ({lessonTeacher}) => {
    return (
        <div className="lesson-teacher">
            <h3 className="lesson-teacher__title">Наш преподаватель:</h3>
            <div className="lesson-teacher__content main-box">
                <div className="lesson-teacher__img">
                    <img width="250"  src={lessonTeacher.image} alt=""/>
                </div>
                <div className="lesson-teacher__about">
                    <div className="lesson-teacher__name">
                        <p>
                            <strong>{lessonTeacher.name}</strong>
                        </p>
                        {lessonTeacher.linkedIN&&(
                            <a href={lessonTeacher.linkedIN}>
                                <img src={Linkedin} alt=""/>
                            </a>
                        )}
                    </div>
                    <div className="lesson-teacher__info-list">
                        <div className="lesson-teacher__info">
                            <p>
                                {lessonTeacher.description}
                            </p>
                        </div>
                        <div className="lesson-teacher__info">
                            <p>
                                {lessonTeacher.experience}
                            </p>
                        </div>
                        {lessonTeacher.graduated&&(
                            <div className="lesson-teacher__info">
                                <p>
                                    Graduated {lessonTeacher.graduated}
                                </p>
                            </div>
                        )}
                    </div>
                    <p>Навыки:</p>
                    <div className="lesson-teacher__skills">
                        <div className="lesson-teacher__skills-list">
                            {lessonTeacher.skills.map((item,index)=>(
                                <div key={`lesson-teacher__skill- ${index}`} className="lesson-teacher__skill">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonTeacher;
