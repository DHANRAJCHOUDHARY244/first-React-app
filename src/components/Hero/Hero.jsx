import React from 'react';
import Header from '../Header/Header.jsx';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import './Hero.css';
import NumberCounter from 'number-counter';
const Hero = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const transition = { type: 'spring', duration: 3 };
  return (
    <div className="hero">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />
        {/* the best add sec */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? '160px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>the best fitness club in the city</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>
        {/*figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={90} delay="4" preFix="+" />
            </span>
            <span>Expert Coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
              {' '}
              <NumberCounter end={50} start={0} delay="2" preFix="+" />
            </span>
            <span>Fitness Program</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          transition={transition}
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 Bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} className="hero_image" />
        <motion.img
          transition={transition}
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          src={hero_image_back}
          className="hero_image_back"
        />
        {/* calories */}
        <motion.div
          transition={transition}
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
