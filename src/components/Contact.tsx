import React from 'react';
import './Contact.css';
import { content } from '../data/content';

const Contact: React.FC = () => {
    const { social } = content.hero;

    return (
        <section className="contact-container" id="contact">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-text">
                Feel free to reach out for collaborations or just a friendly hello!
            </p>

            <div className="contact-links">
                <a href={social.email} className="contact-item">
                    <span>Email Me</span>
                </a>
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                    <span>LinkedIn</span>
                </a>
                <a href={social.github} target="_blank" rel="noopener noreferrer" className="contact-item">
                    <span>GitHub</span>
                </a>
            </div>

            <footer className="footer-credits">
                <p>© {new Date().getFullYear()} {content.hero.name}. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
