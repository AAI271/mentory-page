import React from 'react';
import "./index.css"

const Order = () => {
    return (
        <div className="order main-box">
            <div className="order__text">
                <h2>
                    Есть фриланс заказ?
                    Выполнять будут выпускники, а мы ответственны за результат
                </h2>
            </div>
            <form className="order__form" action="#">
                <div>
                    <input className="my-input" type="text" placeholder="Имя"/>
                    <input className="my-input" type="tel" placeholder="Номер телефона"/>
                </div>
                <input className="my-input" type="email" placeholder="Email"/>
                <button className="my-btn" type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default Order;
