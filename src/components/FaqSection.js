import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';
const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq variants={scrollReveal} ref={element} animate={controls}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">

                    <div className="answer">
                        <p>Lorem ipsum dolor, sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                </Toggle>
                <Toggle title="What Products do you offer?">

                    <div className="answer">
                        <p>Lorem ipsum dolor, sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                </Toggle>

                <Toggle title="Different Payment Methods ?">

                    <div className="answer">
                        <p>Lorem ipsum dolor, sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                </Toggle>

                <Toggle title="Daily Schedule">

                    <div className="answer">
                        <p>Lorem ipsum dolor, sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                </Toggle>
            </AnimateSharedLayout>

        </Faq>
    )
}

const Faq = styled(motion.div)`
   display: block;
   padding: 0rem 10rem; 
   min-height: 120vh;
  span {
    display: block;
    color: #23d997;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 4rem;
    color:white;
  }

  h4{
      color: white;
      font-size: 2rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;