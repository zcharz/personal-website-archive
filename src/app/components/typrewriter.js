'use client'
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (textIndex < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(textIndex));
        setTextIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(animationInterval);
      }
    }, 100); // Adjust the interval speed as needed
  
    return () => {
      clearInterval(animationInterval);
    };
  }, [text, textIndex]);

  return <div>{displayText}</div>;
};

export default Typewriter;