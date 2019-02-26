import React, { Component } from 'react';
import './Resume.css'

class Resume extends Component {
    
    render() {
        const style= {
            color: '#293d3d'
        }
        return (
            <div>
                <div className="home">
                    
                    <section className="colorblock-one"></section>
                        <div className="heading">
                            <h1 className="title-exp">Experience</h1>
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
                                            <p>University 
                                                <span id="of"> of</span> Massachusetts-Amherst</p>
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
                <div className="heading-skills">
                            <h1 className="title skills">Skills</h1>
                                <div className="exp skills">
                                    <div className="exp-subtitle skills">
                                        <ul className='jobs one skills'>
                                            <div className="row">
                                                <div className='column-one'>
                                                    <p>Programming Languages</p>     
                                                    <div className="skill">
                                                        <div>
                                                        <li>JavaScript</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>

                                                </div> 

                                                <div className='column-two'>
                                                    <p>Authentication</p>
                                                    
                                                    <div className="skill">
                                                        <div>
                                                        <li>Passport</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>

                                                    
                                                    <div className="skill">
                                                        <div>
                                                        <li>Jason Web Token</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div> 
                                            <hr/>                                         
                                        
                                            <div className="row">
                                                
                                                <div className='column-one'>
                                                    <p>Front End Development</p>
                                                    <div className="skill">
                                                        <div>
                                                        <li>HTML5</li>
                                                        </div>
                                                        
                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        </div>
                                                    </div>

                                                    <div className="skill">
                                                        <div>
                                                        <li>CSS3</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" ></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>

                                                    <div className="skill">
                                                        <div>
                                                        <li>Sass/SCSS</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>


                                                    <div className="skill">
                                                        <div>
                                                        <li>Bootstrap</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>


                                                    <div className="skill">
                                                        <div>
                                                        <li>Materialize</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>


                                                    <div className="skill">
                                                        <div>
                                                        <li>API</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>


                                                    <div className="skill">
                                                        <div>
                                                        <li>Handlebars</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"style={style}> </i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>


                                                    <div className="skill">
                                                        <div>
                                                        <li>React</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>


                                                    {/* <div className="skill">
                                                        <div>
                                                        <li>Redux</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div> */}
                                                </div> 

                                                <div className='column-two'>
                                                    <p>Back End Development</p>

                                                    <div className="skill">
                                                        <div>
                                                        <li>NodeJS</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>      

                                                    <div className="skill">
                                                        <div>
                                                        <li>Express</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="skill">
                                                        <div>
                                                        <li>MVC</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="skill">
                                                        <div>
                                                        <li>RESTful APIs</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" > </i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="skill">
                                                        <div>
                                                        <li>Mongoose</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="skill">
                                                        <div>
                                                        <li>AJAX</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="skill">
                                                        <div>
                                                        <li>mLab</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>
                                            <hr/>   
                                           
                                            <div className="row">
                                                <div className='column-one'>

                                                    <p>Testing</p>
                                                    
                                                    <div className="skill">
                                                        <div>
                                                        <li>Enzyme</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" ></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>

                                                    
                                                    <div className="skill">
                                                        <div>
                                                        <li>Jest</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                </div> 

                                                <div className='column-two'>
                                                    <p>Development Tools</p>

                                                    <div className="skill">
                                                        <div>
                                                        <li>Git</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        </div>
                                                    </div>  

                                                    <div className="skill">
                                                        <div>
                                                        <li>GitHub</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"style={style} ></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>

                                                    
                                                    {/* <div className="skill">
                                                        <div>
                                                        <li>Heroku</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div> */}

                                                    
                                                    <div className="skill">
                                                        <div>
                                                        <li>Wireframing</li>
                                                        </div>

                                                        <div>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star" style={style}></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>

                                        </ul>                 
                            </div>
                        </div>
                    </div>
                </section>
                </div> 
                <div id='skills-home'>
                <section className="colorblock-four">
                    <section id='contact'>
                        <h1 className="title work" id='projects'>Work</h1>
                        <div className="project-container">
                            <div className='project-display'>
                                <img src="https://i.imgur.com/cMWXclQ.png?1" alt="Hangman Entry Page" width='400' height='400' />
                                <h3>Hangman</h3>
                                <p>JavaScript | HTML | Sass | Pug | Parcel </p>
                            </div> 

                            <div className='project-display'>
                                <img src="https://i.imgur.com/nXDMoeU.png?1" alt="Hangman Entry Page" width='400' height='400'/>
                                <h3>Pearls of Wisdom</h3>
                                <p>JavaScript | HTML | CSS | MongoDB | Express |  NodeJS | Handlebars | Passport | API</p>
                            </div>

                            <div className='project-display'>
                                <img src="https://i.imgur.com/NuhBEKB.png" alt="Hangman Entry Page"
                                width='400' height='400' />
                                <h3>The Fun Budget Tool</h3>
                                <p>JavaScript | JSX | React | MongoDB | Express | NodeJS | Jason Web Token </p>
                            </div>
                        </div>

                    </section>

                </section>
                </div>
                <div id='skills-home'>
                <section className="colorblock-three">
                    <section id='contact'>
                        <h1 className="title contact">Contact</h1>
    
                        <blockquote>“The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn and relearn.” -Alvin Toffler</blockquote>
                        <div>
                            <a href="https://www.linkedin.com/in/shakiraweir/" target='_blank' rel='noopener noreferrer'> <i class="fab fa-linkedin fa-3x"></i> </a>
                            <a href="https://github.com/shakiraweir" target='_blank' rel='noopener noreferrer'> <i class="fab fa-github fa-3x"></i> </a>
                            <a href="mailto: shakira.r.weir@gmail.com"> <i class="far fa-envelope fa-3x"></i> </a>
                        </div>
                    </section>
                </section>
                </div>
            </div>
        )
    }
}

export default Resume;