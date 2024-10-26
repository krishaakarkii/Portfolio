// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [navBackground, setNavBackground] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setNavBackground(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (

        <nav className={`navbar ${navBackground ? 'scrolled' : ''}`}>


            {/* Hamburger icon on the right side */}
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Vertical menu that opens on click */}
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
