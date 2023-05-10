import React from 'react';
import "./index.css"

const LessonPlan = ({lessonPlan}) => {
    return (
        <div className="lesson-plan">
            {lessonPlan.plan_list.map((item,index)=>(
                <div key={`lesson-plan-${index}`} className="lesson-plan__item">
                    <div className="lesson-plan__item-container">
                        <div className="lesson-plan__item-week">
                            <h2>{`0${index+1}`}</h2>
                            <h3>Неделя</h3>
                        </div>
                        <div className="lesson-plan__item-text">
                            <p><strong>{item.title}</strong></p>
                            <ul>
                            {item.text.map((text,index)=>(
                                <li key={`lesson-plan-list${index}`}>{text}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    {index!==lessonPlan.plan_list.length-1&&(
                        <hr/>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LessonPlan;
