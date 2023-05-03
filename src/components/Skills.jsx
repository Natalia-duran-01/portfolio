import React, { useContext } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { LanguajeContext } from '../providers/LanguajeProvider';


export const Skills = () => {
    const { languaje } = useContext(LanguajeContext);

    return (
        <SwitchTransition>
            <CSSTransition
                key={languaje.about.title}
                classNames="fade-bottom-1"
                addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                }
            >
                <div className="skills-area">
                    <p>{languaje.about.skill.description}</p>
                    <div className="flex-wrap hard-area">
                        <h6 className="skill-title">
                            {languaje.about.skill.hardskill.title}
                        </h6>
                        <ul className="skills hard">
                            {languaje.about.skill.hardskill.skills.map((skill, i) => (
                                <li key={i}>
                                    <p>{skill.name}</p><skill.icon className="icon" />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-wrap soft-area">
                        <h6 className="skill-title">
                            {languaje.about.skill.softskill.title}
                        </h6>
                        <ul className="skills soft">
                            {languaje.about.skill.softskill.skills.map((skill, i) => (
                                <li key={i}>
                                    <p>{skill.name}</p> <skill.icon className="icon" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </CSSTransition>
        </SwitchTransition>
    )
}
