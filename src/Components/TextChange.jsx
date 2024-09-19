import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I'm Viramakali ", "Aka, Vignesh ", "I'm, Tech Enthusiast "];
  const [currenText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current text
      setCurrentText(texts[index].substring(0, endValue));
      
      // Handle forward typing and erasing logic
      if (isForward) {
        if (endValue < texts[index].length) {
          setEndValue((prev) => prev + 1);
        } else {
          // When the full text is displayed, switch to erasing
          setIsForward(false);
        }
      } else {
        if (endValue > 0) {
          setEndValue((prev) => prev - 1);
        } else {
          // When fully erased, move to the next text
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 100); // Adjust timing if needed

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currenText}</div>;
};

export default TextChange;
