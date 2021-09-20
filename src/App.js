import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'

class Nav extends React.Component{
  render(){
    return(
      <div className="navWindow">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact Me</Link>
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

