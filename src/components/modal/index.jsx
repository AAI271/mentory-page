import React, { useEffect, useRef } from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';

const Modal = ({ setModal }) => {
    const { t } = useTranslation();

    const closeModal = (event) => {
        event.preventDefault();
        if (event.target.classList.contains('modal')) {
            setModal(false);
        }
    };

    const formRef = useRef();

    useEffect(() => {
        const script = document.createElement('script');
        script.innerHTML = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1144762",hash:"4e12781ec5203a2daa244c3adb2c69eb",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;

        const amoFormsScript = document.createElement('script');
        amoFormsScript.id = 'amoforms_script_1144762';
        amoFormsScript.async = true;
        amoFormsScript.charset = 'utf-8';
        amoFormsScript.src =
            'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1685444331';

        formRef.current.appendChild(script);
        formRef.current.appendChild(amoFormsScript);

        return () => {
            if (formRef.current) {
                const formChildNodes = formRef.current.childNodes;
                formChildNodes.forEach((childNode) => {
                    formRef.current.removeChild(childNode);
                });
            }
        };
    }, []);


    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal__content animate">
                <div className="modal__text">
                    <h3>{t('modalH3')}</h3>
                    <p>{t('modalText')}</p>
                </div>
                <div className="modal__form" ref={formRef}></div>
            </div>
        </div>
    );
};

export default Modal;
