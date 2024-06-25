import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-container">
                    <div className="message-for-users">
                        <span>
                            Please contact me in any way <br /> you like
                        </span>
                    </div>

                    <div className="social-links">
                        <div className="social-links-h">
                            Contact
                        </div>
                        <div className="social-links-items">
                            <a href="mailto:alioth840@gmail.com">Mail</a>
                            <a href="#1">Whatsapp</a>
                            <a href="#3">+31 6 38 97 01 70</a>
                        </div>
                    </div>
                    
                    <div className="social-links">
                        <div className="social-links-h">
                            Social
                        </div>
                        <div className="social-links-items">
                            <a href="https://github.com/AliOthman0934">Github</a>
                            <a href="https://www.linkedin.com/in/ali-othman-1199b4251/">LinkedIn</a>
                        </div>
                    </div>
                    {/* <div className="social-links">
                        <div className="social-links-h">
                            Contact
                        </div>
                        <div className="social-links-items">
                            <a href="mailto:alioth840@gmail.com">Mail</a>
                            <a href="#1">Whatsapp</a>
                            <a href="#3">+31 6 38 97 01 70</a>
                        </div>
                    </div> */}
                    <div className="footer-menu social-links">
                        <div className="footer-menu-h social-links-h">
                            Menu
                        </div>
                        <div className="footer-menu-links social-links-items">
                            <Link className="footer-menu-links-items">Home</Link>
                            <Link className="footer-menu-links-items">About</Link>
                            <Link className="footer-menu-links-items">Projects</Link>
                            <Link className="footer-menu-links-items">Contact</Link>
                        </div>
                    </div>
                </div>
                {/* <div className="footer-bottom">
                    <div className="left-footer-bottom">
                        <p>The Netherlands</p>
                    </div>
                    <div className="right-footer-bottom">
                        <p>2024. Ali Othman. ALL RIGHT RESERVED</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Footer
