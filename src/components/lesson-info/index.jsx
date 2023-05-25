import React from 'react';
import "./index.css"
import {useTranslation} from "react-i18next";

const LessonInfo = ( {lessonInfo}) => {
    const {t} = useTranslation()
    return (
        <div className="lesson-info main-box">
            <h2>{t("lessonInfo")}</h2>
            <div className="lesson-info__text">
                {lessonInfo.text.map((item,index)=>(
                    <p key={`lesson-info-${index}`}>{item}</p>
                ))}
            </div>
        </div>
    );
};

export default LessonInfo;
