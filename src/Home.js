import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function App() {
  return (
    <div className="container">
      <div className="content">
        <p>Hi, I'm Jens Rosseel<br></br>I'm a full-stack developer</p>
        <div className="button"><Link to="/projects">View my projects &#x21e8;</Link></div>
      </div>
    </div>
  )
}