import React, { useEffect, useRef } from 'react'
import Header from '../Header/Header'
import './Contact.css'
import Footer from '../Footer/Footer'
import flower from '../../Assets/svgviewer-output.svg'
import gsap from 'gsap'
function Contact() {
    const timeline_contact = gsap.timeline();
    let text1 = useRef(null);
    useEffect(() => {
        timeline_contact.from(text1, {
            duration: 1,
            skewY: 10,
            y: 500,
            stagger: {
                amount: .4
            },
            opacity: 0
        }, "-=1")
    })
    return (
        <div>
            <Header timeline={timeline_contact} />
            <div className="contact-page">
                <div className="contact-page-container">
                    <h1 ref={el => text1 = el}>
                        Let's talk! <img src={flower} alt="" />
                    </h1>

                </div>
                    <div className='contact-now'>
                        <ul>
                            <li><a href='mailto:alioth840@gmail.com'>EMAIL: alioth840@gmail.com</a></li>
                            <li><a href='#1'>PHONE: +31 6 38 97 01 70</a></li>
                        </ul>
                    </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
