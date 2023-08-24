import React, { createContext, useState } from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { BiCheck, BiCheckDouble } from "react-icons/bi";
import { RiCodepenFill } from "react-icons/ri";

// const _experiment = [
//     {
//         tecnology: ["CSS", "HTML"],
//         links: [
//             {
//                 link: "https://codepen.io/isaiahsalah/pen/RweGqBa",
//                 icon: RiCodepenFill,
//             },
//             {
//                 link: "https://codepen.io/isaiahsalah/full/RweGqBa",
//                 icon: AiOutlineLink,
//             },
//         ]
//     },
//     {
//         tecnology: ["CSS", "HTML", "JS"],
//         links: [
//             {
//                 link: "https://codepen.io/isaiahsalah/pen/qBJqmGy",
//                 icon: RiCodepenFill,
//             },
//             {
//                 link: "https://codepen.io/isaiahsalah/full/qBJqmGy",
//                 icon: AiOutlineLink,
//             },
//         ]
//     },
//     {
//         tecnology: ["CSS", "HTML", "JS"],
//         links: [
//             {
//                 link: "https://codepen.io/isaiahsalah/pen/XWxNzGo",
//                 icon: RiCodepenFill,
//             },
//             {
//                 link: "https://codepen.io/isaiahsalah/full/XWxNzGo",
//                 icon: AiOutlineLink,
//             },
//         ]
//     },
//     {
//         tecnology: ["CSS", "HTML"],
//         links: [
//             {
//                 link: "https://codepen.io/isaiahsalah/pen/KKGNooX",
//                 icon: RiCodepenFill,
//             },
//             {
//                 link: "https://codepen.io/isaiahsalah/full/KKGNooX",
//                 icon: AiOutlineLink,
//             },
//         ]
//     },
//     {
//         tecnology: ["CSS", "HTML", "JS"],
//         links: [
//             {
//                 link: "https://codepen.io/isaiahsalah/pen/poxNMXm",
//                 icon: RiCodepenFill,
//             },
//             {
//                 link: "https://codepen.io/isaiahsalah/full/poxNMXm",
//                 icon: AiOutlineLink,
//             },
//         ]
//     },
//     {
//         tecnology: ["CSS", "HTML", "JS"],
//         links: [
//             {
//                 link: "https://codepen.io/isaiahsalah/pen/mdzRqYJ",
//                 icon: RiCodepenFill,
//             },
//             {
//                 link: "https://codepen.io/isaiahsalah/full/mdzRqYJ",
//                 icon: AiOutlineLink,
//             },
//         ]
//     },
//     {
//         tecnology: ["CSS", "HTML", "JS"],
//         links: [
//             {
//                 link: "https://codepen.io/isaiahsalah/pen/bGmgKoz",
//                 icon: RiCodepenFill,
//             },
//             {
//                 link: "https://codepen.io/isaiahsalah/full/bGmgKoz",
//                 icon: AiOutlineLink,
//             },
//         ]
//     },
//     {
//         tecnology: ["CSS", "HTML"],
//         links: [
//             {
//                 link: "https://codepen.io/isaiahsalah/pen/OJBWwEy",
//                 icon: RiCodepenFill,
//             },
//             {
//                 link: "https://codepen.io/isaiahsalah/full/OJBWwEy",
//                 icon: AiOutlineLink,
//             },
//         ]
//     },
//     {
//         tecnology: ["CSS", "HTML", "JS"],
//         links: [
//             {
//                 link: "https://codepen.io/isaiahsalah/pen/gOBgjqa",
//                 icon: RiCodepenFill,
//             },
//             {
//                 link: "https://codepen.io/isaiahsalah/full/gOBgjqa",
//                 icon: AiOutlineLink,
//             },
//         ]
//     }
// ]
// const _works = [
//     {
//         tecnology: ["OpenAI-API", "Whatsapp-API", "Python", "Flask", "MongoDB"],
//         image: "./assets/images/gpt.jpg",
//         state: 6,
//         links: [
//             {
//                 title: "Repository",
//                 link: "https://github.com/isaiahsalah/gpt-assistant",
//                 icon: AiFillGithub,
//             },
//             {
//                 title: "Whatsapp",
//                 link: "https://wa.link/2nq10x",
//                 icon: AiOutlineLink,
//             }
//         ]
//     },
//     {
//         tecnology: ["Angular", "Firebase"],
//         image: "./assets/images/chatroom.png",
//         state: 6,
//         links: [
//             {
//                 title: "Repository",
//                 link: "https://github.com/isaiahsalah/chat-room",
//                 icon: AiFillGithub,
//             },
//             {
//                 title: "Page",
//                 link: "https://chat-room-gules.vercel.app/",
//                 icon: AiOutlineLink,
//             }
//         ]
//     },
//     {
//         tecnology: ["React", "React-Native", "NodeJS", "PostgreSQL"],
//         image: "./assets/images/tutut.png",
//         state: 5,
//         links: [
//             {
//                 title: "Control",
//                 link: "https://github.com/isaiahsalah/tutut-control",
//                 icon: AiFillGithub,
//             },
//             {
//                 title: "Server",
//                 link: "https://github.com/isaiahsalah/tutut-server",
//                 icon: AiFillGithub,
//             },
//             {
//                 title: "Driver-Owner App",
//                 link: "https://github.com/isaiahsalah/tutut-driver-owner",
//                 icon: AiFillGithub,
//             },
//             {
//                 title: "Passenger App",
//                 link: "https://github.com/isaiahsalah/tutut-passenger",
//                 icon: AiFillGithub,
//             },
//             {
//                 title: "page",
//                 link: "https://tutut-control.vercel.app",
//                 icon: AiOutlineLink,
//             }
//         ]

//     },
//     {
//         tecnology: ["React", "styled-components"],
//         image: "./assets/images/portfolio.png",
//         state: 6,
//         links: [
//             {
//                 title: "Repository",
//                 link: "https://github.com/isaiahsalah/portfolio",
//                 icon: AiFillGithub,
//             },
//             {
//                 title: "page",
//                 link: "https://www.isaias.lat/",
//                 icon: AiOutlineLink,
//             }
//         ]

//     },
//     {
//         tecnology: ["Flutter", "OpenAI-API", ".Net", "MongoDB"],
//         image: "./assets/images/munay.png",
//         state: 4,
//         links: [
//             {
//                 title: "Repository",
//                 link: "https://github.com/isaiahsalah/munay",
//                 icon: AiFillGithub,
//             }
//         ]

//     },
//     {
//         tecnology: ["ThreeJS", ".Net", "React"],
//         image: "https://cdn.zendalibros.com/wp-content/uploads/socrates.jpg",
//         state: 1,
//         links: [
//             {
//                 title: "Repository",
//                 link: "https://github.com/isaiahsalah/information-game",
//                 icon: AiFillGithub,
//             },
//             {
//                 title: "Page",
//                 link: "",
//                 icon: AiOutlineLink,
//             }
//         ]

//     },
//     {
//         tecnology: ["Angular", ".Net"],
//         image: "https://cdn.zendalibros.com/wp-content/uploads/socrates.jpg",
//         state: 1,
//         links: [
//             {
//                 title: "Repository",
//                 link: "https://github.com/isaiahsalah/spotify-stats",
//                 icon: AiFillGithub,
//             },
//             {
//                 title: "page",
//                 link: "",
//                 icon: AiOutlineLink,
//             }
//         ]

//     },

// ]
const hardSkills = [
    {
        name: "Spring Boot",
        icon: BiCheckDouble,
    },
    {
        name: "Angular",
        icon: BiCheckDouble,
    },
    {
        name: "SQL",
        icon: BiCheckDouble,
    },
    {
        name: "ASP.Net",
        icon: BiCheck,
    },
    {
        name: "SAP DI API",
        icon: BiCheck,
    },
    {
        name: "React",
        icon: BiCheckDouble,
    },
    {
        name: "Flutter",
        icon: BiCheckDouble,
    },
    {
        name: "Python",
        icon: BiCheck,
    },
    {
        name: "Node Js",
        icon: BiCheckDouble,
    },
    {
        name: "Mongo DB",
        icon: BiCheck,
    },
    {
        name: "PostgreSQL",
        icon: BiCheck,
    },
    {
        name: "HTML5",
        icon: BiCheckDouble,
    },
    {
        name: "CSS",
        icon: BiCheck,
    },
    
];
const SpanishSoftskills = [
    {
        name: "Autodidacta",
        icon: BiCheckDouble,
    },
    {
        name: "Colaboración",
        icon: BiCheck,
    },
    {
        name: "Liderazgo",
        icon: BiCheckDouble,
    },
    {
        name: "Comunicación",
        icon: BiCheckDouble,
    },
    {
        name: "Adaptación",
        icon: BiCheckDouble,
    },
    {
        name: "Planificación",
        icon: BiCheck,
    },
    {
        name: "Gestión de problemas",
        icon: BiCheckDouble,
    },
    {
        name: "Análisis",
        icon: BiCheckDouble,
    },
]
const EnglishSoftSkills = [
    {
        name: "Autodidact",
        icon: BiCheckDouble,
    },
    {
        name: "Collaboration",
        icon: BiCheck,
    },
    {
        name: "Leadership",
        icon: BiCheckDouble,
    },
    {
        name: "Communication",
        icon: BiCheckDouble,
    },
    {
        name: "Adaptation",
        icon: BiCheckDouble,
    },
    {
        name: "Planning",
        icon: BiCheck,
    },
    {
        name: "Problem management",
        icon: BiCheckDouble,
    },
    {
        name: "Analysis",
        icon: BiCheckDouble,
    },
]

const languajeLabels = [
    {
        title: "Español",
        ling: "es",
        menu: [
            {
                title: "Sobre Mí",
                link: "about",
            },
            {
                title: "Experiencia",
                link: "experience",
            },
            // {
            //     title: "Trabajos",
            //     link: "works",
            // },
            // {
            //     title: "Experimentos",
            //     link: "experiments",
            // },
            {
                title: "Contacto",
                link: "contact",
            },
        ],
        banner: {
            title: "Hola mi nombre es",
            subtitle: "Desarrolladora de Software.",
            description: `Soy una ingeniera de sistemas que desarrolla software tanto frontend 
            como backend según las necesidades del usuario. 
            Siempre estoy buscando nuevos retos y desafíos que me permitan crear 
            soluciones innovadoras y emocionantes, mientras mejoro mis habilidades
            en el proceso.`,
            button: "Descargar CV",
        },
        about: {
            title: "Lo que debes saber de mí",
            description1: `¡Qué tal! Soy una apasionada desarrolladora de software 
                con más de 2 años de experiencia en la creación y optimización de aplicaciones web y móviles. 
                A lo largo de mi carrera, he trabajado con una variedad de tecnologías y frameworks, 
                desde ASP.Net, SAP DI API, Flutter, hasta Spring Boot, Angular, React, 
                lo que me ha permitido desarrollar una visión integral del ciclo de desarrollo de software. 
                
                Además de mis habilidades técnicas, me enorgullece mi capacidad para trabajar en equipo, 
                mi constante deseo de aprender y mi compromiso con la excelencia en cada proyecto en el que participo.`,
            description2: `Mi enfoque siempre ha sido crear soluciones eficientes y escalables que satisfagan 
                las necesidades del usuario y superen las expectativas del cliente.`,
            description3: `Me gusta el café, charlar, viajar y conocer el mundo, me gusta estar al tanto de las últimas tendencias.🧑🏻‍💻`,
            skill: {
                description:
                    "Aquí hay algunas tecnologías con las que he estado trabajando y habilidades que he desarrollado recientemente:",
                hardskill: {
                    title: "Mis habilidades duras",
                    skills: hardSkills,
                },
                softskill: {
                    title: "Mis habilidades blandas",
                    skills: SpanishSoftskills
                },
            },
        },
        experience: {
            title: "¿Dónde he trabajado?",
            jobs: [
                {
                    title: "Analista de Sistemas",
                    position: "Analista de Sistemas",
                    company: "Santa Cruz Vida y Salud",
                    range: "Octubre 2022 - Actualidad",
                    description: [
                        `Desarrollé el módulo de personas, mejorando la eficiencia 
                        en la gestión de datos de los clientes asegurados.`,
                        `Lideré la migración de la base de datos usando SQL, 
                        transfiriendo y optimizando los registros existentes.`,
                        `Gestioné el soporte mensual para el sistema AMLC, 
                        coordinando múltiples áreas y asegurando una tasa de precisión
                        del 99% en las cargas de datos.`,
                    ],
                },
                {
                    title: "Desarrolladora de Software",
                    position: "Pasante",
                    company: "Sociedad Synergy Ltda.",
                    range: "Febrero 2022 - Octubre de 2022",
                    description: [
                        `Diseñé el módulo de entrega, logrando una integración con 
                        SDK DI API para SAP B1, permitiendo un servicio que unió 
                        el ERP para mostrar entregas diarias pendientes, parciales y totales, 
                        mejorando la transparencia operativa.`,
                        `Desarrollé una aplicación web dentro del módulo de entrega que
                        consumía el servicio de SAP, brindando a los empleados del almacén
                        información en tiempo real sobre los movimientos de entrega diarios, 
                        lo que mejoró la eficiencia del almacén.`
                    ],
                },
                {
                    title: "Desarrolladora de Software",
                    position: "Freelancer",
                    company: "Grupo Editorial La Hoguera",
                    range: "Abril 2021 - Noviembre de 2021",
                    description: [
                        `Desarrollé un servicio de integración con SDK DI API SAP B1, 
                        permitiendo la conectividad ERP para registrar y mostrar las ventas 
                        por proveedor, optimizando la eficiencia del flujo de trabajo.`,
                        `Asegurarse de que los registros contables de la empresa concuerden con 
                        las transacciones bancarias y realizar ajustes en caso de discrepancias.`,
                        `Desarrollé una aplicación móvil que consume este servicio, capacitando a los vendedores a:
                        1. Ver listas de productos y realizar pedidos directamente desde la aplicación.
                        2. Consultar el estado del pedido en tiempo real.`,
                        `Esta implementación condujo a la eliminación completa de los formularios
                        utilizados anteriormente para el registro de ventas.`,
                    ],
                },
                // {
                //     title: "Desarrollador",
                //     position: "Desarrollador",
                //     company: "SkyHub",
                //     range: "Diciembre 2019 - Marzo de 2020",
                //     description: [
                //         `Configurar e integrar chatbots con diferentes sistemas 
                //         y herramientas de marketing, para mejorar la eficiencia 
                //         y la productividad de las empresas.`,
                //         `Diseñar y desarrollar sitios web personalizados, 
                //         utilizando lenguajes de programación como HTML, CSS 
                //         y JavaScript`,
                //         `Trabajar en colaboración con diseñadores gráficos, 
                //         equipos de marketing y otros desarrolladores para 
                //         crear sitios web innovadores y atractivos para los 
                //         usuarios.`,
                //     ],
                // },
                // {
                //     title: "Desarrollador",
                //     position: "Desarrollador",
                //     company: "Alfa",
                //     range: "Mayo 2019 - Noviembre de 2019",
                //     description: [
                //         `Diseñar y desarrollar soluciones de automatización 
                //         de informes utilizando Google Apps Script para diversas 
                //         aplicaciones de Google, como Google Sheets, Google Drive, 
                //         Google Docs, entre otras.`,
                //         `Mantener y mejorar las soluciones existentes de automatización 
                //         de informes, realizando actualizaciones y ajustes según sea necesario.`,
                //         `Diseñar y desarrollar sitios web utilizando WordPress, 
                //         trabajando con temas y plugins personalizados para adaptarse 
                //         a las necesidades del cliente.`,
                //         `Diseñar y desarrollar chatbots para plataformas como ManyChat 
                //         y Dialogflow, asegurándose de que los chatbots sean personalizados 
                //         para cumplir con los requisitos de los clientes.`,
                //     ],
                // },
            ],
        },
        // works: {
        //     title: "Algunas cosas que he hecho",
        //     work: [
        //         {
        //             title: "Asistente Psicologico Virtual",
        //             description:
        //                 `Este es un software diseñado para brindar apoyo emocional 
        //                 y psicológico a través de una conversación simulada en línea.
        //                 La integración de WhatsApp API permite que el asistente esté disponible 
        //                 en la aplicación de mensajería instantánea más popular del mundo, 
        //                 lo que lo hace accesible y fácil de usar para los usuarios. Además, 
        //                 la integración de OpenAI API, una plataforma de inteligencia artificial 
        //                 avanzada, le permite al asistente mantener conversaciones fluidas y 
        //                 personalizadas, y ofrecer respuestas precisas y contextuales para las 
        //                 necesidades específicas de cada usuario.`,
        //             ..._works[0]
        //         },
        //         {
        //             title: "Sala de Chat",
        //             description:
        //                 `Es una aplicación de chat en tiempo real con una arquitectura moderna 
        //                 y eficiente, que permite a los usuarios comunicarse de manera rápida 
        //                 y fácil en grupos en línea. Todo hecho con Angular y Firebase.`,
        //             ..._works[1]
        //         },
        //         {
        //             title: "Sistema de monitoreo GPS de transporte público",
        //             description:
        //                 `Sistema que permite el seguimiento en tiempo real de 
        //                 vehículos de transporte público mediante tecnología GPS. 
        //                 Los usuarios pueden ver la ubicación de los 
        //                 vehículos en un mapa y obtener información en tiempo 
        //                 real sobre su trayectoria, velocidad y tiempo estimado 
        //                 de llegada. Además, el sistema puede generar alertas 
        //                 para los administradores en caso de retrasos, cambios 
        //                 en la ruta o problemas técnicos en los vehículos. 
        //                 Este tipo de sistema puede mejorar la eficiencia y 
        //                 seguridad del transporte público, así como brindar 
        //                 una mejor experiencia a los usuarios.`,
        //             ..._works[2]

        //         },
        //         {
        //             title: "Mi portafolio",
        //             description:
        //                 `Un sitio web diseñado para mostrar mi trabajo y mis 
        //                 habilidades como desarrollador de software. Se construyó 
        //                 utilizando React, que proporciona una forma eficiente de 
        //                 crear interfaces de usuario interactivas y responsivas.`,
        //             ..._works[3]

        //         },
        //         {
        //             title: "Munay",
        //             description:
        //                 `"Munay" es una aplicación de pareja completa que ayuda a las 
        //                 parejas a profundizar en su relación y a fortalecer su conexión emocional. 
        //                 Con características únicas como la sección de preguntas, los consejos 
        //                 personalizados y la integración de ChatGPT, esta aplicación es una 
        //                 herramienta valiosa para cualquier pareja que quiera 
        //                 mejorar su relación.`,
        //             ..._works[4]

        //         },
        //         /*{
        //             title: "Juego 3d de información sobre seguridad",
        //             description:
        //                 `Página de Juego 3D de información sobre seguridad de una forma divertida 
        //                 y educativa de aprender sobre seguridad en línea y mejorar tus habilidades 
        //                 en este tema crucial en la era digital actual.`,
        //             ..._works[5]

        //         },
        //         {
        //             title: "Spotify Stats",
        //             description:
        //                 `Una aplicación que utiliza la API de Spotify para mostrar estadísticas 
        //                 de uso y reproducción de música de los usuarios en una interfaz de 
        //                 usuario limpia y moderna creada con Angular. La aplicación también 
        //                 incluye recomendaciones de canciones y artistas, basadas en las 
        //                 preferencias del usuario.`,
        //             ..._works[6]

        //         },*/

        //     ],
        // },
        // experiment: {
        //     title: "Algunos pequeños experimentos",
        //     experiments: [
        //         {
        //             title: "Efecto de Ruido al desplazarse",
        //             ..._experiment[0]
        //         },
        //         {
        //             title: "Efecto de hacker en texto",
        //             ..._experiment[1]
        //         },
        //         {
        //             title: "Efecto de Blur en el mouse",
        //             ..._experiment[2]
        //         },
        //         {
        //             title: "Efecto de escritura",
        //             ..._experiment[3]
        //         },
        //         {
        //             title: "Efecto de Sombra Dinamica",
        //             ..._experiment[4]
        //         },
        //         {
        //             title: "Paint con JS",
        //             ..._experiment[5]
        //         },
        //         {
        //             title: "Efecto Parallax al hacer scroll",
        //             ..._experiment[6]
        //         },
        //         {
        //             title: "Efecto al desplazarse por un botón",
        //             ..._experiment[7]
        //         }
        //         ,
        //         {
        //             title: "Efecto de Cursor dentro de un texto",
        //             ..._experiment[8]
        //         }
        //     ],
        // },
        contact: {
            title: "¿Y ahora?",
            subtitle: "Ponete en contacto",
            description:
                `En resumen, soy una apasionada por la tecnología y aprender. Si querés una desarrolladora que sea 
                eficiente, amigable y tenga ganas de aprender más allá de lo enseñado, 
                ¡estoy acá!`,
            button: "Decí hola",
        },
        footer: "Desarrollado por Natalia Bolivia Duran Oliva",
    },
    {
        title: "English",
        ling: "en",
        menu: [
            {
                title: "About me",
                link: "about",
            },
            {
                title: "Experience",
                link: "experience",
            },
            // {
            //     title: "Works",
            //     link: "works",
            // },
            // {
            //     title: "Experiments",
            //     link: "experiments",
            // },
            {
                title: "Contact",
                link: "contact",
            },
        ],
        banner: {
            title: "Hi my name is",
            subtitle: "FullStack Developer.",
            description: `I am a systems engineer who develops both frontend and backend software based on user needs.
            I am always looking for new challenges and challenges that allow me to create innovative and
            exciting solutions, while improving my skills in the process.`,
            button: "Download CV",
        },
        about: {
            title: "What you should know about me",
            description1: `How are you! I am a passionate software developer.
            With more than 2 years of experience in the creation and optimization of web and mobile applications.
            Throughout my career, I have worked with a variety of technologies and frameworks,
            from ASP.Net, SAP DI API, Flutter, to Spring Boot, Angular, React,
            which has allowed me to develop a comprehensive vision of the software development cycle.
            
            In addition to my technical skills, I pride myself on my ability to work in a team,
            my constant desire to learn and my commitment to excellence in every project in which I participate.`,
            description2: `My focus has always been to create efficient and scalable solutions that satisfy
            user needs and exceed customer expectations.`,
            description3: `I like coffee, discuss, traveling and seeing the world, I like to be aware of the latest trends.🧑🏻‍💻`,
            skill: {
                description:
                    `Here are some technologies I've been working with and skills 
                    I've recently developed:`,
                hardskill: {
                    title: "My hard skills",
                    skills: hardSkills,
                },
                softskill: {
                    title: "My soft skills",
                    skills: EnglishSoftSkills
                },
            },
        },
        experience: {
            title: "Where have I worked?",
            jobs: [
                {
                    title: " Systems Analyst",
                    position: "Systems Analyst",
                    company: "Santa Cruz Vida y Salud",
                    range: "October 2022 - Present",
                    description: [
                        `I developed the people module, improving 
                        the efficiency of data management of insured clients.`,
                        `Led the database migration using SQL, 
                        transferring and optimizing existing records.`,
                        `Managed monthly support for the AMLC system, 
                        coordinating across multiple departments and ensuring 
                        a 99% accuracy rate in data uploads.`,
                    ],
                },
                // {
                //     title: "Assistant",
                //     position: "CPD Assistant",
                //     company: "UEB",
                //     range: "August 2021 - November 2021",
                //     description: [
                //         `Supervise the computer and communication systems 
                //         of the Data Processing Center (DPC) to detect any 
                //         failure or irregularity in their operation.`,
                //         `Create and develop customized scripts to automate 
                //         specific processes in Google applications, using 
                //         the Google App Script programming language.`,
                //         `Integrate different Google applications to improve 
                //         efficiency and productivity, through the use of 
                //         customized scripts.`,
                //         `Perform thorough testing and debugging of the 
                //         scripts, ensuring that changes do not negatively 
                //         affect the operation of the Google applications.`,
                //     ],
                // },
                // {
                //     title: "Accountant",
                //     position: "Secretary Accountant",
                //     company: "Linea58",
                //     range: "December 2020 - March 2021",
                //     description: [
                //         `Register and classify daily financial transactions 
                //         of the company, including sales invoices, income 
                //         receipts, expense invoices, and payment vouchers.`,
                //         `AEnsure that the company's accounting records 
                //         match the banking transactions and make adjustments 
                //         in case of discrepancies.`,
                //         `Supervise and manage the company's accounts payable 
                //         and accounts receivable, ensuring that invoices are 
                //         paid on time and outstanding debts are collected.`,
                //     ],
                // },
                {
                    title: "Developer FullStack",
                    position: "Intern",
                    company: "Sociedad Synergy Ltda.",
                    range: "February 2022 - October 2022",
                    description: [
                        `Engineered the delivery module, achieving an integration with 
                        SDK DI API for SAP B1, enabling a service that bridged 
                        the ERP to display daily pending, partial, and total deliveries,
                        enhancing operational transparency.`,
                        `Developed a Web Application for Delivery Module that consumed 
                        the SAP service, providing warehouse users with real-time 
                        insights into daily delivery movements.`
                    ],
                },
                {
                    title: "Developer FullStack",
                    position: "Developer",
                    company: "Grupo Editorial La Hoguera",
                    range: "April 2021 - November 2021",
                    description: [
                        `Developed an integration service with SDK DI API SAP B1, 
                        enabling ERP connectivity to record and display sales by vendor, 
                        optimizing workflow efficiency.`,
                        `Developed a mobile application consuming this service, 
                        empowering sales representatives to:
                        1. View product lists and place orders directly from the app.
                        2. Check the status of your order in real-time.`
                    ],
                },
            ],
        },
        // works: {
        //     title: "Some Things I’ve Built",
        //     work: [
        //         {
        //             title: "Virtual Psychological Assistant",
        //             description:
        //                 `This is a software designed to provide emotional and psychological support 
        //                 through a simulated online conversation. The integration of WhatsApp API allows 
        //                 the assistant to be available on the world's most popular instant messaging 
        //                 application, making it accessible and easy to use for users. In addition, 
        //                 the integration of OpenAI API, an advanced artificial intelligence platform, 
        //                 allows the assistant to maintain fluid and personalized conversations 
        //                 and offer accurate and contextual responses to the specific needs of each user.`,
        //             ..._works[0]
        //         },
        //         {
        //             title: "Chat Room",
        //             description:
        //                 `It is a real-time chat application with a modern and efficient architecture 
        //                 that allows users to communicate quickly and easily in online groups. Everything 
        //                 is built with Angular and Firebase.`,
        //             ..._works[1]

        //         },
        //         {
        //             title: "GPS Monitoring System for Public Transportation",
        //             description:
        //                 `A system that allows for real-time tracking of public transportation 
        //                 vehicles through GPS technology. Users can view the vehicles' 
        //                 location on a map and obtain real-time information on their 
        //                 trajectory, speed, and estimated time of arrival. Additionally, 
        //                 the system can generate alerts for administrators in case of delays, 
        //                 route changes, or technical issues with the vehicles. This type 
        //                 of system can improve the efficiency and safety of public 
        //                 transportation, as well as provide a better experience for users.`,
        //             ..._works[2]

        //         },
        //         {
        //             title: "My portfolio",
        //             description:
        //                 `A website designed to showcase my work and skills as a software developer. 
        //                 It was built using React, which provides an efficient way to create 
        //                 interactive and responsive user interfaces.`,
        //             ..._works[3]

        //         },
        //         {
        //             title: "Munay",
        //             description:
        //                 `"Munay" is a comprehensive couples' app that helps partners deepen their 
        //                 relationship and strengthen their emotional connection. With unique features 
        //                 such as the question section, personalized advice, and integration with ChatGPT, 
        //                 this app is a valuable tool for any couple looking to enhance their relationship.`,
        //             ..._works[4]

        //         },
        //         /*{
        //             title: "3D Security Information Game",
        //             description:
        //                 `3D Security Information Game page is a fun and educational way to learn 
        //                 about online security and improve your skills in this crucial topic in 
        //                 the current digital age.`,
        //             ..._works[5]

        //         },
        //         {
        //             title: "Spotify Stats",
        //             description:
        //                 `An application that utilizes Spotify's API to display users' 
        //                 music usage and playback statistics on a clean and modern user interface 
        //                 created with Angular. The application also includes song and artist 
        //                 recommendations based on user preferences.`,
        //             ..._works[6]

        //         }*/

        //     ],
        // },
        // experiment: {
        //     title: "Here are some small experiments",
        //     experiments: [
        //         {
        //             title: "Noise Hover Effect",
        //             ..._experiment[0]
        //         },
        //         {
        //             title: "Hacker Effect On Text",
        //             ..._experiment[1]
        //         },
        //         {
        //             title: "Blur Effect On Mouse",
        //             ..._experiment[2]
        //         },
        //         {
        //             title: "Writing Effect",
        //             ..._experiment[3]
        //         },
        //         {
        //             title: "Dynamic Shadow Effect",
        //             ..._experiment[4]
        //         },
        //         {
        //             title: "Paint With JS",
        //             ..._experiment[5]
        //         },
        //         {
        //             title: "Parallax Effect When Scrolling",
        //             ..._experiment[6]
        //         },
        //         {
        //             title: "Effect When Hovering A Button",
        //             ..._experiment[7]
        //         }
        //         ,
        //         {
        //             title: "Cursor Effect Within A Text",
        //             ..._experiment[8]
        //         }
        //     ],
        // },
        contact: {
            title: "And now?",
            subtitle: "Get in touch",
            description:
                `In summary, I'm a technology enthusiast who enjoys 
                building things online. If you're looking for a web 
                developer who is efficient, friendly, and eager to 
                learn beyond what's taught, here I am!`,
            button: "Say hello",
        },
        footer: "Developed by Natalia Bolivia Duran Oliva",
    },
];


export const LanguajeContext = createContext();

export const LanguajeProvider = ({ children }) => {
    const [languaje, setLanguaje] = useState(languajeLabels[1]);

    const changeLanguaje = () => {
        if (languaje.ling === "en") {
            document.documentElement.lang = "es";
            setLanguaje(languajeLabels[0]);
        } else {
            document.documentElement.lang = "en";
            setLanguaje(languajeLabels[1]);
        }
    };

    return (
        <LanguajeContext.Provider value={{ languaje, changeLanguaje }}>
            {children}
        </LanguajeContext.Provider>
    );
};
