import React from 'react'
import './projects.css'
import spaceinvaders from './img/spaceinvaders.JPG'
import weatherapp from './img/weatherapp.JPG'

export default function Projects() {
    return (
        <div className="container">
            <div className="card">
                <img src={ spaceinvaders } alt="space-invaders" />
                <div className="title">Space Invaders</div>
                <div className="button"><a href="https://spaceinvaders-jensrosseel.netlify.app">Go to project</a></div>
            </div>
            <div className="card">
                <img src={ weatherapp } alt="project" />
                <div className="title">Weather App</div>
                <div className="button"><a href="https://jensrosseel-weatherapp2.netlify.app/">Go to project</a></div>
            </div>
            <div className="card">
                <img src="" alt="project" />
                <div className="title">title</div>
                <div className="button"><a href="/projects">Go to project</a></div>
            </div>
        </div>
    )
}
