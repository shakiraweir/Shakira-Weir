import React, { Component } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    
                        <section className="colorblock-one"></section>
                            <div className="welcome">
                                <h1 className="greeting">Hello</h1>
                                <div className='greeting-content'>
                                    <p>I'm 
                                        <span className="author"> Shakira </span>
                                    &rarr;
                                    Web Developer &bull; Content Creator
                                </p>
                                </div>
                                <div className='welcome-btn'>
                                    <span ><Link to='/profile/#projects/' className="left" >Explore Work</Link></span>
                                    <span><Link to="/profile" className="right ">View Profile</Link></span>
                                </div>
                            </div>
                        <section className="colorblock-two"></section>
                    
                </div>          
            </div>
        );
    }
}

export default Home;