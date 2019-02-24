import React, { Component } from 'react';
import './Resume.css'

class Resume extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    
                    <section className="colorblock-one"></section>
                        <div className="heading">
                            <h1 className="title">Experience</h1>
                                <div className="exp">
                                    <div className="exp-subtitle">
                                        <h4>Career</h4>
                                        <ul className='jobs one'>
                                    
                                            <li>Web Development Immersive</li>
                                            <p>General Assembly</p>
                                            <div className="date"><i class="far fa-calendar-alt"></i><span>Dec 2018-present</span></div>
                                            <div className="location"><i class="fas fa-map-marker-alt"></ i><span>Washington, D.C.</span></div>
                
                                            <li>Information Systems Technician</li>
                                            <p>U.S. Coast Guard</p>
                                            <div className="date"><i class="far fa-calendar-alt"></i><span>2015-2019</span></div>
                                            <div className="location"><i class="fas fa-map-marker-alt"></i><span>Washington, D.C. </span></div>
                                            
                                            <li>Science Teacher</li>
                                            <p>North Star Academy - Vailsburg Middle School</p>
                                            <div className="date"><i class="far fa-calendar-alt"></i><span>2013-2014</span></div>
                                            <div className="location"><i class="fas fa-map-marker-alt"></i><span>Newark, N.J.</span></div>
                                        </ul>
                                    </div>
                                    <div className="exp-subtitle">
                                        <h4>Education</h4>
                                        <ul className='jobs two'>

                                            <li>Web Development Immersive</li>
                                            <p>General Assembly</p>
                                            <div className="date"><i class="far fa-calendar-alt"></i><span>2019</span></div>
                                            <div className="location"><i class="fas fa-map-marker-alt"></i><span>Washington, D.C.</span></div>
                
                                            <li>Certificate in Journalism</li>
                                            <p>University <span className="of">of</span> Massachusetts-Amherst</p>
                                            <div className="date"><i class="far fa-calendar-alt"></i><span>2018</span></div>
                                            <div className="location"><i class="fas fa-map-marker-alt"></i><span>online</span></div>
                                            
                                            <li>B.S. Biology, Minor-Sociology</li>
                                            <p>St. John's University</p>
                                            <div className="date"><i class="far fa-calendar-alt"></i><span>2009</span></div>
                                            <div className="location"><i class="fas fa-map-marker-alt"></i><span>Queens, NY</span></div>      
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        <section className="colorblock-two"></section>
                    </div>
                <div id='skills-home'>
                <section className="colorblock-three">
                <div className="heading skills">
                            <h1 className="title skills">Skills</h1>
                                <div className="exp skills">
                                    <div className="exp-subtitle skills">
                                        <ul className='jobs one skills'>
                                            <div className="row">
                                                <div className='column-one'>
                                                    <li>Programming Languages</li>     
                                                    <p>JavaScript</p>
                                                </div> 

                                                <div className='column-two'>
                                                    <li>Authentication</li>
                                                    <p>Passport</p>
                                                    <p>Jason Web Token</p>
                                                </div>
                                            </div> 
                                            <hr/>                                         
                                        
                                            <div className="row">
                                                
                                                <div className='column-one'>
                                                    <li>Front End Development</li>
                                                    <p>HTML5</p>
                                                    <p>CSS3</p>
                                                    <p>Sass</p>
                                                    <p>Bootstrap</p>
                                                    <p>Materialize</p>
                                                    <p>API</p>
                                                    <p>Handlebars</p>
                                                    <p>React</p>
                                                    <p>Redux</p>
                                                </div> 

                                                <div className='column-two'>
                                                    <li>Back End Development</li>
                                                    <p>NodeJS</p>
                                                    <p>Express</p>
                                                    <p>MVC</p>
                                                    <p>RESTful APIs</p>
                                                    <p>Mongoose</p>
                                                    <p>AJAX</p>
                                                    <p>mLab</p>
                                                </div> 
                                            </div>
                                            <hr/>   

                                            {/* <hr/> */}
                                           
                                            <div className="row">
                                                <div className='column-one'>

                                                    <li>Testing</li>
                                                    <p>Enzyme</p>
                                                    <p>Jest</p>
                                                </div> 

                                                <div className='column-two'>
                                                    <li>Development Tools</li>
                                                    <p>Git</p>
                                                    <p>GitHub</p>
                                                    <p>Heroku</p>
                                                    <p>Wireframing</p>
                                                </div> 
                                            </div>
                                        </ul>                 
                            </div>
                        </div>
                    </div>
                </section>
                </div> 
                <div id='skills-home'>
                <section className="colorblock-three">
                    <section id='contact'>
                        <h1 className="title work">Work</h1>
    
                        <blockquote>“The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn and relearn.” -Alvin Toffler</blockquote>
                        <a href="https://www.linkedin.com/in/shakiraweir/"> <i class="fab fa-linkedin fa-3x"></i> </a>
                        <a href="https://github.com/shakiraweir"> <i class="fab fa-github fa-3x"></i> </a>
                        <a href="mailto: shakira.r.weir@gmail.com"> <i class="far fa-envelope fa-3x"></i> </a>
                    </section>
                </section>
                </div>
                <div id='skills-home'>
                <section className="colorblock-three">
                    <section id='contact'>
                        <h1 className="title">Contact</h1>
    
                        <blockquote>“The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn and relearn.” -Alvin Toffler</blockquote>
                        <a href="https://www.linkedin.com/in/shakiraweir/"> <i class="fab fa-linkedin fa-3x"></i> </a>
                        <a href="https://github.com/shakiraweir"> <i class="fab fa-github fa-3x"></i> </a>
                        <a href="mailto: shakira.r.weir@gmail.com"> <i class="far fa-envelope fa-3x"></i> </a>
                    </section>
                </section>
                </div>
            </div>
        )
    }
}

export default Resume;