import React, {useEffect} from 'react';
import loginIcon from "../../assets/step-works-icon/login.svg"
import chatLockIcon from "../../assets/step-works-icon/chat-lock.svg"
import dealIcon from "../../assets/step-works-icon/deal.svg"
import bagCoinIcon from "../../assets/step-works-icon/money bag-coin.svg"
import profitIcon from "../../assets/step-works-icon/profit 02.svg"
import rankIcon from "../../assets/step-works-icon/rank.svg"
import studentsIcon from "../../assets/step-works-icon/students.svg"
import pacmanImg from "../../assets/pakman.png"
import ghostImg from "../../assets/ghost.png"
import "./index.css"

const WorkStep = () => {
    useEffect(() => {
        const boxes = document.querySelectorAll('.work-step__box');
        const points = document.querySelectorAll('.work-step__point');
        let id;
        const handleBoxMouseEnter = (event) => {
            id = event.srcElement.id
            points[id-1].classList.add("highlight")
        };

        const handleBoxMouseLeave = () => {
            points[id-1].classList.remove("highlight")
        };

        boxes.forEach((box) => {
            box.addEventListener('mouseenter', handleBoxMouseEnter);
            box.addEventListener('mouseleave', handleBoxMouseLeave);
        });

        return () => {
            boxes.forEach((box) => {
                box.removeEventListener('mouseenter', handleBoxMouseEnter);
                box.removeEventListener('mouseleave', handleBoxMouseLeave);
            });
        };
    }, []);
    return (
        <div className="work-step">
            <div className="work-step__left">
                <div id="1" className="work-step__box">
                    <div className="work-step__icon">
                        <img src={loginIcon} alt=""/>
                    </div>
                    <div className="work-step__text">
                        <h3>Вход студента на платформу</h3>
                        <p>Выбирает курс, подходящий по уровню и теме.</p>
                    </div>
                </div>
                <div id="3" className="work-step__box">
                    <div className="work-step__icon">
                        <img src={profitIcon} alt=""/>
                    </div>
                    <div className="work-step__text">
                        <h3>Learn2Earn</h3>
                        <p>Учись лучше других и зарабатывай на этом.</p>
                    </div>
                </div>
                <div id="5" className="work-step__box">
                    <div className="work-step__icon">
                        <img src={dealIcon} alt=""/>
                    </div>
                    <div className="work-step__text">
                        <h3>100% практики</h3>
                        <p>Максимум проектного обучения и минимум теории.</p>
                    </div>
                </div>
                <div id="7" className="work-step__box ">
                    <div className="work-step__icon">
                        <img src={studentsIcon} alt=""/>
                    </div>
                    <div className="work-step__text">
                        <h3>Результат</h3>
                        <p>Наши выпускники - это специалисты с практическим опытом и портфолио, готовые сразу приступить к работе</p>
                    </div>
                </div>
            </div>
            <div className="work-step__right">
                <div id="2" className="work-step__box ">
                    <div className="work-step__icon">
                        <img src={bagCoinIcon} alt=""/>
                    </div>
                    <div className="work-step__text">
                        <h3>Депозитная система</h3>
                        <p>Если сдашь все экзамены успешно, вернешь 100% депозита.</p>
                    </div>
                </div>
                <div id="4" className="work-step__box ">
                    <div className="work-step__icon">
                        <img src={chatLockIcon} alt=""/>
                    </div>
                    <div className="work-step__text">
                        <h3>P2P Community</h3>
                        <p>Попадешь в закрытые чаты, где ты сможешь обмениваться опытом и знаниями.</p>
                    </div>
                </div>
                <div id="6" className="work-step__box ">
                    <div className="work-step__icon">
                        <img src={rankIcon} alt=""/>
                    </div>
                    <div className="work-step__text">
                        <h3>Tasker</h3>
                        <p>Сделай лучшее решение за денежное вознаграждение.</p>
                    </div>
                </div>
            </div>
            <div className="work-step__line">
                <div className="work-step__img">
                    <img width="50" src={pacmanImg} alt=""/>
                </div>

                <div className="work-step__points">
                    <div className="work-step__road"/>
                    <div className="work-step__point ">
                    </div>
                    <div className="work-step__point ">
                    </div>
                    <div className="work-step__point ">
                    </div>
                    <div className="work-step__point ">
                    </div>
                    <div className="work-step__point ">
                    </div>
                    <div className="work-step__point ">
                    </div>
                    <div className="work-step__point ">
                    </div>
                </div>
                <div className="work-step__img">
                    <img width="50" src={ghostImg} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default WorkStep;
