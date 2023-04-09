import React, { useEffect } from "react";
import "./index.css";

function StepProcess() {
    useEffect(() => {
        const steps = document.querySelectorAll(".Thing-step");
        const line = document.querySelector(".Thing-dash");
        const content = document.querySelectorAll(".Thing-content")
        console.log(steps)

        steps.forEach((step, index) => {
            step.addEventListener("click", () => {
                line.style.transition = "width 0.5s ease-in-out";
                line.style.width = `${
                    step.parentNode.offsetLeft + step.offsetWidth / 2
                }px`;
                line.style.backgroundColor = "red";
                content.forEach((contn,ind)=>{
                    contn.style.display="none"
                })
                // Remove red color from all steps and line after animation completes
                const timer = setTimeout(() => {
                    content[index-1].style.display="block"
                }, 500);

                return () => {
                    clearTimeout(timer);
                }
            });
        });
    }, []);

    return (
        <div className="step-process">
            <div className="container">
                <div className="Thing-container">
                    <div className="Thing-dash-default"/>
                    <div className="Thing-dash"/>
                    <div className="Thing">
                        <div className="Thing-info">
                        </div>
                        <div className="Thing-step first"/>
                        <div className="Thing-info">
                            <h3>Ты здесь!</h3>
                        </div>
                    </div>
                    <div className="Thing">
                        <div className="Thing-info">
                            <h3>
                                Midterm
                                exam №1
                            </h3>
                        </div>
                        <div className="Thing-step"/>
                        <div className="Thing-info">
                            <p>Доработка функции мобильного приложения</p>
                        </div>
                        <div className="Thing-content">
                            <h3>Midterm exam №1</h3>
                            <p>Доработка функции мобильного приложения </p>
                        </div>
                    </div>

                    <div className="Thing">
                        <div className="Thing-info">
                            <h3>
                                Midterm
                                exam №2
                            </h3>
                        </div>
                        <div className="Thing-step"/>
                        <div className="Thing-info">
                            <p>Разработка модуля приложения - торговой  системы </p>
                        </div>
                        <div className="Thing-content">
                            <h3>Midterm exam №1</h3>
                            <p>Доработка функции мобильного приложения </p>
                        </div>
                    </div>

                    <div className="Thing">
                        <div className="Thing-info last">
                            <h3>Final exam</h3>
                        </div>
                        <div className="Thing-step"/>
                        <div className="Thing-info">
                            <p>Разработка модуля приложения - торговой системы </p>
                        </div>
                        <div className="Thing-content">
                            <h3>Midterm exam №1</h3>
                            <p>Доработка функции мобильного приложения </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StepProcess;
