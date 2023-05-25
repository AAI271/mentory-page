import React from 'react';
import "./index.css"
import SendForm from "../send-form";
import {useTranslation} from "react-i18next";

const Modal = ({setModal}) => {
    const {t} = useTranslation()
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
                    <h3>{t("modalH3")}</h3>
                    <p>{t("modalText")}</p>
                </div>
                <SendForm isEmail={false} message_type={'Записался на курс'}/>
            </div>
        </div>
    );
};

export default Modal;
