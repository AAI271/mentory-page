import React from 'react';
import AboutLesson from "../../components/about-lesson";
import LessonInfo from "../../components/lesson-info";
import LessonFor from "../../components/lesson-for";
import LessonPlan from "../../components/lesson-plan";
import LessonTeacher from "../../components/lesson-teacher";
import data_analysis from "../../assets/teachers/Elina.jpg"
import javascript from "../../assets/teachers/Arman.jpg"
import Csharp from "../../assets/teachers/Olzhas.jpg"
import QA from "../../assets/teachers/Arystan.jpg"
import ManImg from "../../assets/Businessman in glasses thinking about statistics.png"
import WomanImg from "../../assets/young woman working at the table.png"
import WomenImg from "../../assets/young women sitting with laptop on the table.png"
import {useTranslation} from "react-i18next";

const Lesson = () => {
    const {t} = useTranslation()


    const backInfo = [
        {
            lesson_about: {
                text: t("dataAnalystDeveloperLessonTitle"),
                stackList: ["Excel", "Power BI", "SQL"]
            },
            lesson_info: {
                text: [t("dataAnalystInfo1"), t("dataAnalystInfo2"),]
            },
            lesson_for: {
                list_info: [
                    {
                        title: t("dataAnalystFor1Title"),
                        text: t("dataAnalystFor1Text")
                    },
                    {
                        title: t("dataAnalystFor2Title"),
                        text: t("dataAnalystFor2Text")
                    },
                    {
                        title: t("dataAnalystFor3Title"),
                        text: t("dataAnalystFor3Text")
                    },
                ],
            },
            lesson_teacher: {
                image:data_analysis,
                name: t("dataAnalystTeacherName"),
                description: t("dataAnalystTeacherDescription"),
                experience: t("dataAnalystTeacherExperience"),
                graduated:t("dataAnalystTeacherGraduated"),
                skills:['Pandas', 'NumPy', 'Scikit Learn', 'TensorFlow' ,'PostgreSQL'],
                linkedIN:"https://www.linkedin.com/in/elina-amurlayeva-26726224b/"
            },
            lesson_plan:{
                name:"Data Analysis",
                plan_list:[
                    {
                        title: t("dataAnalystPlan1Title"),
                        text: [
                            t("dataAnalystPlan1Text1"),
                            t("dataAnalystPlan1Text2"),
                            t("dataAnalystPlan1Text3"),
                            t("dataAnalystPlan1Text4"),
                        ]
                    },
                    {
                        title: t("dataAnalystPlan2Title"),
                        text: [
                            t("dataAnalystPlan2Text1"),
                            t("dataAnalystPlan2Text2"),
                            t("dataAnalystPlan2Text3"),
                            t("dataAnalystPlan2Text4"),
                        ]
                    },
                    {
                        title: t("dataAnalystPlan3Title"),
                        text: [
                            t("dataAnalystPlan3Text1"),
                            t("dataAnalystPlan3Text2"),
                            t("dataAnalystPlan3Text3"),
                            t("dataAnalystPlan3Text4"),
                            t("dataAnalystPlan3Text5"),
                            t("dataAnalystPlan3Text6"),
                            t("dataAnalystPlan3Text7"),
                            t("dataAnalystPlan3Text8"),
                            t("dataAnalystPlan3Text9"),
                            t("dataAnalystPlan3Text10"),
                        ]
                    },
                    {
                        title: t("dataAnalystPlan4Title"),
                        text: [
                            t("dataAnalystPlan4Text1"),
                            t("dataAnalystPlan4Text2"),
                            t("dataAnalystPlan4Text3"),
                            t("dataAnalystPlan4Text4"),
                            t("dataAnalystPlan4Text5"),
                            t("dataAnalystPlan4Text6"),
                            t("dataAnalystPlan4Text7"),
                            t("dataAnalystPlan4Text8"),
                            t("dataAnalystPlan4Text9"),
                            t("dataAnalystPlan4Text10"),
                        ]
                    },
                    {
                        title: t("dataAnalystPlan5Title"),
                        text: [
                            t("dataAnalystPlan5Text1"),
                            t("dataAnalystPlan5Text2"),
                            t("dataAnalystPlan5Text3"),
                            t("dataAnalystPlan5Text4"),
                            t("dataAnalystPlan5Text5"),
                            t("dataAnalystPlan5Text6"),
                            t("dataAnalystPlan5Text7"),
                            t("dataAnalystPlan5Text8"),
                            t("dataAnalystPlan5Text9"),
                        ]
                    },
                    {
                        title: t("dataAnalystPlan6Title"),
                        text: [
                            t("dataAnalystPlan6Text1"),
                            t("dataAnalystPlan6Text2"),
                            t("dataAnalystPlan6Text3"),
                            t("dataAnalystPlan6Text4"),
                            t("dataAnalystPlan6Text5"),
                            t("dataAnalystPlan6Text6"),
                            t("dataAnalystPlan6Text7"),
                            t("dataAnalystPlan6Text8"),
                            t("dataAnalystPlan6Text9"),
                        ]
                    },
                    {
                        title: t("dataAnalystPlan7Title"),
                        text: [
                            t("dataAnalystPlan7Text1"),
                            t("dataAnalystPlan7Text2"),
                            t("dataAnalystPlan7Text3"),
                            t("dataAnalystPlan7Text4"),
                            t("dataAnalystPlan7Text5"),
                            t("dataAnalystPlan7Text6"),
                            t("dataAnalystPlan7Text7"),
                            t("dataAnalystPlan7Text8"),
                            t("dataAnalystPlan7Text9"),
                        ]
                    },
                    {
                        title:'SQL Basics',
                        text:[
                            'PostgreSQL Update',
                            'PostgreSQL Delete',
                            'PostgreSQL Limit',
                            'PostgreSQL Foreign Keys',
                            'PostgreSQL Inner Join',
                            'PostgreSQL Join Where',
                            'PostgreSQL Delete Table',
                            'PostgreSQL Import and Export Tables',
                            'PostgreSQL Backup and Restore Database'
                        ]
                    },
                ]
            },
        },
        {
            lesson_about: {
                text: t("frontDeveloperLessonTitle"),
                stackList: ["HTML", "CSS", "JavaScript", "Flexbox", "Grid", "React", "Redux"]
            },
            lesson_info: {
                text: [t("frontInfo1")],
            },
            lesson_for: {
                list_info: [
                    {
                        title: t("frontFor1Title"),
                        text: t("frontFor1Text")
                    },
                    {
                        title: t("frontFor2Title"),
                        text: t("frontFor2Text")
                    },
                    {
                        title: t("frontFor3Title"),
                        text: t("frontFor3Text")
                    }
                ],
            },
            lesson_teacher: {
                image:javascript,
                name: t("frontTeacherName"),
                description: t("frontTeacherDescription"),
                experience: t("frontTeacherExperience"),
                graduated:"",
                skills:['CSS','JavaScript','React','Redux','HTML5','Typescript','Next.js','Docker','Linux','CI/CD'],
                linkedIN:"https://www.linkedin.com/in/askarjkee/"
            },
            lesson_plan:{
                name:"Frontend",
                plan_list: [
                    {
                        title: t("frontendPlan1Title"),
                        text: [
                            t("frontendPlan1Text1"),
                            t("frontendPlan1Text2"),
                            t("frontendPlan1Text3"),
                            t("frontendPlan1Text4"),
                        ]
                    },
                    {
                        title: t("frontendPlan2Title"),
                        text: [
                            t("frontendPlan2Text1"),
                            t("frontendPlan2Text2"),
                            t("frontendPlan2Text3"),
                            t("frontendPlan2Text4"),
                        ]
                    },
                    {
                        title: t("frontendPlan3Title"),
                        text: [
                            t("frontendPlan3Text1"),
                            t("frontendPlan3Text2"),
                            t("frontendPlan3Text3"),
                            t("frontendPlan3Text4"),
                        ]
                    },
                    {
                        title: t("frontendPlan4Title"),
                        text: [
                            t("frontendPlan4Text1"),
                            t("frontendPlan4Text2"),
                            t("frontendPlan4Text3"),
                            t("frontendPlan4Text4"),
                        ]
                    },
                    {
                        title: t("frontendPlan5Title"),
                        text: [
                            t("frontendPlan5Text1"),
                            t("frontendPlan5Text2"),
                            t("frontendPlan5Text3"),
                            t("frontendPlan5Text4"),
                        ]
                    },
                    {
                        title: t("frontendPlan6Title"),
                        text: [
                            t("frontendPlan6Text1"),
                            t("frontendPlan6Text2"),
                            t("frontendPlan6Text3"),
                            t("frontendPlan6Text4"),
                        ]
                    },
                ]

            },
        },
        {
            lesson_about: {
                text: t("c#DeveloperLessonTitle"),
                stackList: ["C#", ".NET"]
            },
            lesson_info: {
                text:[ t("c#Info1"),t("c#Info2")]
            },
            lesson_for: {
                list_info: [
                    {
                        title: t("c#For1Title"),
                        text: t("c#For1Text")
                    },
                    {
                        title: t("c#For2Title"),
                        text: t("c#For2Text")
                    },
                    {
                        title: t("c#For3Title"),
                        text: t("c#For3Text")
                    },
                ],
            },
            lesson_teacher: {
                image:Csharp,
                name: t("c#TeacherName"),
                description: t("c#TeacherDescription"),
                experience: t("c#TeacherExperience"),
                graduated:"",
                skills: ['C#','JavaScript','TypeScript','HTML','CSS','MS SQL','MS Visual Studio','.NET Framework','MS Dynamics CRM','React','ASP .Net MVC'],
                linkedIN:"https://www.linkedin.com/in/zait-olzhas/"
            },
            lesson_plan:{
                name:"C#",
                plan_list:[
                    {
                        title: t("c#Plan1Title"),
                        text: [
                            t("c#Plan1Text1"),
                            t("c#Plan1Text2"),
                            t("c#Plan1Text3"),
                            t("c#Plan1Text4"),
                            t("c#Plan1Text5"),
                            t("c#Plan1Text6"),
                            t("c#Plan1Text7")
                        ]
                    },
                    {
                        title: t("c#Plan2Title"),
                        text: [
                            t("c#Plan2Text1"),
                            t("c#Plan2Text2"),
                            t("c#Plan2Text3"),
                            t("c#Plan2Text4"),
                            t("c#Plan2Text5"),
                            t("c#Plan2Text6"),
                            t("c#Plan2Text7")
                        ]
                    },
                    {
                        title: t("c#Plan3Title"),
                        text: [
                            t("c#Plan3Text1"),
                            t("c#Plan3Text2"),
                            t("c#Plan3Text3"),
                            t("c#Plan3Text4"),
                            t("c#Plan3Text5"),
                            t("c#Plan3Text6"),
                            t("c#Plan3Text7")
                        ]
                    },
                    {
                        title: t("c#Plan4Title"),
                        text: [
                            t("c#Plan4Text1"),
                            t("c#Plan4Text2"),
                            t("c#Plan4Text3"),
                            t("c#Plan4Text4"),
                            t("c#Plan4Text5"),
                            t("c#Plan4Text6"),
                            t("c#Plan4Text7")
                        ]
                    }
                ]
            },
        },
        {
            lesson_about: {
                text: t("qaDeveloperLessonTitle"),
                stackList: ["QA Testing", "Bug tracking", "Version control"]
            },
            lesson_info: {
                text: [t("qaInfo1")],
            },
            lesson_for: {
                list_info: [
                    {
                        title: t("qaFor1Title"),
                        text: t("qaFor1Text")
                    },
                    {
                        title: t("qaFor2Title"),
                        text: t("qaFor2Text")
                    },
                    {
                        title: t("qaFor3Title"),
                        text: t("qaFor3Text")
                    },
                ],
            },
            lesson_teacher: {
                image:QA,
                name: t("qaTeacherName"),
                description: t("qaTeacherDescription"),
                experience: t("qaTeacherExperience"),
                graduated:"",
                skills:['Gitlab','GitHub','QA Testing','Python','Robotics','QA Assessment'],
                linkedIN:""
            },
            lesson_plan:{
                name:"QA Engineering",
                plan_list: [
                    {
                        title: t("qaPlan1Title"),
                        text: [
                            t("qaPlan1Text1"),
                            t("qaPlan1Text2"),
                            t("qaPlan1Text3")
                        ]
                    },
                    {
                        title: t("qaPlan2Title"),
                        text: [
                            t("qaPlan2Text1"),
                            t("qaPlan2Text2"),
                            t("qaPlan2Text3")
                        ]
                    },
                    {
                        title: t("qaPlan3Title"),
                        text: [
                            t("qaPlan3Text1"),
                            t("qaPlan3Text2"),
                            t("qaPlan3Text3")
                        ]
                    },
                    {
                        title: t("qaPlan4Title"),
                        text: [
                            t("qaPlan4Text1"),
                            t("qaPlan4Text2"),
                            t("qaPlan4Text3")
                        ]
                    },
                    {
                        title: t("qaPlan5Title"),
                        text: [
                            t("qaPlan5Text1"),
                            t("qaPlan5Text2"),
                            t("qaPlan5Text3")
                        ]
                    },
                    {
                        title: t("qaPlan6Title"),
                        text: [
                            t("qaPlan6Text1"),
                            t("qaPlan6Text2"),
                            t("qaPlan6Text3")
                        ]
                    },
                    {
                        title: t("qaPlan7Title"),
                        text: [
                            t("qaPlan7Text1"),
                            t("qaPlan7Text2"),
                            t("qaPlan7Text3")
                        ]
                    },
                    {
                        title: t("qaPlan8Title"),
                        text: [
                            t("qaPlan8Text1"),
                            t("qaPlan8Text2"),
                            t("qaPlan8Text3")
                        ]
                    },
                    {
                        title: t("qaPlan9Title"),
                        text: [
                            t("qaPlan9Text1"),
                            t("qaPlan9Text2"),
                            t("qaPlan9Text3")
                        ]
                    }
                ]
            }
        },
    ];
    const list = ["Data_Analysis","Frontend","C_Sharp","QA_Engineering"]
    const path =window.location.pathname.split('/')
    const lessonIndex = list.indexOf(path[path.length-1])
    const lessonInfo = backInfo[lessonIndex]
    return (
        <main className="marginX">
            <section>
                <AboutLesson aboutLesson={lessonInfo.lesson_about}/>
            </section>
            <section>
                <LessonTeacher lessonTeacher={lessonInfo.lesson_teacher}/>
            </section>
            <section>
                <LessonInfo lessonInfo={lessonInfo.lesson_info}/>
            </section>
            <section>
                <LessonFor lessonFor={lessonInfo.lesson_for} img={[ManImg,WomanImg,WomenImg]}/>
            </section>
            <section>
                <LessonPlan lessonPlan={lessonInfo.lesson_plan}/>
            </section>
        </main>
    );
};

export default Lesson;
