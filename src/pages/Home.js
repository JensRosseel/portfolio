import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import jester from '../img/jester.png'

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <p>Hi, I'm Jens Rosseel<br></br>I'm a Web Developer from Belgium with a passion for &lt;code/&gt;</p><br/>
          <Link to="/projects" className='home-button'>View my projects &#x21e8;</Link><br />
          <img src={jester} alt='jester' />
        </div>
      </div>
    </>
  )
}