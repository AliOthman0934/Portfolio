import React from 'react';
import './Home.css';
import flower from '../../Assets/flower.svg';
import another from '../../Assets/another.svg';
import arrow from '../../Assets/arrow.svg';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className='home'>
        <div className="container">
            <div className="container1">
                <div className="txt-line" id='ali'>
                    <p >Ali</p>
                </div>
                <div className="txt-line line-bottom" id="othman">
                    <p >Othman</p>
                </div>
            </div>
            <div></div>
        </div>
        <div className="left-side-quote">
            <p>I specialize in full-stack web development, <br /> creating dynamic digital experiences that encompass both front-end <br /> and back-end technologies.</p>
        </div>
        <div className="container">
            <div></div>
            <div className="container1">
                <div className="txt-line" id="digital">
                    <p>Web</p>
                </div>
                <div className="txt-line line-bottom" id="designer">
                    <p >Developer</p>
                </div>
            </div>
        </div>
        <div className="flower-svg">
            <img src={flower} alt="" />
        </div>
        <div className="short-about">
            <div className="main-h1-short-about">
                <h1 className="main-short-about">
                    Shortly
                </h1>
                <h1 className='main-short-about'>
                    About
                </h1>
                <h1 className="main-short-about">
                    MySelf!
                </h1>
            </div>
            <div className="sub-main-p-short-about">
                <p className="sub-main-short-about">
                    I BELIEVE THAT EVERY PROJECT THAT I DO SHOULD HAVE AN OVERVALUE.
                </p>
                <p className="sub-main-short-about">
                    I ALWAYS TRY TO FIND THE OPTIMAL SOLUTION TO THE CLIENT'S TASK.
                </p>
            </div>
            <div className="another-svg">
                <img src={another} alt="" />
            </div>
        </div>
        <div className="my-skills-main-reel">
            <div className="my-skills-reel" id="skill-reel">
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
                <div className="reel-item">&nbsp; -- My skills</div>
            </div>
            <div className="skill-set-boxes">
                <div className="skill-set-box">
                    <h1 className="skill-set-box-h1">HTML5</h1>
                    <p className="skill-set-box-p">I mainly used to develop Website Markup</p>
                    <p>___</p>
                </div>
                <div className="skill-set-box">
                    <h1 className="skill-set-box-h1">CSS3</h1>
                    <p className="skill-set-box-p">I use this to style and bring design to browsers</p>
                    <p>___</p>
                </div>
                <div className="skill-set-box">
                    <h1 className="skill-set-box-h1">javascript</h1>
                    <p className="skill-set-box-p">With this technology i create visual effects and interaction and DOM elements</p>
                    <p>___</p>
                </div>
                <div className="skill-set-box">
                    <h1 className="skill-set-box-h1">React.js</h1>
                    <p className="skill-set-box-p">I loved it! I use it to create applications that have lot of reactivity</p>
                    <p>___</p>
                </div>
                <div className="skill-set-box">
                    <h1 className="skill-set-box-h1">Greensock - GSAP</h1>
                    <p className="skill-set-box-p">I used this as an animation library, The most loved ones!</p>
                    <p>___</p>
                </div>
                <div className="skill-set-box">
                    <h1 className="skill-set-box-h1">MySQL</h1>
                    <p className="skill-set-box-p">I used for storing, managing, and retrieving data in web applications.</p>
                    <p>___</p>
                </div>
                <div className="skill-set-box">
                    <h1 className="skill-set-box-h1">MongoDB</h1>
                    <p className="skill-set-box-p">I used for storing, retrieving, and managing structured and unstructured data.</p>
                    <p>___</p>
                </div>
                <div className="skill-set-box">
                    <h1 className="skill-set-box-h1">Sass</h1>
                    <p className="skill-set-box-p">I prefer this also instead of CSS beacouse of advance functionalities</p>
                    <p>___</p>
                </div>
                <div className="skill-set-box">
                    <h1 className="skill-set-box-h1">Node.js</h1>
                    <p className="skill-set-box-p">I use it to writing server scripting for applications</p>
                    <p>___</p>
                </div>

                <div className="skill-set-box">
                    <h1 className="skill-set-box-h1">Figma</h1>
                    <p className="skill-set-box-p">Use to create  werifram for any website design</p>
                    <p>___</p>
                </div>

                <div className="skill-set-box">
                    <h1 className="skill-set-box-h1">Illustrator</h1>
                    <p className="skill-set-box-p">I use to make creative svgs and illustrations for website</p>
                    <p>___</p>
                </div>

                <div className="skill-set-box">
                    <h1 className="skill-set-box-h1">GitHub</h1>
                    <p className="skill-set-box-p">I used for version control and collaboration in software development projects.</p>
                    <p>___</p>
                </div>
            </div>
            <div className="project-and-work">
                <h1>
                    <Link className="h1-project" to="/projects">
                        My Projects and Works <img src={arrow} alt="" />
                    </Link>
                </h1>
                <br />
                <p>Click me!</p>
            </div>
        </div>
        </div>
    )
}

export default Home;


