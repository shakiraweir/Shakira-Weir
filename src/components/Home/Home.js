import React, { Component } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        // var color = {
        //     color: "#808080",
        // }

        return (
            <div>
                <div className="home">
                    
                        <section className="colorblock-one"></section>
                            <div className="welcome">
                                {/* <h1 className="welcome-heading">
                                <span className="first-word" >S</span>hakira  
                                <span className="first-word" > W</span >eir
                                </h1>
                                <p className="welcome-subtitle">Web Developer | Content Creator</p> */}
                                <h1 className="greeting">Hello</h1>
                                <div className='greeting-content'>
                                    <p>I'm 
                                        <span className="author"> Shakira </span>
                                    &rarr;
                                    Web Developer &bull; Content Creator
                                </p>
                                </div>
                                <div className='welcome-btn'>
                                    <span ><Link className="left" to='/projects'>Explore Work</Link></span>
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