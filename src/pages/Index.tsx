import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { Auth } from "@/components/Auth";
import { GameIntro } from "@/components/GameIntro";
import { GamePlay } from "@/components/GamePlay";
import { LevelComplete } from "@/components/LevelComplete";
import { GameComplete } from "@/components/GameComplete";
import { gameLevels, badges } from "@/data/gameData";
import { useToast } from "@/hooks/use-toast";

type GameState = "auth" | "intro" | "playing" | "levelComplete" | "complete";

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [gameState, setGameState] = useState<GameState>("auth");
  const { toast } = useToast();
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [levelScore, setLevelScore] = useState(0);
  const [earnedBadges, setEarnedBadges] = useState<typeof badges>([]);

  const maxScorePerLevel = 20; // 2 questions * 10 points max
  const totalMaxScore = maxScorePerLevel * gameLevels.length;

  useEffect(() => {
    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadProgress(session.user.id);
        setGameState("intro");
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadProgress(session.user.id);
        setGameState("intro");
      } else {
        setGameState("auth");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadProgress = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("game_progress")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setCurrentLevelIndex(data.current_level - 1);
        setTotalScore(data.total_score);
        setEarnedBadges(data.earned_badges as typeof badges);
      }
    } catch (error) {
      console.error("Error loading progress:", error);
    }
  };

  const saveProgress = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from("game_progress")
        .upsert({
          user_id: user.id,
          current_level: currentLevelIndex + 1,
          total_score: totalScore,
          completed_levels: Array.from({ length: currentLevelIndex + 1 }, (_, i) => i + 1),
          earned_badges: earnedBadges,
        });

      if (error) throw error;
    } catch (error) {
      console.error("Error saving progress:", error);
      toast({
        title: "Erro ao salvar progresso",
        description: "Tente novamente mais tarde",
        variant: "destructive",
      });
    }
  };

  const handleStart = () => {
    setGameState("playing");
  };

  const handleLevelComplete = async (score: number) => {
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
    await saveProgress();
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-primary text-2xl">Carregando...</div>
      </div>
    );
  }

  return (
    <>
      {gameState === "auth" && <Auth onSuccess={() => setGameState("intro")} />}
      
      {gameState === "intro" && <GameIntro onStart={handleStart} user={user} />}
      
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
