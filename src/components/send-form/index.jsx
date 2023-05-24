import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import "./index.css";

const SendForm = ({ isEmail,message_type }) => {
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
            console.log(form)
            setMessageText("Ваше сообщение успешно отправлено.")
            setIsSent(true)
        }
        else{
            setMessageText("Пожалуйста, заполните все обязательные поля формы.")
            setIsSent(false)
        }
        // setMessageText("Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.")
        // setIsSent(false)

    };

    return (
        <div className="send-form">
            <form ref={sendForm} className="send-form__form" onSubmit={sendEmail}>
                <div className={isEmail?'row':'column'}>
                    <input name="user_name" className="my-input" type="text" placeholder="Имя" />
                    <input name="user_phone_number" className="my-input" type="tel" placeholder="Номер телефона" />
                </div>
                {isEmail?
                    <input name="user_email" className="my-input" type="email" placeholder="Email" />
                    :<></>
                }
                <button className="my-btn" type="submit">{message_type==="Получить консультацию"?"Получить консультацию":"Отправить"}</button>
            </form>
            <div ref={message} className={`send-form__message ${isSent?'green':'red'}`}>
                {messageText}
            </div>
        </div>
    );
};

export default SendForm;
