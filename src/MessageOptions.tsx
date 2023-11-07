import React from "react";
import "./App.css";

interface MessageOptionsProps {
  name: string;
  setName: (name: string) => void;
  time: number;
  setTime: (time: number) => void;
  randomness: number;
  setRandomness: (randomness: number) => void;
  isRunning: boolean;
  setIsRunning: (isRunning: boolean) => void;
  isPaused: boolean;
  setIsPaused: (isPaused: boolean) => void;
}

const MessageOptions: React.FC<MessageOptionsProps> = ({
  name,
  setName,
  time,
  setTime,
  randomness,
  setRandomness,
  isRunning,
  setIsRunning,
  isPaused,
  setIsPaused,
}) => {
  const handleStartResetClick = () => {
    setIsRunning(!isRunning);
  };

  const handlePauseResumeClick = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="App">
      {/* Name Input */}
      <div className="input-group">
        <label htmlFor="name" className="label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
      </div>

      {/* Scrolling Speed Input */}
      <div className="input-group">
        <label htmlFor="time" className="label">
          Scrolling Speed (ms):
        </label>
        <input
          type="number"
          id="time"
          value={time}
          onChange={(e) => setTime(parseInt(e.target.value))}
          className="input"
        />
      </div>

      {/* Randomness Multiplier Input */}
      <div className="input-group">
        <label htmlFor="randomness" className="label">
          Randomness Multiplier (0 - 10):
        </label>
        <input
          type="number"
          id="randomness"
          value={randomness}
          min="0"
          max="10"
          onChange={(e) => setRandomness(parseInt(e.target.value))}
          className="input"
        />
      </div>

      {/* Start, Reset, Pause, Resume Buttons */}
      <div className="input-group button-group">
        <button onClick={handleStartResetClick} className="button">
          {isRunning ? "Reset" : "Start"}
        </button>
        {isRunning && (
          <button onClick={handlePauseResumeClick} className="button">
            {isPaused ? "Resume" : "Pause"}
          </button>
        )}
      </div>
    </div>
  );
};

export default MessageOptions;
