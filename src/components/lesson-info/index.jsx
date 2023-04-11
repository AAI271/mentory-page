import React from 'react';
import "./index.css"

const LessonInfo = ( {lessonInfo}) => {
    return (
        <div className="lesson-info main-box">
            <h2>О проекте</h2>
            <div className="lesson-info__text">
                {lessonInfo.text}
            </div>
        </div>
    );
};

export default LessonInfo;
