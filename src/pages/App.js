import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import NavBar from '../components/Navbar'
import './App.css'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/projects">
          <NavBar />
          <Projects />
        </Route>
        <Route path="/contact">
          <NavBar />
          <Contact />
        </Route>
        <Route path="/">
          <NavBar />
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

