import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import './style.css'

class Nav extends React.Component{
  render(){
    return(
      <div className="nav">
        <div className="navButton"></div>
        <div className='navWindow'>
          <div className="link"><Link to="/">Home</Link></div>
          <div className="link"><Link to="/projects">Projects</Link> </div>
          <div className="link"><Link to="/contact">Contact Me</Link> </div>
        </div>
      </div>
    )
  }
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/projects">
          <Nav />
          <Projects />
        </Route>
        <Route path="/contact">
          <Nav />
          <Contact />
        </Route>
        <Route path="/">
          <Nav />
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

