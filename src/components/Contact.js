// src/components/Contact.js

import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const [status, setStatus] = useState('');

    // Trigger animation when the section is in view
    const { ref, inView } = useInView({
        triggerOnce: false, // Change to true to only animate the first time
        threshold: 0.2,
    });

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents page reload

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                headers: { 'Accept': 'application/json' },
                body: data,
            });

            if (response.ok) {
                form.reset();
                setStatus('Message sent successfully!');
            } else {
                setStatus('Oops! There was a problem sending your message.');
            }
        } catch (error) {
            setStatus('Oops! There was a problem sending your message.');
        }
    };

    return (
        <section className={`contact ${inView ? 'fade-in' : ''}`} id="contact" ref={ref}>
            <div className="contact-content">
                <h2 className="contact-title">Get in Touch</h2>
                <p>If you'd like to discuss a project or just say hello, feel free to reach out!</p>

                <div className="contact-links">
                    <a href="https://www.linkedin.com/in/krisha-karki-98b038254/" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/krishaakarkii" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <FaGithub />
                    </a>
                    <a href="mailto:karkikrisha374@gmail.com" className="contact-icon">
                        <FaEnvelope />
                    </a>
                </div>

                <form className="contact-form" action="https://formspree.io/f/mpwzqwoo" method="POST" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>

                {status && <p className="status-message">{status}</p>}
            </div>
        </section>
    );
};

export default Contact;
