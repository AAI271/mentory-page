import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import "./index.css";
import {useTranslation} from "react-i18next";

const SendForm = ({ isEmail,message_type }) => {
    const {t} = useTranslation()
    const sendForm = useRef();
    const message = useRef();
    const [isSent, setIsSent] = useState(false)

    const [messageText,setMessageText] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
        const form = {
            user_name:sendForm.current.user_name.value,
            user_phone_number:sendForm.current.user_phone_number.value,
            message_type:message_type,
            user_email:isEmail?sendForm.current.user_email.value:'',
        }
        if(form.user_name && form.user_phone_number) {
            setMessageText(t("formMessage1"))
            setIsSent(true)
        }
        else{
            setMessageText(t("formMessage2"))
            setIsSent(false)
        }
        // setMessageText(t("formMessage3"))
        // setIsSent(false)

    };

    return (
        <div className="send-form">
            <form ref={sendForm} className="send-form__form">
                <div className={isEmail?'row':'column'}>
                    <input name="user_name" className="my-input" type="text" placeholder={t("formName")} />
                    <input name="user_phone_number" className="my-input" type="tel" placeholder={t("formPhoneNumber")} />
                </div>
                {isEmail?
                    <input name="user_email" className="my-input" type="email" placeholder={t("formEmail")} />
                    :<></>
                }
                <button className="my-btn" onClick={sendEmail}>{message_type==="Получить консультацию"?t("formButton2"):t("formButton1")}</button>
            </form>
            <div ref={message} className={`send-form__message ${isSent?'green':'red'}`}>
                {messageText}
            </div>
        </div>
    );
};

export default SendForm;
