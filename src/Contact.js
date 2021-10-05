import React from 'react'
import './contact.css'
import github from './img/github.png'
import mail from './img/mail.png'

export default function Contact() {
    return (
        <div className="container">
            <div className="contact">
                <p>Contact me at</p>
                <div className="mediaLinks">
                    <p>
                        E-mail: <a href="mailto:jensrosseel.business@gmail.com">jensrosseel.business@gmail.com</a><br/>
                        GitHub: <a href="https://github.com/JensRosseel">https://github.com/JensRosseel</a>
                    </p>
                </div>
                <div className="mediaButtons">
                    <a href="mailto:jensrosseel.business@gmail.com"><img src={mail} alt="mail button"></img></a>
                    <a href="https://github.com/JensRosseel"><img src={github} alt="github button"></img></a>
                </div>
            </div>
        </div>
    )
}
