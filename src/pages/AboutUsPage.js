import React from 'react';
// Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';
const AboutUsPage = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <ScrollTop />
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    )
}

export default AboutUsPage;