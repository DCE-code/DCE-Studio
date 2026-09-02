import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-emerald-400 pointer-events-none z-50 mix-blend-difference hidden md:block"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovered ? 2.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-500/50 pointer-events-none z-50 hidden md:block"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovered ? 1.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            />
        </>
    );
}
