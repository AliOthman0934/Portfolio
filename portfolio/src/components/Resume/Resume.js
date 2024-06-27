import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Resume.css";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
    useEffect(() => {
        gsap.utils.toArray(".timeline-row").forEach((row, i) => {
            gsap.fromTo(
                row,
                {
                    opacity: 0,
                    y: 100,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: row,
                        start: "top 80%",
                        end: "bottom 60%",
                        toggleActions: "play none none reverse",
                        markers: false, // set to true if you want to see markers
                    },
                }
            );
        });
    }, []);

    return (
        <div className="timeline-wrapper">
            <div className="center-line">
                <a href="#1" className="scroll-icon">
                    <i className="bi bi-caret-up"></i>
                </a>
            </div>
            <div className="timeline-row timeline-row-1">
                <section>
                    <i className="icon bi bi-house"></i>
                    <div className="details">
                        <span className="title">Full Stack Web Development training</span>

                    </div>
                    <div className="title-date">
                        <span className="title">Hack Your Future</span>
                        <span className="date">10/2023 - 6/2024</span>
                    </div>
                    <p>
                    The HYF curriculum equipped me with front-end and back-end web development skills. I improved problem-solving, communication, and organizational skills through self-study, mentor feedback, and projects. 
                    I enjoy coding and creating dynamic user experiences.
                    </p>
                </section>
            </div>

            <div className="timeline-row timeline-row-2">
                <section>
                    <i className="icon bi bi-star"></i>
                    <div className="details">
                        <span className="title">Bachelor of Architecture</span>
                    </div>
                    <div className="title-date">
                        <span className="title">Cordoba Private University</span>
                        <span className="date">2016 - 2019</span>
                    </div>
                    <p>
                    I earned a Bachelor of Architecture from Cordoba Private University in Qamishli, Syria. The program honed my design, technical, and analytical skills, emphasizing sustainable architecture and practical projects,
                    preparing me for a professional architectural career.
                    </p>
                </section>
            </div>



            <div className="timeline-row timeline-row-1">
                <section>
                    <i className="icon bi bi-send"></i>
                    <div className="details">
                        <span className="title"> Engineering Assistant</span>
                    </div>

                    <div className="title-date">
                        <span className="title">Amar Constructions</span>
                        <span className="date">06/2018 - 11/2019</span>
                    </div>

                    <p>
                    Overseeing construction ensures compliance with quality standards and material availability. Managing project planning, design, development, and evaluation.
                    Also serving as the primary contact for construction staff and conducting inventory inspections.
                    </p>
                </section>
            </div>

            <div className="timeline-row timeline-row-2">
                <section>
                    <i className="icon bi bi-globe"></i>
                    <div className="details">
                        <span className="title">Receptionist (volunteer)</span>
                    </div>

                    <div className="title-date">
                        <span className="title">Samos Volunteers</span>
                        <span className="date">01/2021 - 07/2021</span>
                    </div>

                    <p>
                        SV offers outreach, laundry service, psychosocial support, and a community centre for displaced individuals in Samos camp. As an interpreter, I facilitated workshops for non-English speakers,
                        enhancing their accessibility and participation.
                    </p>
                </section>
            </div>

            <div className="timeline-row timeline-row-1">
                <section>
                    <i className="icon bi bi-rocket"></i>
                    <div className="details">
                        <span className="title">Shop Owner</span>
                    </div>
                    <div className="title-date">
                        <span className="title">Ali shoes</span>
                        <span className="date">09/2017 - 11/2019</span>
                    </div>
                    <p>
                    Managing supplier relationships and finances, including cash flow. Sourcing products and curating assortments based on trends. Overseeing inventory management and fostering lasting customer relationships.
                    Ensuring efficient operations and maximizing customer satisfaction.
                    </p>
                </section>
            </div>

            <div className="timeline-row timeline-row-2">
                <section>
                    <i className="icon bi bi-map"></i>
                    <div className="details">
                        <span className="title">Merchandiser</span>
                    </div>
                    <div className="title-date">
                        <span className="title">Albert Heijn</span>
                        <span className="date">10/2022 - 11/2023</span>
                    </div>
                    <p>
                    Responsible for product appearance and supply in a fast-paced environment, working closely with colleagues. 
                    Interacted with customers, assisting them in finding products and answering questions, ensuring a positive shopping experience.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Resume;
