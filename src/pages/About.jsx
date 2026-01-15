import React from 'react';
import TiltCard from '../components/TiltCard';
import { FaCode, FaCoffee, FaProjectDiagram, FaUserGraduate } from 'react-icons/fa';
import '../blocks.css';

const About = () => {
    return (
        <div className="page-container about-page">
            <h1 className="page-title">About Me</h1>

            <div className="about-content">
                <div className="about-text-section">
                    <TiltCard className="text-card-wrapper">
                        <div className="content-card animated-border">
                            <h2 className="section-subtitle">Bio</h2>
                            <p className="animate-text" style={{ animationDelay: '0.2s' }}>
                                I'm <span className="highlight">Abhishek.R</span>, a detail-oriented
                                <span className="tech-highlight"> Fullstack Developer</span> based in India.
                                My passion lies in creating seamless, user-centric web applications that solve real-world problems.
                            </p>
                            <br />
                            <p className="animate-text" style={{ animationDelay: '0.4s' }}>
                                With a strong foundation in <span className="tech-highlight">Python & Django</span> backend development
                                and <span className="tech-highlight">React</span> frontend magic, I bring ideas to life from concept to deployment.
                            </p>
                            <div className="education-box">
                                <FaUserGraduate className="edu-icon" />
                                <div>
                                    <h4>Education</h4>
                                    <p>B.Tech in Computer Science</p>
                                    <span className="year">2022 - 2026</span>
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                </div>

                <div className="about-stats-section">
                    <div className="stats-grid">
                        <TiltCard className="stat-card-wrapper stagger-1">
                            <div className="stat-card">
                                <FaCode className="stat-icon" />
                                <h3>4</h3>
                                <p>Projects Built</p>
                            </div>
                        </TiltCard>

                        <TiltCard className="stat-card-wrapper stagger-2">
                            <div className="stat-card">
                                <FaProjectDiagram className="stat-icon" />
                                <h3>2+</h3>
                                <p>Years Coding</p>
                            </div>
                        </TiltCard>

                        <TiltCard className="stat-card-wrapper stagger-3">
                            <div className="stat-card">
                                <FaCoffee className="stat-icon" />
                                <h3>Inf</h3>
                                <p>Coffee Consumed</p>
                            </div>
                        </TiltCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
