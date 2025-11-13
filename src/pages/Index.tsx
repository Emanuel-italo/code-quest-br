import { useState, useEffect } from "react";
import { GameIntro } from "@/components/GameIntro";
import { GamePlay } from "@/components/GamePlay";
import { LevelComplete } from "@/components/LevelComplete";
import { GameComplete } from "@/components/GameComplete";
import { UnlockIntermediate } from "@/components/UnlockIntermediate";
import { gameLevels, badges } from "@/data/gameData";

type GameState = "intro" | "playing" | "levelComplete" | "unlockIntermediate" | "complete";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [gameState, setGameState] = useState<GameState>("intro");
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [levelScore, setLevelScore] = useState(0);
  const [earnedBadges, setEarnedBadges] = useState<typeof badges>([]);

  const maxScorePerLevel = 20; // 2 questions * 10 points max
  const totalMaxScore = maxScorePerLevel * gameLevels.length;

  useEffect(() => {
    // Load progress from localStorage
    loadProgress();
    setLoading(false);
  }, []);

  const loadProgress = () => {
    try {
      const savedProgress = localStorage.getItem("pythonquest_progress");
      if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        setCurrentLevelIndex(progress.currentLevel || 0);
        setTotalScore(progress.totalScore || 0);
        setEarnedBadges(progress.earnedBadges || []);
      }
    } catch (error) {
      console.error("Error loading progress:", error);
    }
  };

  const saveProgress = () => {
    try {
      const progress = {
        currentLevel: currentLevelIndex,
        totalScore: totalScore,
        earnedBadges: earnedBadges,
      };
      localStorage.setItem("pythonquest_progress", JSON.stringify(progress));
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  };

  const handleStart = () => {
    setGameState("playing");
  };

  const handleLevelComplete = (score: number) => {
    setLevelScore(score);
    const newTotalScore = totalScore + score;
    setTotalScore(newTotalScore);
    
    // Check for new badges
    const newBadges = badges.filter(
      badge => 
        badge.requiredLevel === currentLevelIndex + 1 && 
        !earnedBadges.find(b => b.id === badge.id)
    );
    
    if (newBadges.length > 0) {
      setEarnedBadges([...earnedBadges, ...newBadges]);
    }
    
    setGameState("levelComplete");
    saveProgress();
  };

  const handleNextLevel = () => {
    if (currentLevelIndex < gameLevels.length - 1) {
      // Após completar nível 6 (índice 5), mostrar desbloqueio
      if (currentLevelIndex === 5) {
        setCurrentLevelIndex(currentLevelIndex + 1);
        setGameState("unlockIntermediate");
      } else {
        setCurrentLevelIndex(currentLevelIndex + 1);
        setGameState("playing");
      }
    } else {
      setGameState("complete");
    }
  };

  const handleContinueAfterUnlock = () => {
    setGameState("playing");
  };

  const handleRestart = () => {
    setGameState("intro");
    setCurrentLevelIndex(0);
    setTotalScore(0);
    setLevelScore(0);
    setEarnedBadges([]);
  };

  const newBadge = earnedBadges.find(
    badge => badge.requiredLevel === currentLevelIndex + 1
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-primary text-2xl">Carregando...</div>
      </div>
    );
  }

  return (
    <>
      {gameState === "intro" && <GameIntro onStart={handleStart} />}
      
      {gameState === "playing" && (
        <GamePlay
          level={gameLevels[currentLevelIndex]}
          onLevelComplete={handleLevelComplete}
          currentLevelNumber={currentLevelIndex + 1}
          totalLevels={gameLevels.length}
        />
      )}
      
      {gameState === "levelComplete" && (
        <LevelComplete
          levelNumber={currentLevelIndex + 1}
          score={levelScore}
          maxScore={maxScorePerLevel}
          totalLevels={gameLevels.length}
          onNextLevel={handleNextLevel}
          newBadge={newBadge}
        />
      )}

      {gameState === "unlockIntermediate" && (
        <UnlockIntermediate onContinue={handleContinueAfterUnlock} />
      )}
      
      {gameState === "complete" && (
        <GameComplete
          totalScore={totalScore}
          maxScore={totalMaxScore}
          earnedBadges={earnedBadges}
          onRestart={handleRestart}
        />
      )}
    </>
  );
};

export default Index;
