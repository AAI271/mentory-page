import React from 'react';
import "./index.css"

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
                <div className="modal__form">
                    <form >
                        <input className="my-input" type="text" placeholder="Имя"/>
                        <input className="my-input" type="tel" placeholder="Номер телефона"/>
                        <button className="my-btn" type="submit">Отправить</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Modal;
