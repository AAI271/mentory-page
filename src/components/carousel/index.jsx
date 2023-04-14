import React, { useState } from 'react';
import "./index.css"
import {Link} from "react-router-dom";
import LeftIcon from "../../assets/lefticon.png"
import RightIcon from "../../assets/righticon.png"


function Carousel() {
    const steps = [
        {
            vacancy:{
                title: 'IOS разработчик (middle)',
                subtitle:'KazApple Ltd. ',
                description: 'Ищем разработчика для создания и публикации IOS приложений, таких как Browser, Messenger, Cleaner, VPN, AdBlock.',
                info:['Свободный график','800000 - 1100000 тг. в месяц'],
                stackList:['Swift','ООП','Objective-C','MVC','MVC']
            },
            lesson: {
                name:"Flutter",
                title: 'Курс по разработке IOS-приложений',
                description: 'Cоздайте свою собственную уникальную мобильную программу, которая удивит и порадует пользователей iPhone и iPad!',
                stackList:['Swift','SwiftUI','Objective-C','MVC','6 месяцев','Для продвинутых'],
            }
        },
        {
            vacancy:{
                title: 'IOS разработчик (middle)',
                subtitle:'KazApple Ltd. ',
                description: 'Ищем разработчика для создания и публикации IOS приложений, таких как Browser, Messenger, Cleaner, VPN, AdBlock.',
                info:['Свободный график','800000 - 1100000 тг. в месяц'],
                stackList:['Swift','ООП','Objective-C','MVC','MVC']
            },
            lesson:{
                name:"PHP",
                title: 'Курс по разработке IOS-приложений',
                description: 'Cоздайте свою собственную уникальную мобильную программу, которая удивит и порадует пользователей iPhone и iPad!',
                stackList:['Swift','SwiftUI','Objective-C','MVC','6 месяцев','Для продвинутых'],
            }

        },
        {
            vacancy:{
                title: 'IOS разработчик (middle)',
                subtitle:'KazApple Ltd. ',
                description: 'Ищем разработчика для создания и публикации IOS приложений, таких как Browser, Messenger, Cleaner, VPN, AdBlock.',
                info:['Свободный график','800000 - 1100000 тг. в месяц'],
                stackList:['Swift','ООП','Objective-C','MVC','MVC']
            },
            lesson:{
                name:"Java",
                title: 'Курс по разработке IOS-приложений',
                description: 'Cоздайте свою собственную уникальную мобильную программу, которая удивит и порадует пользователей iPhone и iPad!',
                stackList:['Swift','SwiftUI','Objective-C','MVC','6 месяцев','Для продвинутых'],
            }

        },
        {
            vacancy:{
                title: 'IOS разработчик (middle)',
                subtitle:'KazApple Ltd. ',
                description: 'Ищем разработчика для создания и публикации IOS приложений, таких как Browser, Messenger, Cleaner, VPN, AdBlock.',
                info:['Свободный график','800000 - 1100000 тг. в месяц'],
                stackList:['Swift','ООП','Objective-C','MVC','MVC']
            },
            lesson:{
                name:"Frontend_Dev",
                title: 'Курс по разработке IOS-приложений',
                description: 'Cоздайте свою собственную уникальную мобильную программу, которая удивит и порадует пользователей iPhone и iPad!',
                stackList:['Swift','SwiftUI','Objective-C','MVC','6 месяцев','Для продвинутых'],
            }

        },
        {
            vacancy:{
                title: 'IOS разработчик (middle)',
                subtitle:'KazApple Ltd. ',
                description: 'Ищем разработчика для создания и публикации IOS приложений, таких как Browser, Messenger, Cleaner, VPN, AdBlock.',
                info:['Свободный график','800000 - 1100000 тг. в месяц'],
                stackList:['Swift','ООП','Objective-C','MVC','MVC']
            },
            lesson:{
                name:"Golang",
                title: 'Курс по разработке IOS-приложений',
                description: 'Cоздайте свою собственную уникальную мобильную программу, которая удивит и порадует пользователей iPhone и iPad!',
                stackList:['Swift','SwiftUI','Objective-C','MVC','6 месяцев','Для продвинутых'],
            }

        },

    ];

    const [activeStep, setActiveStep] = useState(0);

    const handleStepClick = (stepIndex) => {
        setActiveStep(stepIndex);
    };

    return (
        <div>
            <h3 className="carousel__title">Обучение для получение работы</h3>
            <div className="wrap">
                <div className="viewbox">
                    <div className="steps" style={{ left: -activeStep * 100 + '%' }}>
                        {steps.map((step, index) => (
                            <div key={index} className={`step ${activeStep === index ? 'active' : ''}`}>
                                <div className="box">
                                    <h3>
                                        Вакансия
                                    </h3>
                                    <div className="box__content">
                                        <div className="box__title">
                                            <h3>{step.vacancy.title}</h3>
                                            <h5>{step.vacancy.subtitle}</h5>
                                        </div>
                                        <div className="box_description">
                                            <p>{step.vacancy.description}</p>
                                        </div>
                                        <div className="box__info">
                                            <ul>
                                                {step.vacancy.info.map((infoItem,index)=>(
                                                    <li key={`infoItem${index}`}>{infoItem}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="box__stack-list">
                                            {step.vacancy.stackList.map((stack,index)=>(
                                                <div key={`stack ${index}`} className="box__stack">
                                                    {stack}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <h3>
                                        Обучение
                                    </h3>
                                    <div className="box__content">
                                        <div className="box__title">
                                            <h3>{step.lesson.title}</h3>
                                        </div>
                                        <div className="box_description">
                                            <p>{step.vacancy.description}</p>
                                        </div>
                                        <div className="box__stack-list">
                                            {step.lesson.stackList.map((stack,index)=>(
                                                <div key={`stack ${index}`} className="box__stack">
                                                    {stack}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="box__btn">
                                            <Link to={`${step.lesson.name}`}>
                                                <button className="my-btn" type="submit">Подробнее</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ul className="step-nav">
                        {steps.map((step, index) => (
                            <li key={index}
                                className={`step-item ${activeStep === index ? 'active' : ''}`}
                                onClick={() => handleStepClick(index)}
                            >
                                <a
                                    data-step={index}
                                >
                                    {step.lesson.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="arrow-icon">
                    {
                        activeStep!==0&&(
                            <img
                                onClick={() => {activeStep&&setActiveStep(activeStep-1)}}
                                className="arrow-icon-left"
                                src={LeftIcon} alt="icon"/>
                        )
                    }
                    {
                        activeStep<4&&(
                            <img
                                onClick={() => {activeStep<4&&setActiveStep(activeStep+1)}}
                                className="arrow-icon-right"
                                src={RightIcon}
                                alt="icon"/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}


export default Carousel;

