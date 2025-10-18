import { useState } from "react";
import { GameIntro } from "@/components/GameIntro";
import { GamePlay } from "@/components/GamePlay";
import { LevelComplete } from "@/components/LevelComplete";
import { GameComplete } from "@/components/GameComplete";
import { gameLevels, badges } from "@/data/gameData";

type GameState = "intro" | "playing" | "levelComplete" | "complete";

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("intro");
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [levelScore, setLevelScore] = useState(0);
  const [earnedBadges, setEarnedBadges] = useState<typeof badges>([]);

  const maxScorePerLevel = 20; // 2 questions * 10 points max
  const totalMaxScore = maxScorePerLevel * gameLevels.length;

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
  };

  const handleNextLevel = () => {
    if (currentLevelIndex < gameLevels.length - 1) {
      setCurrentLevelIndex(currentLevelIndex + 1);
      setGameState("playing");
    } else {
      setGameState("complete");
    }
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
