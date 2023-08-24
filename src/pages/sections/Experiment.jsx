// import React, { useContext } from "react";
// import { ExperimentBox } from "../../utils/exportStyles";
// import { AiTwotoneExperiment } from "react-icons/ai";
// import { LanguajeContext } from "../../providers/LanguajeProvider";
// import { CSSTransition, SwitchTransition } from "react-transition-group";

// export const Experiment = () => {
//     const { languaje } = useContext(LanguajeContext);

//     return (
//         <ExperimentBox className="flex experiments" id="experiments">
//             <div className="flex-area">
//                 <SwitchTransition>
//                     <CSSTransition
//                         key={languaje.banner.title}
//                         classNames="fade-top-1"
//                         addEndListener={(node, done) =>
//                             node.addEventListener("transitionend", done, false)
//                         }
//                     >
//                         <fieldset>
//                             <legend>
//                                 <span className="color-p">04.</span> {languaje.experiment.title}
//                             </legend>
//                         </fieldset>
//                     </CSSTransition>
//                 </SwitchTransition>
//                 <SwitchTransition>
//                     <CSSTransition
//                         key={languaje.banner.title}
//                         classNames="fade-left-to-right-1"
//                         addEndListener={(node, done) =>
//                             node.addEventListener("transitionend", done, false)
//                         }
//                     >
//                         <div className="list">
//                             {languaje.experiment.experiments.map((exp, i) => (
//                                 <div className="item" key={i}>
//                                     <div className="sup">
//                                         <AiTwotoneExperiment className="icon-left" />
//                                         <ul className="links">
//                                             {exp.links.map((link, i) => (
//                                                 <li key={i}>
//                                                     <a href={link.link} target="_blanck">
//                                                         <link.icon className="icon-right" />
//                                                     </a>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                     <h6 className="title">{exp.title}</h6>
//                                     <ul className="tecno">
//                                         {exp.tecnology.map((tecno, i) => (
//                                             <li key={i}>
//                                                 <p>{tecno}</p>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             ))}
//                         </div>
//                     </CSSTransition>
//                 </SwitchTransition>
//             </div>
//         </ExperimentBox>
//     );
// };
