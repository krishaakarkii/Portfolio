// src/App.js
import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground'; // Import the background component
import './App.css';

const App = () => {
    return (
        <div>
            <ParticleBackground /> {/* Render Three.js background */}
            <Navbar />
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
            <Footer />
        </div>
    );
};

export default App;
