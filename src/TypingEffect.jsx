import { useEffect, useState } from "react";

const TypingEffect = () => {
    const [text, setText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const fullText = "Welcome to my portfolio"; 
  
    useEffect(() => {
      const typeNextLetter = () => {
        if (currentIndex < fullText.length) {
          setText((prevText) => prevText + fullText[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      };
  
      const typingInterval = setInterval(typeNextLetter, 30);
  
      return () => clearInterval(typingInterval);
    }, [currentIndex, fullText]);
  
    return (
      <div className="terminal text-light">
        <div className="cursor"></div>
        <div className="typing-text">{text}</div>
      </div>
    );
  };
  
  export default TypingEffect;