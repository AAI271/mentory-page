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

const LessonMore = () => {

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
                            t("dataAnalystPlan5Text10"),
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
                    {
                        title:'SQL Basics',
                        text:[
                            'Views',
                            'Window functions',
                            'Grouping sets',
                            'Rollups'
                        ]
                    },
                    {
                        title:'SQL Basics',
                        text:[
                            t("dataAnalystPlan10Text1"),
                            t("dataAnalystPlan10Text2"),
                            t("dataAnalystPlan10Text3"),
                            t("dataAnalystPlan10Text4"),
                        ]
                    },
                    {
                        title:'Python for Data Analysis',
                        text:[
                            t("dataAnalystPlan11Text1"),
                            t("dataAnalystPlan11Text2"),
                            t("dataAnalystPlan11Text3"),
                            t("dataAnalystPlan11Text4"),
                            t("dataAnalystPlan11Text5"),
                            t("dataAnalystPlan11Text6"),
                            t("dataAnalystPlan11Text7"),
                            t("dataAnalystPlan11Text8"),
                            t("dataAnalystPlan11Text9"),
                        ]
                    },
                    {
                        title:'Python for Data Analysis',
                        text:[
                            t("dataAnalystPlan12Text1"),
                            t("dataAnalystPlan12Text2"),
                            t("dataAnalystPlan12Text3"),
                        ]
                    },
                    {
                        title:'Python for Data Analysis',
                        text:[
                            t("dataAnalystPlan13Text1"),
                            t("dataAnalystPlan13Text2"),
                        ]
                    },
                    {
                        title:'Python for Data Analysis',
                        text:[
                            t("dataAnalystPlan14Text1"),
                            t("dataAnalystPlan14Text2"),
                        ]
                    },
                    {
                        title:'Python for Data Analysis',
                        text:[
                            'Machine Learning с SciKit Learn: Linear Regression',
                            'K Nearest Neighbors',
                            'K Means Clustering',
                            'Decision Trees',
                            'Random Forests',
                        ]
                    },
                    {
                        title:'Python for Data Analysis',
                        text:[
                            'Machine Learning с SciKit Learn: Natural Language Processing',
                            'Neural Nets and Deep Learning',
                            'Support Vector Machines',
                        ]
                    },
                ]
            },
        },
    ];
    const list = ["Data_Analysis","Frontend","C_Sharp","QA_Engineering"]
    const path =window.location.hash.split('/')
    const lessonIndex = list.indexOf(path[path.length-2])
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

export default LessonMore;




