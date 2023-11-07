import React, { useState, useEffect } from "react";
import "./App.css";
import AnimateMessage from "./AnimatedMessage";
import MessageOptions from "./MessageOptions";

const App: React.FC = () => {
  const [name, setName] = useState("Hello, Nathan");
  const [time, setTime] = useState(1); // Default speed in milliseconds
  const [randomness, setRandomness] = useState(0); // Default randomness multiplier
  const [isRunning, setIsRunning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Add an effect to unpause the animation when it is started
  useEffect(() => {
    if (isRunning) {
      setIsPaused(false);
    }
  }, [isRunning]);

  return (
    <div className="App">
      <AnimateMessage
        name={name}
        time={time}
        randomness={randomness}
        isRunning={isRunning}
        isPaused={isPaused}
      />
      <MessageOptions
        name={name}
        setName={setName}
        time={time}
        setTime={setTime}
        randomness={randomness}
        setRandomness={setRandomness}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
      />
    </div>
  );
};

export default App;
