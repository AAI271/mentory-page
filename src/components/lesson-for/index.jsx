import React from 'react';
import "./index.css"

const LessonFor = ( {lessonFor} ) => {
    return (
        <div className="lesson-for ">
            <h3>Кому подойдет курс?</h3>
            <div className="lesson-for__content">
                {lessonFor.list_info.map((item,index)=>(
                    <div key={`lesson-for-item${index}`} className="lesson-for__box" >
                        <p className="lesson-for__box-title">
                            <strong>{item.title}</strong>
                        </p>
                        <p className="lesson-for__box-text">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LessonFor;
