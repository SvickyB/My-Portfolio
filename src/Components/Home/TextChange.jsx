// src/components/home/TextChange.jsx
import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';

const TextChange = () => {
  const text = useTypewriter([
    "Hi, I'm Viramakali ",
    "aka, Vignesh ",
    "I'm a Tech Enthusiast "
  ]);

  return (
    <div className="min-h-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#465697] to-blue-400">
      {text}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TextChange;