import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../blocks.css';

const Navbar = ({ onNavigate }) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
    ];

    const handleLinkClick = (e, path) => {
        e.preventDefault();
        setIsOpen(false);
        if (location.pathname !== path) {
            onNavigate(path);
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-logo-icon" onClick={(e) => handleLinkClick(e, '/')}>
                AR
            </div>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.path}
                            onClick={(e) => handleLinkClick(e, link.path)}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
