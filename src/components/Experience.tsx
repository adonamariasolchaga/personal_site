import React from 'react';
import './Experience.css';
import { content } from '../data/content';

interface ExperienceItemProps {
    job: typeof content.experience[0];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ job }) => {
    return (
        <div className="experience-card">
            <h3 className="exp-role">{job.role}</h3>
            <div className="exp-company">
                <span>{job.company}</span>
                <span className="exp-period">{job.period}</span>
            </div>

            <div className="exp-description">
                {job.description.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

const Experience: React.FC = () => {
    const { experience } = content;

    return (
        <section className="experience-container" id="experience">
            <h2 className="section-title">Experience</h2>
            <div className="experience-grid">
                {experience.map((job) => (
                    <ExperienceItem key={job.id} job={job} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
