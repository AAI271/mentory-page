import React from 'react';
import "./index.css"
import SendForm from "../send-form";

const Order = () => {
    return (
        <div className="order main-box">
            <div className="order__text">
                <h2>
                    Есть фриланс заказ?
                </h2>
                <p>
                    Выполнять будут выпускники, а мы ответственны за результат
                </p>
            </div>
            <SendForm isEmail={true} />
        </div>
    );
};

export default Order;
