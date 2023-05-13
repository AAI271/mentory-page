import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./index.css";

const SendForm = ({ isEmail }) => {
    const message_type = isEmail ? "Фриланс заказ" : "Записался на курс";
    const orderForm = useRef();
    const enrollForm = useRef();
    const message = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const cleanForm = isEmail ? orderForm.current : enrollForm.current;
        const form = cleanForm.cloneNode(true);

        cleanForm.user_name.value=""
        cleanForm.user_phone_number.value=""

        if(form.user_name.value && form.user_phone_number.value){
            emailjs.sendForm(
                'service_m9jpkrq',
                'template_jj54xxn',
                form,
                'qD7CZ7n1WvXqEb3GR')
                .then((result) => {
                    message.current.textContent="Ваше сообщение успешно отправлено."
                    message.current.classList.remove('red')
                    message.current.classList.add('green')
                })
                .catch((error) => {
                    message.current.textContent="Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз."
                    message.current.classList.remove('green')
                    message.current.classList.add('red')
                });
        }
        else{
            message.current.textContent="Пожалуйста, заполните все обязательные поля формы."
            message.current.classList.remove('red')
            message.current.classList.add('red')
        }
    };

    return (
        <div className="send-form">
            {isEmail ? (
                <form ref={orderForm} className="order__form" onSubmit={sendEmail}>
                    <div>
                        <input name="user_name" className="my-input" type="text" placeholder="Имя" />
                        <input name="user_phone_number" className="my-input" type="tel" placeholder="Номер телефона" />
                        <input name="message_type" style={{ display: "none" }} type="text" readOnly value={message_type} />
                    </div>
                    <input name="user_email" className="my-input" type="email" placeholder="Email" />
                    <button className="my-btn" type="submit">Отправить</button>
                </form>
            ) : (
                <div className="modal__form">
                    <form ref={enrollForm}>
                        <input name="user_name" className="my-input" type="text" placeholder="Имя" />
                        <input name="user_phone_number" className="my-input" type="tel" placeholder="Номер телефона" />
                        <input name="message_type" style={{ display: "none" }} type="text" readOnly value={message_type} />
                        <button className="my-btn" type="button" onClick={sendEmail}>
                            Отправить
                        </button>
                    </form>
                </div>
            )}
            <div ref={message} className="send-form__message"/>
        </div>
    );
};

export default SendForm;
