import React from 'react';
import TiltCard from '../components/TiltCard';
import { FaShoppingCart, FaTasks, FaHospital } from 'react-icons/fa';
import { SiNetflix } from 'react-icons/si';
import '../blocks.css';

const Projects = () => {
    const projects = [
        {
            title: 'Shopkart',
            tech: 'Django • Python • E-commerce',
            description: 'A fully functional E-commerce website featuring product browsing, cart management, and secure checkout integration.',
            link: 'https://github.com/Abhishek-R3914/Shopkart',
            icon: <FaShoppingCart />
        },
        {
            title: 'Netflix Clone',
            tech: 'React • UI/UX • API',
            description: 'A pixel-perfect recreation of the Netflix UI with dynamic content fetching and modern responsive design.',
            link: 'https://abhishek-r3914.github.io/Netflix/#/',
            icon: <SiNetflix color="#E50914" />
        },
        {
            title: 'Todo App',
            tech: 'React • State Management',
            description: 'A sleek and efficient task management application with real-time updates and local storage persistence.',
            link: 'https://abhishek-r3914.github.io/Todolist',
            icon: <FaTasks color="#00f3ff" />
        },
        {
            title: 'Hospital Management',
            tech: 'Django • Database • Admin',
            description: 'Comprehensive system for managing patient records, doctor appointments, and hospital administration.',
            link: 'https://abhishek3914.pythonanywhere.com',
            icon: <FaHospital color="#ff4d4d" />
        }
    ];

    return (
        <div className="page-container">
            <h1 className="page-title">Featured Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <TiltCard key={index} className="project-card-wrapper" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="project-card animated-border">
                            <div className="project-icon-top">
                                {project.icon}
                            </div>
                            <div className="card-content">
                                <h2>{project.title}</h2>
                                <span className="tech-tag">{project.tech}</span>
                                <p>{project.description}</p>
                                <a href={project.link} className="project-link">View Project</a>
                            </div>
                        </div>
                    </TiltCard>
                ))}
            </div>
        </div>
    );
};

export default Projects;
