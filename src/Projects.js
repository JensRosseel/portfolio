import React from 'react'
import { Link } from 'react-router-dom'
import './projects.css'
import spaceinvaders from './img/spaceinvaders.JPG'
import todolist from './img/todolist.JPG'

export default function Projects() {
    return (
        <div className="cards">
            <div className="card">
                <img src={ spaceinvaders } alt="space-invaders" />
                <div className="description">
                    <div className="title">Space Invaders</div>
                    <p>A space invaders clone made by using DOM-Manipulation in plain JavaScript</p>
                </div>
                <div className="buttons">
                    <div className="button"><a href="https://spaceinvaders-jensrosseel.netlify.app" target="_blank" rel="noopener noreferrer">Go to Deploy</a></div><br />
                    <div className="button"><a href="https://github.com/JensRosseel/space-invaders" target="_blank" rel="noopener noreferrer">Go to Repo</a></div>
                </div> 
            </div>
            <div className="card">
                <img src={ todolist } alt="project" />
                <div className="description">
                    <div className="title">Todo-List</div>
                    <p>
                        Made with REACT framework using use-state function to make a todo-list app. <br />
                        Also uses local storage to store the list.
                    </p>
                </div>
                <div className="buttons">
                    <div className="button"><a href="https://todo-list-jens.netlify.app/" target="_blank" rel="noopener noreferrer">Go to Deploy</a></div><br />
                    <div className="button"><a href="https://github.com/JensRosseel/intro-react" target="_blank" rel="noopener noreferrer">Go to Repo</a></div>
                </div>
            </div>
            <div className="interested">
                <p>Interested?</p>
                <div className="button"><Link to="/contact">Contact Me</Link></div>
            </div>
        </div>
        
    )
}
