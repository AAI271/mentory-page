import React from 'react';
import "./index.css"

const Roadmap = () => {
    return (
        <div className="roadmap">
            <div className="roadmap__step">
                <div className="roadmap__circle-container">
                    <div className="roadmap__circle-half left green">

                    </div>
                    <div className="roadmap__circle-half right default">

                    </div>
                    <div className="roadmap__inner-circle">
                        Ты Здесь!
                    </div>
                </div>
            </div>
            <div className="roadmap__step left">
                <div className="roadmap__description">
                    <div className="roadmap__things">
                        <div className="roadmap__things-circle green">
                            <p className="roadmap__price">50%</p>
                        </div>
                        <div className="roadmap__things-line green">

                        </div>
                    </div>
                    <p>Доработка функции мобильного приложения</p>
                </div>
                <div className="roadmap__circle-container">
                    <div className="roadmap__circle-half left default">

                    </div>
                    <div className="roadmap__circle-half right green-blue">

                    </div>
                    <div className="roadmap__inner-circle">
                        <p>Midterm</p>
                        <h3>Exam 01</h3>
                    </div>
                </div>
            </div>
            <div className="roadmap__step right">
                <div className="roadmap__circle-container">
                    <div className="roadmap__circle-half blue left">

                    </div>
                    <div className="roadmap__circle-half right default">

                    </div>
                    <div className="roadmap__inner-circle">
                        <p>Midterm</p>
                        <h3>Exam 02</h3>
                    </div>
                </div>
                <div className="roadmap__description">
                    <div className="roadmap__things">
                        <div className="roadmap__things-circle blue">
                            <p className="roadmap__price">150%</p>
                        </div>
                        <div className="roadmap__things-line blue">

                        </div>
                    </div>
                    <p>Разработка модуля приложения - торговой системы</p>
                </div>
            </div>
            <div className="roadmap__step left">
                <div className="roadmap__description">
                    <div className="roadmap__things">
                        <div className="roadmap__things-circle violet">
                            <p className="roadmap__price">400%</p>
                        </div>
                        <div className="roadmap__things-line violet">

                        </div>
                    </div>
                    <p>Разработка модуля приложения - торговой системы</p>
                </div>
                <div className="roadmap__circle-container">
                    <div className="roadmap__circle-half left default">

                    </div>
                    <div className="roadmap__circle-half right blue-violet">

                    </div>
                    <div className="roadmap__inner-circle">
                        <p>Final</p>
                        <h3>Exam</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
