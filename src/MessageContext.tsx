import React, { createContext, ReactNode, useState } from "react";

interface MessageContextProps {
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

const defaultValues: MessageContextProps = {
  name: "Hello, Nathan",
  setName: () => {},
  time: 10000,
  setTime: () => {},
  randomness: 0,
  setRandomness: () => {},
  isRunning: true,
  setIsRunning: () => {},
  isPaused: false,
  setIsPaused: () => {},
};

export const MessageContext = createContext<MessageContextProps>(defaultValues);

interface MessageProviderProps {
  children: ReactNode;
}

export const MessageProvider: React.FC<MessageProviderProps> = ({
  children,
}) => {
  const [name, setName] = useState<string>(defaultValues.name);
  const [time, setTime] = useState<number>(defaultValues.time);
  const [randomness, setRandomness] = useState<number>(
    defaultValues.randomness
  );
  const [isRunning, setIsRunning] = useState<boolean>(defaultValues.isRunning);
  const [isPaused, setIsPaused] = useState<boolean>(defaultValues.isPaused);

  return (
    <MessageContext.Provider
      value={{
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
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
