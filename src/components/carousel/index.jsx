import React, { useState } from 'react';
import "./index.css"
import {Link} from "react-router-dom";
import LeftIcon from "../../assets/leftArrow.svg"
import RightIcon from "../../assets/rightArrow.svg"
import {useTranslation} from "react-i18next";


function Carousel() {
    const { t } = useTranslation();

    const steps = [
        {
            vacancy:{
                title: t("dataAnalystDeveloperJobTitle"),
                subtitle:'Aventus Group',
                description: t("dataAnalystJobDescription"),
                info:[t("dataAnalystJobFullTime"),t("dataAnalystJobSalary")],
                stackList:['Power BI','SQL']
            },
            lesson:{
                name:'Data_Analysis',
                title: t("dataAnalystDeveloperLessonTitle"),
                duration_time:'2 месяца',
                subtitle:'KazApple Ltd. ',
                description: t("dataAnalystDeveloperLessonDescription"),
                stackList:['Excel','Power BI','SQL Basics'],
            }
        },
        {
            vacancy:{
                title: t("c#DeveloperJobTitle"),
                subtitle:'Aspose',
                description: t("c#DeveloperJobDescription"),
                info:[t("c#DeveloperJobFullTime"),t("c#DeveloperJobSalary")],
                stackList:['C#','Angular','JavaScript','HTML5','CSS3','OOP','English','ASP.NET','Core','SEO']
            },
            lesson:{
                name:"C#",
                title: t("c#DeveloperLessonTitle"),
                duration_time:'2 месяца',
                description: t("c#DeveloperLessonDescription"),
                stackList:['C#','.NET','OOP'],
            }

        },
        {
            vacancy:{
                title: t("frontDeveloperJobTitle"),
                subtitle:'ТОО ОТИС',
                description:t("frontDeveloperJobDescription"),
                info:[t("frontDeveloperJobFullTime"),t("frontDeveloperJobSalary")],
                stackList:['Laravel','Vue.js','Bootsrtap','MySQL','PostgreSQL','MS SQL']
            },
            lesson:{
                name:"Frontend",
                title: t("frontDeveloperLessonTitle"),
                description: t("frontDeveloperLessonDescription"),
                stackList:['HTML','CSS','Javascript','React','Redux'],
            }

        },
        {
            vacancy:{
                title: t("qaEngineerJobTitle"),
                subtitle:'ТОО BirdsBuild (БёрдсБилд)',
                description: t("qaEngineerJobDescription"),
                info:[t("qaEngineerJobFullTime"),t("qaEngineerJobSalary")],
                stackList:['Postman','Charles','Altair','Jira + confluence','Swager','Git']
            },
            lesson:{
                name:"QA_Engineering",
                title: t("qaDeveloperLessonTitle"),
                duration_time:'2 месяца',
                description: t("qaDeveloperLessonDescription"),
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
            <h3 className="carousel__title">{t("carouselTitle")}</h3>
            <div className="wrap">
                <div className="viewbox">
                    <div className="steps" style={{ left: -activeStep * 100 + '%' }}>
                        {steps.map((step, index) => (
                            <div key={index} className={`step`}>
                                <div className="box">
                                    <h3>
                                        {t("carouselVacancies")}
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
                                                    <li key={`infoItem${index}`}><p>{infoItem}</p></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="box__stack-list">
                                            {step.vacancy.stackList.map((stack,index)=>(
                                                <div key={`stack ${index}`} className="box__stack">
                                                    <p>{stack}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-lesson">
                                    <h3>
                                        {t("carouselTraining")}
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
                                                    <p>{stack}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="box__btn">
                                            <Link to={`${step.lesson.name==="C#"?"C_Sharp":step.lesson.name}`}>
                                                <button className="my-btn" onClick={()=>{window.scrollTo({top:0})}}>Подробнее</button>
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
                            <div
                                className="arrow-icon-left"
                                onClick={() => {activeStep&&setActiveStep(activeStep-1)}}
                            >
                                <img
                                    src={LeftIcon} alt="icon"/>
                            </div>
                        )
                    }
                    {
                        activeStep<3&&(
                            <div
                                className="arrow-icon-right"
                                onClick={() => {activeStep<4&&setActiveStep(activeStep+1)}}
                            >
                                <img
                                    src={RightIcon}
                                    alt="icon"/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}


export default Carousel;

