import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicking, setClicking] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseenter', onMouseEnter);
            document.addEventListener('mouseleave', onMouseLeave);
            document.addEventListener('mousedown', onMouseDown);
            document.addEventListener('mouseup', onMouseUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
        };

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseEnter = () => setHidden(false);
        const onMouseLeave = () => setHidden(true);
        const onMouseDown = () => setClicking(true);
        const onMouseUp = () => setClicking(false);

        addEventListeners();
        return () => removeEventListeners();
    }, []);

    return (
        <div
            style={{
                width: '40px',
                height: '40px',
                border: '1px solid var(--accent-color)',
                borderRadius: '50%',
                position: 'fixed',
                pointerEvents: 'none',
                left: 0,
                top: 0,
                transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${clicking ? 0.8 : 1})`,
                zIndex: 9999,
                opacity: hidden ? 0 : 1,
                transition: 'transform 0.1s ease-out',
                background: 'rgba(0, 243, 255, 0.1)',
                boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)'
            }}
        />
    );
};

export default CursorFollower;
