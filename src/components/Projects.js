// src/components/Projects.js

import React from 'react';
import './Projects.css';
import { FaTerminal } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const projectData = [
    {
        title: "Password Manager CLI",
        description: "A CLI tool to manage passwords securely.",
        link: "https://github.com/krishaakarkii/Password-manager-cli",
        icon: <FaTerminal />
    }
];

const Projects = () => {
    // Trigger animation when the section is in view
    const { ref, inView } = useInView({
        triggerOnce: false, // Change to true if you only want it to animate the first time
        threshold: 0.2,
    });

    return (
        <section className={`projects ${inView ? 'fade-in' : ''}`} id="projects" ref={ref}>
            <div className="projects-content">
                <h2 className="projects-title">Projects</h2>
                <div className="project-cards">
                    {projectData.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-icon">{project.icon}</div>
                            <div className="project-overlay">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
