import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import "./index.css"

const Language = () => {
    const [language,setLanguage] = useState('ru')

    const { i18n } = useTranslation();

    const change = () => {
        const l = language==='ru'?'en':'ru'
        i18n.changeLanguage(l).then(r => {
                setLanguage(l)
        })
    };
    return (
        <div className="language">
            <button className={`language__btn ${language==='ru'?'ru':'en'}`} onClick={change}>
                {language}
            </button>
        </div>
    );
};

export default Language;
