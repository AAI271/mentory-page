import React from 'react';
import "./index.css"
import SendForm from "../send-form";

const Modal = ({setModal}) => {
    const closeModal = (event)=>{
        event.preventDefault()
        if(event.target.classList.contains("modal")){
            setModal(false)
        }
    }
    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal__content animate">
                <div className="modal__text">
                    <h3>Готов стать лучшим и начать зарабатывать сегодня?</h3>
                    <p>Оставь свои контактные данные и начни свой путь к успеху уже сейчас</p>
                </div>
                <SendForm isEmail={false}/>

            </div>
        </div>
    );
};

export default Modal;
