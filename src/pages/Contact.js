import React from 'react'
import * as AiIcons from 'react-icons/ai'
import './Contact.css'
import { IconContext } from 'react-icons'

export default function Contact() {
    return (
        <>
            <IconContext.Provider value={{color: 'black'}}>
                <div className="contact-container">
                    <div className="contact">
                        <p>Contact me at</p>
                        <div className="media-links">
                            <p>
                                E-mail: <a href="mailto:jensrosseel.business@gmail.com">jensrosseel.business@gmail.com</a><br/>
                                GitHub: <a href="https://github.com/JensRosseel" target="_blank" rel="noopener noreferrer">https://github.com/JensRosseel</a>
                            </p>
                        </div>
                        <div className="media-buttons">
                            <a href="mailto:jensrosseel.business@gmail.com"><AiIcons.AiOutlineMail /></a>
                            <a href="https://github.com/JensRosseel" target="_blank" rel="noopener noreferrer"><AiIcons.AiFillGithub /></a>
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </>   
    )
}
