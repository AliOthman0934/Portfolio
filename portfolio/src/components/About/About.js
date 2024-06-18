import React, {useEffect, useRef} from 'react'
import Footer from '../Footer/Footer'
import GetInTouch from '../GetInTouch/GetInTouch'
import Header from '../Header/Header'
import './About.css'
import gsap from 'gsap'
import flower from '../../Assets/svgviewer-output.svg'
function About() {
    let text1 = useRef(null)
    let text2 = useRef(null)
    let image = useRef(null)
    let p1 = useRef(null)
    const timeline_about = gsap.timeline();
    useEffect(() => {
        timeline_about.from([text1, text2], {
            duration: .8,
            y: 500,
            skewY: 10,
            stagger: {
                amount: .4
            }
        }, "-=.5")
        timeline_about.from(image, {
            duration: 1.5,
            y: 300,
            delay: .2,
            opacity: 0
        }, "-=.5")
        timeline_about.from(p1, {
            duration: .5,
            x: 200,
            skewX: 10,
            opacity: 0
        })
    })
    return (
        <>
        <div>
            <div className="about">
                <Header timeline={timeline_about}/>
                <div className="about-container">
                    <div className="container-text">
                        <div className="container-inner-text1">
                            <p ref={el => text1 = el}>
                                Ali
                            </p>
                        </div>
                        <div className="container-inner-text2">
                            <p ref={el => text2 = el}>
                                Othman
                            </p>
                        </div>
                    </div>
                    <di  ref={el => p1 = el}v className="container-quote container-quote1">
                        I create sites and <br /> applications that cause <br /> pleasant emotions
                    </di>
                    <div className="container-quote container-quote2">
                        I specialize in interaction <br /> design, experience websites <br /> and applications
                    </div>
                    <div className="container-image"  ref={el => image = el}></div>
                </div>
                <div className="about-container2">
                    <div className="about-container2-heading">
                        <div className="about-text-lower">
                            <p>Full Stack</p>
                        </div>

                        <div className="about-text-lower">
                            <p>&nbsp;Web Developer&nbsp;&nbsp;&</p>
                        </div>
                        <div className="about-text-lower">
                            <p>Architecture Enthusiast</p>
                        </div>
                    </div>

                    

                    <div className="about-container2-p">
                    </div>
                    <div className="about-container-my-strength">
                        <div className="about-text-lower">
                            <p>My Strengths</p>
                        </div>
                    </div>
                    <div className="about-container2-strength-p">
                        <p className="about-container2-p-right">
                        I BELIEVE THAT EVERY PROJECT THAT I DO SHOULD HAVE AN OVERVALUE.<br />I ALWAYS TRY TO FIND THE OPTIMAL SOLUTION TO THE CLIENT'S TASK.
                        </p>
                        
                    </div>
                    <div className="about-container-flower">
                        <img src={flower} alt="" />
                    </div>
                </div>
                <div className="about-footer">
                    <GetInTouch />
                    <Footer />
                </div>
            </div>
        </div>
        
        </>
    )
}

export default About
