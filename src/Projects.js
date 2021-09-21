import React from 'react'
import { Link } from 'react-router-dom'
import './projects.css'

export default function Projects() {
    return (
        <div className="container">
            <div className="card">
                <img src="" alt="project" />
                <div className="title">title</div>
                <div className="button"><Link to="">Go to project</Link></div>
            </div>
            <div className="card">
                <img src="" alt="project" />
                <div className="title">title</div>
                <div className="button"><Link to="">Go to project</Link></div>
            </div>
            <div className="card">
                <img src="" alt="project" />
                <div className="title">title</div>
                <div className="button"><Link to="">Go to project</Link></div>
            </div>
        </div>
    )
}
