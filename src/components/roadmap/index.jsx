import React from 'react';
import "./index.css"
import {useTranslation} from "react-i18next";

const Roadmap = () => {
    const { t } = useTranslation();
    return (
        <div className="roadmap">
            <h3>Roadmap</h3>
            <div className="roadmap__container">
                <div className="roadmap__step">
                    <div className="roadmap__circle-container">
                        <div className="roadmap__circle-half right default"/>
                        <div className="roadmap__circle-half left green"/>
                        <div className="roadmap__inner-circle">
                            {t("roadmapTitle1")}
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
                        <p>{t("roadmapDescription1")}</p>
                    </div>
                    <div className="roadmap__circle-container">
                        <div className="roadmap__circle-half left default"/>
                        <div className="roadmap__circle-half right green-blue"/>
                        <div className="roadmap__inner-circle">
                            <div className="roadmap__inner-circle-text">
                                <p>Midterm</p>
                                <h3>Exam 01</h3>
                            </div>
                            <div className="hidden-text">
                                <p>{t("roadmapDescription1")}</p>
                                <h3>+50$</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="roadmap__step right">
                    <div className="roadmap__circle-container">
                        <div className="roadmap__circle-half right default"/>
                        <div className="roadmap__circle-half blue left"/>
                        <div className="roadmap__inner-circle">
                            <div className="roadmap__inner-circle-text">
                                <p>Midterm</p>
                                <h3>Exam 02</h3>
                            </div>
                            <div className="hidden-text">
                                <p>{t("roadmapDescription2")}</p>
                                <h3>+150$</h3>
                            </div>
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
                        <p>{t("roadmapDescription2")}</p>
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
                        <p>{t("roadmapDescription3")}</p>
                    </div>
                    <div className="roadmap__circle-container">
                        <div className="roadmap__circle-half left default"/>
                        <div className="roadmap__circle-half right blue-violet"/>
                        <div className="roadmap__inner-circle">
                            <div className="roadmap__inner-circle-text">
                                <p>Final</p>
                                <h3>Exam</h3>
                            </div>
                            <div className="hidden-text">
                                <p>{t("roadmapDescription3")}</p>
                                <h3>+400$</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
