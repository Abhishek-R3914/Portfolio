import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../blocks.css';

const Home = ({ onNavigate }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["Fullstack Developer", "React Enthusiast", "Python Expert", "Django Developer"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 80 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="hero-name glitch" data-text="ABHISHEK.R">
                    ABHISHEK<span className="highlight">.R</span>
                </h1>
                <h2 className="hero-role">
                    I am a <span className="typing-text">{text}</span>
                    <span className="cursor">|</span>
                </h2>
                <p className="hero-description">
                    A passionate fresher crafting digital experiences with
                    <span className="tech-highlight"> Python</span>,
                    <span className="tech-highlight"> React</span>, and
                    <span className="tech-highlight"> Django</span>.
                </p>
                <div className="hero-buttons">
                    <button onClick={() => onNavigate('/projects')} className="cta-button primary">View Work</button>
                    <div className="social-hero-icons">
                        <a href="https://github.com/Abhishek-R3914" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
                        <a href="https://linkedin.com/in/-abhishek-r-" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            <div className="home-image-section">
                <div className="image-wrapper">
                    <img src="/profile.jpg" alt="Abhishek R" className="profile-photo" />
                    <div className="circle-orbit"></div>
                    <div className="circle-orbit-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
