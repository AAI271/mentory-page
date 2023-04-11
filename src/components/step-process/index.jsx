import React, { useEffect } from "react";
import "./index.css";
import TopIcon from "../../assets/icontop-removebg-preview.png"

function StepProcess() {
    useEffect(() => {
        const steps = document.querySelectorAll(".Thing-step");
        const line = document.querySelector(".Thing-dash");
        const lineDefault = document.querySelector(".Thing-dash-default");
        const content = document.querySelectorAll(".Thing-content")
        const pointer = document.querySelectorAll(".Thing-pointer")
        if(window.innerWidth<651){
            content[0].style.display="block"
        }
        pointer[0].style.opacity="1"

        lineDefault.style.width=`${steps[3].parentNode.offsetLeft + steps[3].offsetWidth / 2}px`
        steps.forEach((step, index) => {
            step.addEventListener("click", () => {
                line.style.transition = "width 0.5s ease-in-out";
                line.style.width = `${
                    step.parentNode.offsetLeft + step.offsetWidth / 2
                }px`;
                line.style.backgroundColor = "red";
                content.forEach((contn,ind)=>{
                    contn.style.display="none"
                    pointer[ind].style.opacity="0"
                })
                const timer = setTimeout(() => {
                    pointer[index].style.opacity="1"
                    if(index!==0) {
                        content[index].style.display = "block"
                    }
                    else if(window.innerWidth<651){
                        content[index].style.display = "block"
                    }
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
                        <div className="Thing-info"/>
                        <div className="Thing-step first"/>
                        <div className="Thing-info">
                            <h3>Ты здесь!</h3>
                        </div>
                        <img className="Thing-pointer" width="20" src={TopIcon} alt=""/>
                        <div className="Thing-content">
                            <h3>Ты здесь!</h3>
                            <p>Доработка функции мобильного приложения </p>
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
                        <img className="Thing-pointer" width="20" src={TopIcon} alt=""/>
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
                            <p>Разработка модуля приложения - торговой системы </p>
                        </div>
                        <img className="Thing-pointer" width="20" src={TopIcon} alt=""/>
                        <div className="Thing-content">
                            <h3>Midterm exam №2</h3>
                            <p>Разработка модуля приложения - торговой системы </p>
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
                        <img className="Thing-pointer" width="20" src={TopIcon} alt=""/>
                        <div className="Thing-content">
                            <h3>Final exam</h3>
                            <p>Разработка модуля приложения - торговой системы </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StepProcess;
