import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import babyCards from './babyCardData';
import '../cofounders.css';

const UserImage = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [showPie, setShowPie] = useState(false);
  const activeCardRef = useRef(null);

  const handleClick = (index) => {
    setActiveCardIndex(index);
    setShowPie(true);
  };

  useEffect(() => {
    let timeout;
    if (showPie) {
      timeout = setTimeout(() => {
        setShowPie(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [showPie]);

  useEffect(() => {
    if (activeCardRef.current) {
      const { width, height } = activeCardRef.current.getBoundingClientRect();
      const pieSize = Math.max(width, height) * 1.5;
      const orangeSize = Math.max(width, height) * 1;
      const whiteSize = Math.max(width, height) * 1;
      const piePositionTop = height / 2 - pieSize / 2;
      const orangePositionTop = height / 2 - pieSize / 3;
      const whitePositionTop = height / 2 - pieSize / 3;
      const piePositionLeft = width / 2 - pieSize / 2;
      const orangePositionLeft = width / 2 - pieSize / 3;
      const whitePositionLeft = width / 2 - pieSize / 3;
      document.documentElement.style.setProperty('--pie-size', `${pieSize}px`);
      document.documentElement.style.setProperty(
        '--orange-size',
        `${orangeSize}px`
      );
      document.documentElement.style.setProperty(
        '--white-size',
        `${whiteSize}px`
      );
      document.documentElement.style.setProperty(
        '--pie-position-top',
        `${piePositionTop}px`
      );
      document.documentElement.style.setProperty(
        '--orange-position-top',
        `${orangePositionTop}px`
      );
      document.documentElement.style.setProperty(
        '--white-position-top',
        `${whitePositionTop}px`
      );
      document.documentElement.style.setProperty(
        '--pie-position-left',
        `${piePositionLeft}px`
      );
      document.documentElement.style.setProperty(
        '--orange-position-left',
        `${orangePositionLeft}px`
      );
      document.documentElement.style.setProperty(
        '--white-position-left',
        `${whitePositionLeft}px`
      );
    }
  }, [activeCardIndex]);

  return (
    <div className='mainClass'>
      <div className='header'>
        <h1> 404 </h1>
        <h2>It looks like we couldn't find the page</h2>
        <p> To make it up to you, please choose a co-founder to pie with</p>
      </div>
      <div className='bodyDiv'>
        {babyCards.map((card, index) => (
          <div
            key={card.id}
            className='bodyCardDiv'
            ref={index === activeCardIndex ? activeCardRef : null}
          >
            <motion.img
              src={card.imageSrc}
              alt={card.alt}
              onClick={() => handleClick(index)}
              whileHover={{ scale: 1.2 }}
              className='cardImage'
            />
            <div className='cardName'>{card.name}</div>
            <AnimatePresence>
              {showPie && activeCardIndex === index && (
                <div>
                  <motion.img
                    key='pie'
                    src='https://i.ibb.co/y4kv09y/pie1-removebg-preview.png'
                    alt='orange'
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 200, transition: { delay: 1 } }}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: 'absolute',
                      top: 'var(--pie-position-top)',
                      left: 'var(--pie-position-left)',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 2,
                      width: 'var(--pie-size)',
                      height: 'var(--pie-size)'
                    }}
                  />
                  <motion.img
                    key='pie'
                    src='https://i.ibb.co/sCmdwD5/orange-removebg-preview.png'
                    alt='orange'
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 200, transition: { delay: 2 } }}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: 'absolute',
                      top: 'var(--orange-position-top)',
                      left: 'var(--orange-position-left)',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 1,
                      width: 'var(--orange-size)',
                      height: 'var(--orange-size)'
                    }}
                  />
                  <motion.img
                    key='pie'
                    src='https://i.ibb.co/xq8frjq/white-plate-removebg-preview.png'
                    alt='white'
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 200, transition: { delay: 3 } }}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: 'absolute',
                      top: 'var(--white-position-top)',
                      left: 'var(--white-position-left)',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 0.5,
                      width: 'var(--white-size)',
                      height: 'var(--white-size)'
                    }}
                  />
                </div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserImage;
