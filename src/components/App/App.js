import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home'
import { Route } from "react-router-dom"
import About from '../About/About'
import Contact from '../Contact/Contact'
import { Link, Switch } from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  render() {
    return (
      <div className="App">
           <nav>
              <ul>
                  <li> <Link to='/' className="main-nav">Home</Link> </li>
                  <li> <Link to='/about'>About</Link> </li> 
                  <li> <Link to='/contact'>Contact </Link> </li>
              </ul>
            </nav> 
            <Switch>
        <Route path='/' exact render={() => <Home /> } />
        <Route path='/about' exact render={() => <About /> } />
        <Route path='/about' exact render={() => <Contact /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
