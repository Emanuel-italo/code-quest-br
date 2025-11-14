import { Button } from "@/components/ui/button";
import { RefreshCw, Target } from "lucide-react";

interface GateFailureProps {
  totalScore: number;
  maxScore: number;
  onRetry: () => void;
}

export const GateFailure = ({ totalScore, maxScore, onRetry }: GateFailureProps) => {
  const percentage = Math.round((totalScore / maxScore) * 100);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-destructive/5 to-background p-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        {/* Icon de Alvo */}
        <div className="relative inline-block">
          <Target className="w-32 h-32 text-muted-foreground mx-auto" />
        </div>

        {/* Título */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Quase lá! 💪
          </h1>
          <p className="text-xl text-muted-foreground">
            Você está no caminho certo, mas precisa de um pouco mais de prática.
          </p>
        </div>

        {/* Pontuação */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 space-y-4">
          <div className="text-6xl font-bold text-muted-foreground">
            {percentage}%
          </div>
          <p className="text-lg text-muted-foreground">
            {totalScore} de {maxScore} pontos
          </p>
          <p className="text-sm text-muted-foreground/80">
            Você precisa de pelo menos 80 pontos para avançar
          </p>
        </div>

        {/* Mensagem de encorajamento */}
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
          <p className="text-lg text-foreground">
            A prática leva à perfeição! Refaça as questões e melhore sua pontuação.
          </p>
        </div>

        {/* Pergunta */}
        <div className="space-y-6">
          <p className="text-xl text-foreground font-medium">
            Deseja refazer as questões básicas?
          </p>
          
          <Button
            onClick={onRetry}
            size="lg"
            className="text-lg px-12 py-6 h-auto font-semibold hover:scale-105 transition-transform"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Refazer Questões
          </Button>
        </div>
      </div>
    </div>
  );
};
