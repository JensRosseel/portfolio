import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import './Nav.css'

class Nav extends React.Component{
  render(){
    return(
      <div className="navWindow">
        <div className="link"><Link to="/">Home<br></br>&#9679;</Link></div>
        <div className="link"><Link to="/projects">Projects<br></br>&#9679;</Link> </div>
        <div className="link"><Link to="/contact">Contact Me<br></br>&#9679;</Link> </div>
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

