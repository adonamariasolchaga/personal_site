import React from 'react';
import './Experience.css';
import { content } from '../data/content';

const Experience: React.FC = () => {
    const { experience } = content;

    return (
        <section className="experience-container" id="experience">
            <h2 className="section-title">Experience</h2>
            <div className="experience-grid">
                {experience.map((job) => (
                    <div key={job.id} className="experience-card">
                        <h3 className="exp-role">{job.role}</h3>
                        <div className="exp-company">
                            <span>{job.company}</span>
                            <span className="exp-period">{job.period}</span>
                        </div>
                        <p className="exp-description">{job.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
