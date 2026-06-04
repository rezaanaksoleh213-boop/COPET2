import { createContext, useContext, useState, type ReactNode } from 'react';

export type GameMode = 'landing' | 'home' | 'vocab' | 'quiz' | 'sim' | 'admin';

interface GameEngineState {
  userPoints: number;
  masteredCount: number;
  currentMode: GameMode;
  playerName: string;
  testType: 'Pre-Test' | 'Post-Test';
  achievements: string[]; // <--- TAMBAHAN BUAT PIALA
  isAdvancedLevelUnlocked: boolean; // <--- TAMBAHAN BUAT UNLOCK LEVEL BARU
  setPlayerInfo: (name: string, type: 'Pre-Test' | 'Post-Test') => void;
  addPoints: (points: number) => void;
  incrementMastered: () => void;
  setMode: (mode: GameMode) => void;
  resetGame: () => void;
  unlockAchievement: (achievement: string) => void;
  unlockAdvancedLevel: () => void;
}

const GameEngineContext = createContext<GameEngineState | undefined>(undefined);

export function GameEngineProvider({ children }: { children: ReactNode }) {
  const [userPoints, setUserPoints] = useState<number>(0);
  const [masteredCount, setMasteredCount] = useState<number>(0);
  const [currentMode, setCurrentMode] = useState<GameMode>('landing');
  const [playerName, setPlayerName] = useState<string>("Siswa Anonim");
  const [testType, setTestType] = useState<'Pre-Test' | 'Post-Test'>('Pre-Test');
  const [achievements, setAchievements] = useState<string[]>([]);
  const [isAdvancedLevelUnlocked, setIsAdvancedLevelUnlocked] = useState<boolean>(false);

  const setPlayerInfo = (name: string, type: 'Pre-Test' | 'Post-Test') => {
    setPlayerName(name);
    setTestType(type);
  };

  const addPoints = (points: number) => {
    setUserPoints((prev) => prev + points);
  };

  const incrementMastered = () => {
    setMasteredCount((prev) => prev + 1);
  };

  const setMode = (mode: GameMode) => {
    setCurrentMode(mode);
  };

  // LOGIKA TAMBAH PIALA (Biar nggak dobel)
  const unlockAchievement = (newAchievement: string) => {
    setAchievements((prev) => {
      if (!prev.includes(newAchievement)) {
        return [...prev, newAchievement];
      }
      return prev;
    });
  };

  const unlockAdvancedLevel = () => {
    setIsAdvancedLevelUnlocked(true);
  };

  const resetGame = () => {
    setUserPoints(0);
    setMasteredCount(0);
    setCurrentMode('landing');
    setPlayerName("Siswa Anonim");
    setAchievements([]);
    setIsAdvancedLevelUnlocked(false);
  };

  return (
    <GameEngineContext.Provider
      value={{
        userPoints,
        masteredCount,
        currentMode,
        playerName,
        testType,
        achievements,
        isAdvancedLevelUnlocked,
        setPlayerInfo,
        addPoints,
        incrementMastered,
        setMode,
        resetGame,
        unlockAchievement,
        unlockAdvancedLevel,
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