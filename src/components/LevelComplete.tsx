import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Star, ArrowRight } from "lucide-react";

interface LevelCompleteProps {
  levelNumber: number;
  score: number;
  maxScore: number;
  totalLevels: number;
  onNextLevel: () => void;
  newBadge?: { name: string; icon: string; description: string };
}

export const LevelComplete = ({
  levelNumber,
  score,
  maxScore,
  totalLevels,
  onNextLevel,
  newBadge
}: LevelCompleteProps) => {
  const percentage = Math.round((score / maxScore) * 100);
  const isLastLevel = levelNumber === totalLevels;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-6">
          <Trophy className="w-10 h-10 text-primary-foreground" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {isLastLevel ? '🎊 Parabéns!' : 'Nível Concluído!'}
        </h2>

        <p className="text-lg text-muted-foreground mb-8">
          {isLastLevel
            ? 'Você completou todos os níveis do jogo!'
            : `Você completou o nível ${levelNumber} de ${totalLevels}`}
        </p>

        {/* Score Display */}
        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="w-6 h-6 text-secondary" />
            <span className="text-4xl font-bold">{score}</span>
            <span className="text-2xl text-muted-foreground">/ {maxScore}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {percentage}% de aproveitamento
          </p>
        </div>

        {/* New Badge */}
        {newBadge && (
          <Card className="p-6 mb-8 bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-primary/20">
            <div className="text-6xl mb-3">{newBadge.icon}</div>
            <h3 className="text-xl font-bold mb-2">Nova Conquista Desbloqueada!</h3>
            <p className="font-semibold text-primary mb-1">{newBadge.name}</p>
            <p className="text-sm text-muted-foreground">{newBadge.description}</p>
          </Card>
        )}

        {/* Feedback Message */}
        <div className="mb-8">
          {percentage >= 90 ? (
            <p className="text-muted-foreground">
              Excelente trabalho! Você dominou este nível! 🌟
            </p>
          ) : percentage >= 70 ? (
            <p className="text-muted-foreground">
              Muito bem! Continue assim! 👏
            </p>
          ) : (
            <p className="text-muted-foreground">
              Bom trabalho! Continue praticando! 💪
            </p>
          )}
        </div>

        {/* Action Button */}
        <Button
          onClick={onNextLevel}
          size="lg"
          className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        >
          {isLastLevel ? 'Ver Certificado' : 'Próximo Nível'}
          <ArrowRight className="w-5 h-5" />
        </Button>
      </Card>
    </div>
  );
};
