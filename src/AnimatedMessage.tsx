import React, { useState, useEffect, useRef } from "react";
import "./App.css";

interface AnimateMessageProps {
  name: string;
  time: number;
  randomness: number;
  isRunning: boolean;
  isPaused: boolean;
}

const AnimateMessage: React.FC<AnimateMessageProps> = ({
  name,
  time,
  randomness,
  isRunning,
  isPaused,
}) => {
  const [greeting, setGreeting] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const intervalId = useRef<number>();

  useEffect(() => {
    if (isRunning && !isPaused) {
      intervalId.current = window.setInterval(() => {
        const baseAlphabet =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz .,!?/{}[]-=\'`"`~"!@#$%^&*()_+=:;';
        const augmentedName = name.repeat(randomness);
        const alphabet = baseAlphabet + augmentedName;

        // Check if the message is complete
        if (currentCharIndex >= name.length) {
          setGreeting(name); // Set greeting to name without appending extra character
          return; // Exit the interval callback
        }

        const randomChar =
          alphabet[Math.floor(Math.random() * alphabet.length)];

        if (randomChar === name[currentCharIndex]) {
          setCurrentCharIndex((prevIndex) => prevIndex + 1);
        }

        setGreeting(name.slice(0, currentCharIndex) + randomChar);
      }, time);
    } else {
      clearInterval(intervalId.current);
    }

    return () => clearInterval(intervalId.current);
  }, [name, time, isRunning, isPaused, currentCharIndex]);

  useEffect(() => {
    if (!isRunning) {
      setGreeting("");
      setCurrentCharIndex(0);
    }
  }, [isRunning]);

  return (
    <div className="App">
      {/* Greeting Display */}
      <div>
        <h1>{greeting}</h1>
      </div>
    </div>
  );
};

export default AnimateMessage;
