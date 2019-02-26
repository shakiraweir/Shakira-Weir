import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home'
import { Route } from "react-router-dom"
import About from '../About/About'
// import Contact from '../Contact/Contact'
import Resume from '../Resume/Resume'
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
                  <li> <a href='/#contact'>Contact</a> </li>
              </ul>
            </nav> 

        <Switch>
        <Route path='/profile' exact render={() => <Resume /> } />
        <Route path='/' exact render={() => <Home /> } />
        <Route path='/about' exact render={() => <About /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
