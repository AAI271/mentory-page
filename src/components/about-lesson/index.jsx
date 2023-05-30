import React, {useEffect, useRef} from 'react';
import "./index.css"

const AboutLesson = ( {aboutLesson}) => {
    const lessonFormRef = useRef();

    useEffect(() => {
        const script = document.createElement('script');
        const scriptContainer = document.createElement('div');
        script.innerHTML = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1144806",hash:"15d2bdf2e7568ba10a2608d68d73ca50",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;

        const amoFormsScript = document.createElement('script');
        amoFormsScript.id = 'amoforms_script_1144806';
        amoFormsScript.async = true;
        amoFormsScript.charset = 'utf-8';
        amoFormsScript.src =
            'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1685445060';

        scriptContainer.appendChild(script)
        scriptContainer.appendChild(amoFormsScript)
        lessonFormRef.current.appendChild(scriptContainer);
        return () => {
            if (lessonFormRef.current) {
                const formChildNodes = lessonFormRef.current.childNodes;
                formChildNodes.forEach((childNode) => {
                    lessonFormRef.current.removeChild(childNode);
                });
            }
        };
    }, []);
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
            <div ref={lessonFormRef} className="about-lesson__form"></div>
        </div>
    );
};

export default AboutLesson;
