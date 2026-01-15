import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import RobotLoader from './components/RobotLoader';
import ParticlesBackground from './components/ParticlesBackground';
import CursorFollower from './components/CursorFollower';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setLoading(true);
    // Show loader for 2 seconds then navigate
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <ParticlesBackground />
      {loading && <RobotLoader />}
      <Navbar onNavigate={handleNavigate} />
      <Routes>
        <Route path="/" element={<Home onNavigate={handleNavigate} />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
