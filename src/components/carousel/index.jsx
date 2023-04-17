import React, { useState } from 'react';
import "./index.css"
import {Link} from "react-router-dom";
import LeftIcon from "../../assets/lefticon.png"
import RightIcon from "../../assets/righticon.png"


function Carousel() {
    const steps = [
        {
            vacancy:{
                title: 'Data analyst',
                subtitle:'Aventus Group',
                description: 'Сейчас мы в поиске Data analyst. Присоединяйтесь к Aventus Group и становитесь важной частью большого объединения профессионалов, создающих Fintech историю по всему миру!',
                info:['Полная занятость, полный день','от 400 000 до 650 000 KZT на руки'],
                stackList:['Power BI','SQL']
            },
            lesson:{
                name:'Data_Analysis',
                title: 'Data Analysis (Excel, Power BI, SQL Basics)',
                duration_time:'2 месяца',
                subtitle:'KazApple Ltd. ',
                description: 'По окончании курса участники будут готовы к созданию отчетов и анализу данных в Excel и Power BI, а также к работе с базами данных, используя SQL. Курс подходит для всех, кто хочет начать свою карьеру в сфере анализа данных.',
                stackList:['Excel','Power BI','SQL Basics'],
            }
        },
        {
            vacancy:{
                title: 'Web developer',
                subtitle:'Aspose',
                description: 'We\'re hiring a web developer for imaging applications.',
                info:['Полная занятость, удаленная работа','от 2 500 USD до вычета налогов'],
                stackList:['C#','Angular','JavaScript','HTML5','CSS3','OOP','English','ASP.NET','Core','SEO']
            },
            lesson:{
                name:"C#",
                title: 'C# - Интенсивный курс для начинающих, с использованием .NET',
                duration_time:'2 месяца',
                description: 'C# разработчик. Интенсивный курс для начинающих, с использованием .NET" - это 8-недельный онлайн курс, который поможет участникам освоить основы программирования на языке C# и популярных технологий .NET. ',
                stackList:['C#','.NET','OOP'],
            }

        },
        {
            vacancy:{
                title: 'Веб-разработчик',
                subtitle:'ТОО ОТИС',
                description: 'Ищем разработчика, который будет отвечать за создание и оптимизацию функционала на Laravel (версия 6 и выше), Vue.js (версия 2 и выше) ',
                info:['Полная занятость, полный день','от 300 000 до 400 000 KZT до вычета налогов'],
                stackList:['Laravel','Vue.js','Bootsrtap','MySQL','PostgreSQL','MS SQL']
            },
            lesson:{
                name:"Frontend",
                title: 'Frontend разработка на JavaScript - Базовый курс для новичков',
                description: 'Базовый курс для новичков" - 8-недельный онлайн курс, который поможет участникам изучить основы веб-разработки, включая HTML, CSS и JavaScript, а также продвинутые технологии, такие как Flexbox, Grid, React и Redux.',
                stackList:['HTML','CSS','Javascript','React','Redux'],
            }

        },
        {
            vacancy:{
                title: 'QA Engineer (middle)',
                subtitle:'ТОО BirdsBuild (БёрдсБилд)',
                description: 'Мы приглашаем в команду Middle Q/A Engineer для работы в международной компании BirdsBuild.',
                info:['Полная занятость, гибкий график','от 500 000 KZT до вычета налогов'],
                stackList:['Postman','Charles','Altair','Jira + confluence','Swager','Git']
            },
            lesson:{
                name:"QA_Engineering",
                title: 'QA Engineering-Базовый курс для новичков',
                duration_time:'2 месяца',
                description: 'QA tester. Интенсивный курс для начинающих, с использованием QA Engineering" - это 8-недельный онлайн курс, который поможет участникам освоить основы тестирования приложений и других платформ.',
                stackList:[],
            }
        }
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
                                            <p>{step.lesson.description}</p>
                                        </div>
                                        <div className="box__stack-list">
                                            {step.lesson.stackList.map((stack,index)=>(
                                                <div key={`stack ${index}`} className="box__stack">
                                                    {stack}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="box__btn">
                                            <Link to={`${step.lesson.name==="C#"?"C_Sharp":step.lesson.name}`}>
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
                        activeStep<3&&(
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

