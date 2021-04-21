import React from 'react';
import home1 from '../img/home1.png';
import Waves from './Waves';
// // Style
// import styled from 'styled-components';
import { About, Description, Image, Hide } from './styles';
// Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import ScrollTop from '../components/ScrollTop';
const AboutSection = () => {



    return (
        <About>
            <ScrollTop />
            <Description>
                <motion.div className="title" >
                    <Hide>
                        <motion.h2 variants={titleAnim} initial="hidden" animate="show" >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photograpgy or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img src={home1} alt="camera guy" variants={photoAnim} />
            </Image>
            <Waves />
        </About>
    )

}



export default AboutSection;