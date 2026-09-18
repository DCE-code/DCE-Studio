import React from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            style={{ scaleX: scrollYProgress }}
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 z-50 origin-left"
        />
    );
}