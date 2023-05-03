import React, { useContext } from 'react'
import { mySocialMedia } from '../utils/config'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { LanguajeContext } from '../providers/LanguajeProvider'

export const SocialMedia = () => {
    const { languaje } = useContext(LanguajeContext)

    return (
        <div className='social-media'>
            <SwitchTransition>
                <CSSTransition
                    key={languaje.banner.title}
                    classNames="fade-bottom-1"
                    addEndListener={(node, done) =>
                        node.addEventListener("transitionend", done, false)
                    }
                >
                    <div className='social-media-box'>

                        <ul>
                            {mySocialMedia.map((social, i) =>
                                <li key={i} title={social.title}>
                                    <a href={social.link} target='_blanck'>
                                        <social.icon className='icon' />
                                    </a>
                                </li>)}
                        </ul>
                        <div className='line'></div>
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>

    )
}
