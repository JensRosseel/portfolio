import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <p>Hi, I'm Jens Rosseel<br></br>I'm a Web Developer</p><br/>
          <Link to="/projects" className='home-button'>View my projects &#x21e8;</Link>
        </div>
      </div>
    </>
  )
}