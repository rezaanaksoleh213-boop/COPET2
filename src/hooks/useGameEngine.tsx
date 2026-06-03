import { createContext, useContext, useState, type ReactNode } from 'react';

export type GameMode = 'home' | 'vocab' | 'quiz' | 'sim';

interface GameEngineState {
  userPoints: number;
  masteredCount: number;
  currentMode: GameMode;
  addPoints: (points: number) => void;
  incrementMastered: () => void;
  setMode: (mode: GameMode) => void;
  resetGame: () => void;
}

const GameEngineContext = createContext<GameEngineState | undefined>(undefined);

export function GameEngineProvider({ children }: { children: ReactNode }) {
  const [userPoints, setUserPoints] = useState<number>(0);
  const [masteredCount, setMasteredCount] = useState<number>(0);
  const [currentMode, setCurrentMode] = useState<GameMode>('home');

  const addPoints = (points: number) => {
    setUserPoints((prev) => prev + points);
  };

  const incrementMastered = () => {
    setMasteredCount((prev) => prev + 1);
  };

  const setMode = (mode: GameMode) => {
    setCurrentMode(mode);
  };

  const resetGame = () => {
    setUserPoints(0);
    setMasteredCount(0);
    setCurrentMode('home');
  };

  return (
    <GameEngineContext.Provider
      value={{
        userPoints,
        masteredCount,
        currentMode,
        addPoints,
        incrementMastered,
        setMode,
        resetGame,
      }}
    >
      {children}
    </GameEngineContext.Provider>
  );
}

export function useGameEngine() {
  const context = useContext(GameEngineContext);
  if (context === undefined) {
    throw new Error('useGameEngine must be used within a GameEngineProvider');
  }
  return context;
}
