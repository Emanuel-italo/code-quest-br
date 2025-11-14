import { Button } from "@/components/ui/button";
import { Trophy, Sparkles } from "lucide-react";

interface GateSuccessProps {
  totalScore: number;
  maxScore: number;
  onContinue: () => void;
}

export const GateSuccess = ({ totalScore, maxScore, onContinue }: GateSuccessProps) => {
  const percentage = Math.round((totalScore / maxScore) * 100);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-background p-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        {/* Icon de Troféu */}
        <div className="relative inline-block">
          <div className="absolute inset-0 animate-pulse">
            <Sparkles className="w-32 h-32 text-primary/30 absolute -top-4 -left-4" />
            <Sparkles className="w-32 h-32 text-primary/30 absolute -bottom-4 -right-4" />
          </div>
          <Trophy className="w-32 h-32 text-primary mx-auto relative z-10" />
        </div>

        {/* Título */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Parabéns! 🎉
          </h1>
          <p className="text-2xl text-muted-foreground">
            Você atingiu a nota para passar para as perguntas intermediárias!
          </p>
        </div>

        {/* Pontuação */}
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 space-y-4">
          <div className="text-6xl font-bold text-primary">
            {percentage}%
          </div>
          <p className="text-lg text-muted-foreground">
            {totalScore} de {maxScore} pontos
          </p>
        </div>

        {/* Pergunta */}
        <div className="space-y-6">
          <p className="text-xl text-foreground font-medium">
            Deseja continuar para o nível intermediário?
          </p>
          
          <Button
            onClick={onContinue}
            size="lg"
            className="text-lg px-12 py-6 h-auto font-semibold hover:scale-105 transition-transform"
          >
            Sim, vamos lá! 🚀
          </Button>
        </div>
      </div>
    </div>
  );
};
