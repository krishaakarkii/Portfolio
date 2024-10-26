// src/components/Home.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import './Home.css';

const phrases = ["Coding my way out of 'hello world!"];

const pageTransition = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
    transition: { duration: 0.6 }
};

const Home = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentPhrase = phrases[currentPhraseIndex];
            if (isDeleting) {
                if (charIndex > 0) {
                    setDisplayedText(currentPhrase.slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            } else {
                if (charIndex < currentPhrase.length) {
                    setDisplayedText(currentPhrase.slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setIsDeleting(true);
                }
            }
        };

        const typingSpeed = isDeleting ? 50 : 150;
        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, currentPhraseIndex]);

    return (
        <motion.section
            className="home"
            id="home"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
        >
            <ParticleBackground /> {/* Adds the cute particle background */}
            <div className="home-content">
                <p className="greeting">Hi, my name is</p>
                <h1 className="home-title">Krisha Karki.</h1>
                <h2 className="home-subtitle">{displayedText}</h2>
                <p className="home-description">
                    I'm a software engineering student specializing in creating efficient and user-friendly applications.
                </p>
                <a href="#projects" className="home-button">See My Work</a>
            </div>
        </motion.section>
    );
};

export default Home;
