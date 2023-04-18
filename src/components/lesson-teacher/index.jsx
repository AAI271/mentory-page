import React from 'react';
import "./index.css"

const LessonTeacher = ({lessonTeacher}) => {
    return (
        <div className="lesson-teacher">
            <h3 className="lesson-teacher__title">Наш преподаватель:</h3>
            <div className="lesson-teacher__content main-box">
                <div className="lesson-teacher__img">
                    <img width="300"  src={lessonTeacher.image} alt=""/>
                </div>
                <div className="lesson-teacher__about">
                    <p className="lesson-teacher__name">
                        <strong>{lessonTeacher.name}</strong> - {lessonTeacher.description}
                    </p>

                    <p>
                        {lessonTeacher.experience}
                    </p>
                    {lessonTeacher.graduated&&(
                        <p>
                            Graduated {lessonTeacher.graduated}
                        </p>
                    )}
                    {lessonTeacher.linkedIN&&(
                        <h3 className="lesson-teacher__linkedIn"><a href={lessonTeacher.linkedIN}>LinkedIn</a></h3>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LessonTeacher;
