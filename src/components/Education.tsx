import React from 'react';
import './Education.css';
import { content } from '../data/content';

const Education: React.FC = () => {
    const { education } = content;

    return (
        <section className="education-container" id="education">
            <h2 className="section-title">Education</h2>
            <div className="education-grid">
                {education.map((edu) => (
                    <div key={edu.id} className="education-card">
                        <h3 className="edu-degree">{edu.degree}</h3>
                        <div className="edu-school">{edu.school}</div>
                        <span className="edu-period">{edu.period}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
