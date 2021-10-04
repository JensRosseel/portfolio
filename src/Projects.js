import React from 'react'
import { Link } from 'react-router-dom'
import './projects.css'
import spaceinvaders from './img/spaceinvaders.JPG'
import weatherapp from './img/weatherapp.JPG'

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
                <img src={ weatherapp } alt="project" />
                <div className="description">
                    <div className="title">Weather App</div>
                    <p>Weather app created with the OpenWeather API using plain JavaScript</p>
                </div>
                <div className="buttons">
                    <div className="button"><a href="https://jensrosseel.github.io/weather-app/" target="_blank" rel="noopener noreferrer">Go to Deploy</a></div><br />
                    <div className="button"><a href="https://github.com/JensRosseel/weather-app" target="_blank" rel="noopener noreferrer">Go to Repo</a></div>
                </div>
            </div>
            <div className="interested">
                <p>Interested?</p>
                <div className="button"><Link to="/contact">Contact Me</Link></div>
            </div>
        </div>
        
    )
}
