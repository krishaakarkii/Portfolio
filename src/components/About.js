import React from 'react';
import './About.css';
import { FaJava, FaReact, FaPython, FaDatabase, FaDocker, FaGitAlt } from 'react-icons/fa';
import { DiJavascript1, DiMongodb, DiNodejsSmall } from 'react-icons/di';

import { useInView } from 'react-intersection-observer';

const About = () => {
    // Trigger animation every time the section comes into view
    const { ref, inView } = useInView({
        triggerOnce: false, // Changed to false to re-trigger each time
        threshold: 0.2, // Adjust visibility threshold as needed
    });

    return (
        <section className={`about ${inView ? 'fade-in' : ''}`} id="about" ref={ref}>
            <div className="about-content">
                <h2 className="about-title">About Me</h2>
                <p className="about-description">
                    I'm Krisha Karki, a software developer passionate about building efficient, scalable, and user-friendly applications. I specialize in both front-end and back-end development using modern tools and technologies.
                </p>
                <p className="about-description">
                    I have experience in web and mobile app development, data analysis, and DevOps. I enjoy solving complex problems, optimizing performance, and creating innovative solutions.
                </p>

                <h3 className="skills-title">Technical Skills</h3>

                {/* Skills Section */}
                <div className="skills-section">
                    <div className="skill">
                        <FaJava className="skill-icon" />
                        <span>Java</span>
                        <div className="progress-bar"><div className="progress java"></div></div>
                    </div>
                    <div className="skill">
                        <DiJavascript1 className="skill-icon" />
                        <span>JavaScript</span>
                        <div className="progress-bar"><div className="progress javascript"></div></div>
                    </div>
                    <div className="skill">
                        <FaPython className="skill-icon" />
                        <span>Python</span>
                        <div className="progress-bar"><div className="progress python"></div></div>
                    </div>
                    <div className="skill">
                        <FaReact className="skill-icon" />
                        <span>React</span>
                        <div className="progress-bar"><div className="progress react"></div></div>
                    </div>
                    <div className="skill">
                        <FaDatabase className="skill-icon" />
                        <span>SQL</span>
                        <div className="progress-bar"><div className="progress sql"></div></div>
                    </div>
                    <div className="skill">
                        <DiMongodb className="skill-icon" />
                        <span>MongoDB</span>
                        <div className="progress-bar"><div className="progress mongodb"></div></div>
                    </div>
                    <div className="skill">
                        <DiNodejsSmall className="skill-icon" />
                        <span>Node.js</span>
                        <div className="progress-bar"><div className="progress nodejs"></div></div>
                    </div>
                    <div className="skill">
                        <FaDocker className="skill-icon" />
                        <span>Docker</span>
                        <div className="progress-bar"><div className="progress docker"></div></div>
                    </div>
                    <div className="skill">
                        <FaGitAlt className="skill-icon" />
                        <span>Git</span>
                        <div className="progress-bar"><div className="progress git"></div></div>
                    </div>

                </div>

                <h3 className="tools-title">Tools & Methodologies</h3>
                <p className="tools-description">
                    I am proficient in using **Docker** for containerization, **Git** for version control, and **Jira** for project management.
                    My projects follow **Agile/Scrum methodologies**, ensuring iterative development and fast delivery.
                    I also use **Figma** for UI/UX prototyping and collaborate effectively in teams using modern DevOps practices.
                </p>
            </div>
        </section>
    );
};

export default About;
