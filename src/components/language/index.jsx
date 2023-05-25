import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import "./index.css"

const Language = () => {
    const [language,setLanguage] = useState('ru')
    const [isOption, setIsOption] = useState(false)

    const { i18n } = useTranslation();

    const change = (l) => {
        if(isOption) {
            i18n.changeLanguage(l).then(r => {
                setLanguage(l)
                setIsOption(false)
            });
        }
        else{
            setIsOption(true)
        }
    };
    return (
        <div className="language">
            <div className={`language__container ${isOption?'open':''}`}>
                <button className={`language__btn en ${language==='en'?'down':'up'}`} onClick={()=>{change('en')}}>
                    en
                </button>
                <button className={`language__btn ru ${language==='ru'?'down':'up'}`} onClick={()=>{change('ru')}}>
                    ru
                </button>
            </div>
        </div>
    );
};

export default Language;
