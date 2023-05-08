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

const Lesson = () => {

    window.scrollTo({top:0})

    const backInfo = [
        {
            lesson_about: {
                text: "Data Analysis (Excel, Power BI, SQL Basics)",
                stackList: ["Excel", "Power BI", "SQL"]
            },
            lesson_info: {
                text: ["Этот онлайн курс продлится 2 месяца и рассчитан на всех, кто хочет освоить навыки анализа данных, используя Excel, Power BI и SQL. В рамках этого курса участники получат знания и практические навыки по работе с функциями в Excel, такими как Lookup/Reference функции, статистические функции, форматирование на основе формул, функции дат и времени, а также работу с текстовыми функциями и веб-скрапингом. Кроме того, участники будут изучать основы Power BI, такие как введение в редактор запросов, типы соединителей данных, инструменты для работы с текстом, числами и датами, а также создание иерархий и категорий, создание интерактивных отчетов и язык DAX.",
                    " В курсе также представлены основы работы с SQL, а именно, создание таблиц, управление данными. По окончании курса участники будут готовы к созданию отчетов и анализу данных в Excel и Power BI, а также к работе с базами данных, используя SQL. Курс подходит для всех, кто хочет начать свою карьеру в сфере анализа данных.",]
            },
            lesson_for: {
                list_info: [
                    {
                        title: "Вы чувствуете перспективность IT-сферы, но не знаете, с чего начать?",
                        text: "Курс подходит для вас, если вы хотите начать карьеру в сфере анализа данных."
                    },
                    {
                        title: "Вы работаете в смежной области и хотите расширить свой набор навыков?",
                        text: "Курс поможет вам освоить навыки анализа данных, используя Excel, Power BI и SQL."
                    },
                    {
                        title: "У вас есть техническое образование, но вы не знакомы с Excel, Power BI и SQL?",
                        text: "Курс позволит вам освоить основы работы с этими инструментами и начать работу в сфере анализа данных."
                    },
                ],
            },
            lesson_teacher: {
                image:data_analysis,
                name: "Элина Амурлаева",
                description:"Опытный аналитик данных",
                experience: "RPA Developer в международной компании EY",
                graduated:"Astana IT University",
                skills:['Pandas', 'NumPy', 'Scikit Learn', 'TensorFlow' ,'PostgreSQL'],
                linkedIN:"https://www.linkedin.com/in/elina-amurlayeva-26726224b/"
            },
            lesson_plan:{
                name:"Data Analysis",
                plan_list:[
                    {
                        title:'Продвинутый Excel',
                        text:[
                            'Lookup/Reference функции',
                            'Статистические функции',
                            'Фориматтинг на основе формул',
                            'Функции дат и времени'
                        ]
                    },
                    {
                        title:'Продвинутый Excel',
                        text:[
                            'Логические операторы',
                            'Формулы динамических массивов',
                            'Текстовые функции',
                            'Веб-скрапинг с WEBSERVICE & FILTERXML'
                        ]
                    },
                    {
                        title:'Power BI: Подключение и преобразовывание сырых данных',
                        text:[
                            'Введение в редактор запросов Power BI',
                            'Типы соединителей данных Power BI',
                            'Основные преобразования таблиц',
                            'Инструменты для работы с текстом, числами и датами',
                            'Индексные и условные столбцы',
                            'Группировка и агрегирование данных',
                            'Пивоты',
                            'Изменение, объединение и добавление запросов',
                            'Подключение к папкам',
                            'Определение иерархий и категорий',
                        ]
                    },
                    {
                        title:'Power BI:  Создание реляционных моделей данных',
                        text:[
                            'Введение в нормализацию базы данных',
                            'Создание связей между таблицами Power BI',
                            'Схемы «Stra» и «Snowflake»',
                            'Активные и неактивные связи',
                            'Фильтрация и перекрестная фильтрация',
                            'Скрытие полей в представлении отчета Power BI',
                            'Рекомендации по моделированию данных и Power BI'
                        ]
                    },
                    {
                        title:'Power BI: DAX',
                        text:[
                            'Введение в выражения анализа данных (DAX)',
                            'Вычисляемые столбцы и меры',
                            'Синтаксис и операторы DAX',
                            'Общие функции Power BI',
                            'Основные формулы даты и времени',
                            'Логические и условные операторы',
                            'Текстовые, математические и статистические функции',
                            'Объединение данных с RELATED',
                            'Функции CALCULATE, ALL & FILTER',
                            'Итераторы DAX (SUMX, AVERAGEX)',
                        ]
                    },
                    {
                        title:'Power BI: Разработка интерактивных отчетов Power BI',
                        text:[
                            'Введение в представление отчетов Power BI',
                            'Добавление базовых диаграмм в отчеты Power BI',
                            'Параметры форматирования и фильтрации',
                            'Матрицы',
                            'Слайсеры и таймлайны',
                            'Карточки и KPI',
                            'Добавление фильтров Drillthrough',
                            'Использование закладок',
                            'Публикация в облако Power BI'
                        ]
                    },
                    {
                        title:'SQL Basics',
                        text:[
                            'Установка pgAdmin и PostgreSQL',
                            'Создание таблицы',
                            'Добавиление данных в таблицу',
                            'Операторы Select PostgreSQL',
                            'Оператор «Where» в PostgreSQL',
                            'Wildcards PostgreSQL',
                            'PostgreSQL AND, OR, NOT',
                            'PostgreSQL ORDER BY',
                            'PostgreSQL INSERT INTO',
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
                text: "Frontend разработка на JavaScript - Базовый курс для новичков",
                stackList: ["HTML", "CSS", "JavaScript", "Flexbox", "Grid", "React", "Redux"]
            },
            lesson_info: {
                text: ["Этот 8-недельный онлайн курс предназначен для тех, кто хочет изучить основы веб-разработки, включая HTML, CSS и JavaScript, а также продвинутые технологии, такие как Flexbox, Grid, React и Redux. В рамках курса участники изучат основы создания веб-страниц, адаптивных макетов, управления состоянием приложения и создания SPA (Single Page Application). Курс идеально подходит для новичков, которые хотят начать карьеру в веб-разработке."],
            },
            lesson_for: {
                list_info: [
                    {
                        title: "Вы только начинаете свой путь в веб-разработке?",
                        text: "Курс идеально подходит для новичков, которые хотят начать карьеру в веб-разработке."
                    },
                    {
                        title: "Хотите изучить основы веб-разработки, включая HTML, CSS и JavaScript?",
                        text: "Этот курс поможет вам изучить основы веб-разработки и более продвинутые технологии, такие как Flexbox, Grid, React и Redux."
                    },
                    {
                        title: "Вы хотите создавать адаптивные макеты и SPA (Single Page Application)?",
                        text: "После прохождения курса, вы будете готовы создавать адаптивные макеты и SPA (Single Page Application)."
                    }
                ],
            },
            lesson_teacher: {
                image:javascript,
                name: "Арман Аскар",
                description: "Опытный Frontend разработчик",
                experience: "Frontend Teamlead в RBK Bank",
                graduated:"",
                skills:['CSS','JavaScript','React','Redux','HTML5','Typescript','Next.js','Docker','Linux','CI/CD'],
                linkedIN:"https://www.linkedin.com/in/askarjkee/"
            },
            lesson_plan:{
                name:"Frontend",
                plan_list:[
                    {
                        title:'Введение в HTML и CSS',
                        text:[
                            'Введение в веб-разработку и фронтенд',
                            'Основы HTML: теги, атрибуты и структура документа',
                            'Основы CSS: селекторы, свойства и стилизация элементов',
                            'Создание простой веб-страницы с использованием HTML и CSS'
                        ]
                    },
                    {
                        title:'Продвинутые возможности CSS',
                        text:[
                            'Работа с позиционированием элементов',
                            'Использование flexbox и grid для создания адаптивных макетов',
                            'Работа с анимациями и переходами',
                            'Создание респонсивных веб-страниц с использованием медиа-запросов'
                        ]
                    },
                    {
                        title:'JavaScript: Основы',
                        text:[
                            'Введение в язык программирования JavaScript',
                            'Синтаксис и типы данных',
                            'Переменные, условные операторы, циклы',
                            'Функции и объекты'
                        ]
                    },
                    {
                        title:'Продвинутые возможности JavaScript',
                        text:[
                            'Работа с событиями и обработчиками событий',
                            'Работа с DOM и изменение элементов на странице',
                            'Работа с AJAX и получение данных с сервера',
                            'Работа с библиотеками и фреймворками JavaScript, такими как jQuery'
                        ]
                    },
                    {
                        title:'React: Основы (По возможности)',
                        text:[
                            'Введение в React и его философию',
                            'Создание компонентов и их использование',
                            'Использование JSX и работа с props',
                            'Работа со стейтом и обработка событий'
                        ]
                    },
                    {
                        title:'Продвинутые возможности React',
                        text:[
                            'Работа с жизненным циклом компонентов',
                            'Работа с формами и валидация ввода',
                            'Работа с роутингом и создание SPA',
                            'Использование Redux и управление состоянием приложения'
                        ]
                    },
                ]
            },
        },
        {
            lesson_about: {
                text: "C# разработчик. Интенсивный курс для начинающих, с использованием .NET",
                stackList: ["C#", ".NET"]
            },
            lesson_info: {
                text:[ "Этот 8-недельный онлайн курс поможет участникам освоить основы программирования на языке C# и популярных технологий .NET. Участники изучат основные концепции программирования, объектно-ориентированное программирование (OOP), консольное и графическое приложения, а также базовые структуры данных.",
                    " По окончании курса участники будут готовы создавать простые программы на C# и продолжать свое обучение в сфере программирования. Курс подходит для всех, кто хочет начать свою карьеру в сфере разработки на C#."]
            },
            lesson_for: {
                list_info: [
                    {
                        title: "Вы хотите начать карьеру в сфере разработки на C#?",
                        text: "Курс подходит для вас, если вы хотите начать свою карьеру в сфере разработки на C#."
                    },
                    {
                        title: "Вы уже имеете небольшой опыт программирования, но не работали с C#?",
                        text: "Курс поможет вам освоить основы программирования на языке C# и популярных технологий .NET."
                    },
                    {
                        title: "Вы хотите обновить свои знания и изучить новый язык программирования?",
                        text: "Курс поможет вам изучить основы программирования на языке C# и популярных технологий .NET."
                    },
                ],
            },
            lesson_teacher: {
                image:Csharp,
                name: "Заит Олжас",
                description: "Senior C# developer",
                experience: "Software developer в Akvelon, Inc.",
                graduated:"",
                skills: ['C#','JavaScript','TypeScript','HTML','CSS','MS SQL','MS Visual Studio','.NET Framework','MS Dynamics CRM','React','ASP .Net MVC'],
                linkedIN:"https://www.linkedin.com/in/zait-olzhas/"
            },
            lesson_plan:{
                name:"C#",
                plan_list:[
                    {
                        title:'Introduction to Programming Concepts and UML',
                        text:[
                            'Introduction to programming and its applications',
                            'Overview of programming languages',
                            'Basic programming concepts: data types, variables, operators, and expressions',
                            'Basic control structures: if-else, loops, and functions',
                            'Introduction to UML (Unified Modeling Language)',
                            'UML diagrams: use case, class, sequence, and activity diagrams',
                            'Creating block schemes'
                        ]
                    },
                    {
                        title:'Object-Oriented Programming with C#',
                        text:[
                            'Introduction to object-oriented programming (OOP)',
                            'Data types, Enums',
                            'Classes, objects, and methods in C#',
                            'Inheritance, encapsulation and polymorphism in C#',
                            'Exception handling in C#',
                            'Basic data structures: arrays and lists in C#'
                        ]
                    },
                    {
                        title:'Console Application Development with C# and .NET',
                        text:[
                            'Introduction to console application development with C# and .NET',
                            'Command line arguments',
                            'File input and output',
                            'Working with strings and text files',
                            'Basic debugging techniques'
                        ]
                    },
                    {
                        title:'Desktop Application Development with C# and .NET',
                        text:[
                            'Introduction to desktop application development with C# and .NET',
                            'Windows Forms basics',
                            'Event-driven programming',
                            'Creating user interfaces and controls in a console app',
                            'Basic debugging techniques'
                        ]
                    },
                ]
            },
        },
        {
            lesson_about: {
                text: "QA Engineering - Базовый курс для новичков",
                stackList: ["QA Testing", "Bug tracking", "Version control"]
            },
            lesson_info: {
                text: ["Это 8-недельный онлайн курс, который поможет участникам освоить основы тестирования приложений и других платформ. В ходе курса участники научатся планировать и проводить тестирование программного обеспечения в различных средах, анализировать результаты тестирования и представлять отчеты о проделанной работе, разрабатывать и использовать автоматизированные тесты для повышения эффективности тестирования, использовать инструменты управления баг-трекингом и контроля версий, а также работать в команде разработчиков и QA-специалистов, обеспечивая высокое качество продукта."],
            },
            lesson_for: {
                list_info: [
                    {
                        title: "Вы только начинаете свой путь в IT-сфере?",
                        text: "Курс будет полезен начинающим специалистам, которые хотят получить свою первую работу в сфере IT."
                    },
                    {
                        title: "Вы хотите получить навыки тестирования приложений и других платформ?",
                        text: "Курс поможет участникам освоить основы тестирования приложений и других платформ."
                    },
                    {
                        title: "Вы хотите узнать о инструментах управления баг-трекингом и контроля версий?",
                        text: "Курс покажет участникам, как использовать инструменты управления баг-трекингом и контроля версий."
                    },
                ],
            },
            lesson_teacher: {
                image:QA,
                name: "Арыстан Сабир",
                description: "Мотивированный и опытный специалист",
                experience: "QA Tester at Typi LLC",
                graduated:"",
                skills:['Gitlab','GitHub','QA Testing','Python','Robotics','QA Assessment'],
                linkedIN:""
            },
            lesson_plan:{
                name:"QA Engineering",
                plan_list:[
                    {
                        title:'Introduction to Quality Assurance',
                        text:[
                            'What is QA and its importance in software development?',
                            'The role of QA in the software development lifecycle',
                            'Overview of testing types (unit, integration, system, acceptance)'
                        ]
                    },
                    {
                        title:'Software Testing Fundamentals',
                        text:[
                            'Principles of software testing',
                            'Black box testing and white box testing',
                            'Functional and non-functional testing'
                        ]
                    },
                    {
                        title:'Test Planning and Test Case Design',
                        text:[
                            'Developing test plans and strategies',
                            'Test case design techniques',
                            'Creating effective test cases'
                        ]
                    },
                    {
                        title:'Test Execution and Reporting',
                        text:[
                            'Test execution and defect reporting',
                            'Defect management and tracking',
                            'Test coverage and metrics'
                        ]
                    },
                    {
                        title:'Automation Testing Fundamentals',
                        text:[
                            'Introduction to automation testing',
                            'Automation testing frameworks',
                            'Selecting and evaluating automation tools'
                        ]
                    },
                    {
                        title:'Test Automation with Selenium',
                        text:[
                            'Introduction to Selenium',
                            'Setting up the Selenium environment',
                            'Building and executing automated tests with Selenium WebDriver'
                        ]
                    },
                    {
                        title:'API Testing',
                        text:[
                            'Overview of API testing',
                            'API testing tools',
                            'Test automation with Postman'
                        ]
                    },
                    {
                        title:'Performance Testing',
                        text:[
                            'Introduction to performance testing',
                            'Performance testing tools',
                            'Load testing with JMeter'
                        ]
                    },
                    {
                        title:'Test Management and Quality Assurance',
                        text:[
                            'Test management and reporting tools',
                            'Quality assurance and quality control',
                            'Continuous integration and delivery in software testing'
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
