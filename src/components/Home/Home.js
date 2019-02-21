import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="home">
                  
                    <section className="colorblock-one"></section>
                        <nav>
                            <ul>
                                <li className="main-nav">Home</li>
                                <li>About</li>
                                <li>Projects</li>
                                <li>Contact</li>
                            </ul>
                        </nav> 
                        <div className="intro">
                            <h1 className="logo">Shakira Weir,</h1>
                            <p className="title">Web Developer | Content Creator</p>
                        </div>
                    <section className="colorblock-two"></section>
            </div>
        );
    }
}

export default Home;