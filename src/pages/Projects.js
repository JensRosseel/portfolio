import React from 'react'
import { Link } from 'react-router-dom'
import spaceinvaders from '../img/spaceinvaders.JPG'
import todolist from '../img/todolist.JPG'
import pokedex from '../img/pokedex.JPG'
import './Projects.css'

export default function Projects() {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={ spaceinvaders } alt="space-invaders" />
                    <div className="description">
                        <div className="title">Space Invaders</div>
                        <p>A space invaders clone made by using DOM-Manipulation in plain JavaScript</p>
                    </div>
                    <div className="buttons">
                        <a href="https://spaceinvaders-jensrosseel.netlify.app" target="_blank" rel="noopener noreferrer" className="button">Go to Deploy</a><br />
                        <a href="https://github.com/JensRosseel/space-invaders" target="_blank" rel="noopener noreferrer" className="button">Go to Repo</a>
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
                        <a href="https://todo-list-jens.netlify.app/" target="_blank" rel="noopener noreferrer" className="button">Go to Deploy</a><br />
                        <a href="https://github.com/JensRosseel/intro-react" target="_blank" rel="noopener noreferrer" className="button">Go to Repo</a>
                    </div>
                </div>
                <div className="card">
                    <img src={ pokedex } alt="project" />
                    <div className="description">
                        <div className="title">PokeDex</div>
                        <p>
                            Pokedex made with react using axios to fetch the PokeAPI.
                        </p>
                    </div>
                    <div className="buttons">
                        <a href="https://jensrosseel-pokedex.netlify.app/" target="_blank" rel="noopener noreferrer" className="button">Go to Deploy</a><br />
                        <a href="https://github.com/JensRosseel/pokedex" target="_blank" rel="noopener noreferrer" className="button">Go to Repo</a>
                    </div>
                </div>
            </div>
            <p className='interested'>Interested?</p>
            <Link to="/contact" className="contact-button">Contact Me</Link>
        </>
        
        
    )
}
