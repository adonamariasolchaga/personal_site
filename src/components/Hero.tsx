import React from 'react';
import './Hero.css';
import { content } from '../data/content';

const Hero: React.FC = () => {
    const { name, role, tagline, social } = content.hero;

    return (
        <section className="hero-container">
            <div className="hero-content">
                <h1 className="hero-name">{name}</h1>
                <h2 className="hero-role">{role}</h2>
                <p className="hero-tagline">{tagline}</p>

                <div className="hero-actions">
                    <a href="#contact" className="primary-btn">Contact Me</a>
                    <a href={social.resume} download className="primary-btn" style={{ background: 'transparent', border: '2px solid var(--accent-primary)', color: 'var(--accent-primary)', boxShadow: 'none' }}>Download CV</a>
                </div>

                <div className="social-links">
                    <a href={social.github} target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                    <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                    <a href={social.email} className="social-link">Email</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
