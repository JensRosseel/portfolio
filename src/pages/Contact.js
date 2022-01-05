import React from 'react'
import * as AiIcons from 'react-icons/ai'
import './Contact.css'
import { IconContext } from 'react-icons'
import jester from '../img/jester.png'

export default function Contact() {
    return (
        <>
            <IconContext.Provider value={{color: 'white'}}>
                <div className="contact-container">
                    <div className="contact">
                        <p>Contact me at</p>
                        <div className="media-links">
                            <p>
                                E-mail: <a href="mailto:jensrosseel.business@gmail.com">jensrosseel.business@gmail.com</a><br/>
                            </p>
                        </div>
                        <div className="media-buttons">
                            <a href="mailto:jensrosseel.business@gmail.com"><AiIcons.AiOutlineMail /></a>
                        </div>
                        <img src={jester} alt='jester' />
                    </div>
                </div>
            </IconContext.Provider>
        </>   
    )
}
