import React, { useEffect, useRef } from 'react'
import './Home.css'
import Header from '../Header/Header';
// import SAM from "../Assets/svgviewer-output.svg"
// import another from '../Assets/another.svg'
import arrow from '../../Assets/arrow.svg'
import { Link } from 'react-router-dom';
import GetInTouch from '../GetInTouch/GetInTouch';
import Footer from '../Footer/Footer';
import gsap from 'gsap';
function Home() {
    let text1 = useRef(null)
    let text2 = useRef(null)
    let text3 = useRef(null)
    let text4 = useRef(null)
    let p1 = useRef(null)

    const timeline_home = gsap.timeline();
    useEffect(() => {
        timeline_home.from([text1, text2, text3, text4], {
            duration: 1,
            skewY: 15,
            y: 400,
            stagger: {
                amount: .2
            }
        }, "-=1.2")
        timeline_home.from(p1, {
            duration: .6,
            x: -100,
            delay: .2,
            opacity: 0
        })
    }, [timeline_home])
    return (
        <div className='home'>
            <Header timeline={timeline_home} />
            <div className='main-container'>
                <div className="container">
                    <div className="container1">
                        <div className="txt-line" id='taimoor'>
                            <p ref={el => text1 = el}>Ali</p>
                        </div>
                        <div className="txt-line line-bottom" id="shahzada">
                            <p ref={el => text2 = el}>Othman</p>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="left-side-quote">
                    <p ref={el => p1 = el}> I am a full-stack web developer <br /> who creates dynamic digital experiences, <br />employing my architectural background.</p>
                </div>
                <div className="container">
                    <div></div>
                    <div className="container1">
                        <div className="txt-line" id="digital">
                            <p ref={el => text3 = el}>Web</p>
                        </div>
                        <div className="txt-line line-bottom" id="designer">
                            <p ref={el => text4 = el}>Developer</p>
                        </div>
                    </div>
                </div>
                {/* <div className="flower-svg">
                    <img src={SAM} alt="" />
                </div> */}
            </div>
            
            <div className="my-skills-main-reel">
                <div className="my-skills-reel" id="skill-reel">
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                    <div className="reel-item">&nbsp;       Skills</div>
                </div>
                <div className="skill-set-boxes">
                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">HTML5</h1>
                        <p className="skill-set-box-p">I mainly used to develop Website Markup</p>
                    </div>
                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">CSS</h1>
                        <p className="skill-set-box-p">I use this to style and bring design to browsers</p>
                    </div>
                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1"> CLI</h1>
                        <p className="skill-set-box-p">I use this to have flexible access to system functions and software features</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">GitHub</h1>
                        <p className="skill-set-box-p">I used for version control and collaboration in software development projects.</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">javascript</h1>
                        <p className="skill-set-box-p">With this technology I create visual effects and interaction and DOM elements</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">React.js</h1>
                        <p className="skill-set-box-p">I use it to create applications that have lot of reactivity</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">Greensock - GSAP</h1>
                        <p className="skill-set-box-p">I used this as an animation library!</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">Node.js</h1>
                        <p className="skill-set-box-p">I use it to writing server scripting for applications</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">MySQL</h1>
                        <p className="skill-set-box-p">I used for storing, managing, and retrieving data in web applications.</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">MongoDB</h1>
                        <p className="skill-set-box-p">I used for storing, retrieving, and managing structured and unstructured data.</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">Sass</h1>
                        <p className="skill-set-box-p">I prefer this also instead of CSS beacouse of advance functionalities</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">Figma</h1>
                        <p className="skill-set-box-p">Use to create  werifram for any website design</p>
                    </div>

                    <div className="skill-set-box">
                        <h1 className="skill-set-box-h1">Illustrator</h1>
                        <p className="skill-set-box-p">I use to make creative svgs and illustrations for website</p>
                    </div>
                </div>
                
                <div className="project-and-work">
                    <h1>
                        <Link className="h1-project" to="/projects">
                            Check Out My Projects <img src={arrow} alt="" />
                        </Link>
                    </h1>
                    <hr className='line' />
                    <br />

                </div>
                <GetInTouch />
                <Footer />
            </div>
        </div>
    )
}

export default Home
