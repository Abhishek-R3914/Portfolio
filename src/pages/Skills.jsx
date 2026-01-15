import React from 'react';
import TiltCard from '../components/TiltCard';
import { FaPython, FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import '../blocks.css';

const Skills = () => {
    const skills = [
        { name: 'Python', level: '90%', icon: <FaPython color="#3776AB" /> },
        { name: 'React', level: '75%', icon: <FaReact color="#61DAFB" /> },
        { name: 'JavaScript', level: '50%', icon: <FaJs color="#F7DF1E" /> },
        { name: 'Django', level: '90%', icon: <SiDjango color="#092E20" /> },
        { name: 'HTML5', level: '100%', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS3', level: '100%', icon: <FaCss3Alt color="#1572B6" /> },
    ];

    return (
        <div className="page-container">
            <h1 className="page-title">My Skills</h1>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <TiltCard
                        key={skill.name}
                        className={`stagger-${(index % 6) + 1}`}
                        style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                    >
                        <div className="skill-card animated-border">
                            <div className="skill-icon-wrapper">
                                {skill.icon}
                            </div>
                            <h3>{skill.name}</h3>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: skill.level }}></div>
                            </div>
                        </div>
                    </TiltCard>
                ))}
            </div>
        </div>
    );
};

export default Skills;
