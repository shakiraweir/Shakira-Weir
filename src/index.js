import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter as Router } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';



ReactDOM.render(
    <Router>
        <App />
  </Router>,
document.getElementById('root'));


