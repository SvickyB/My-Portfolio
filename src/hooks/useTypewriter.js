// src/hooks/useTypewriter.js
import { useState, useEffect } from 'react';

export const useTypewriter = (texts, typingSpeed = 100, deletingSpeed = 50) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentString = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current => 
          currentString.substring(0, current.length + 1)
        );
        
        if (currentText === currentString) {
          setIsDeleting(true);
          setTimeout(() => {}, 1000); // Pause at end
        }
      } else {
        setCurrentText(current => 
          currentString.substring(0, current.length - 1)
        );
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((current) => (current + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed]);

  return currentText;
};