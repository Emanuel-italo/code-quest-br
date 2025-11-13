import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Star, Zap } from "lucide-react";

interface UnlockIntermediateProps {
  onContinue: () => void;
}

export const UnlockIntermediate = ({ onContinue }: UnlockIntermediateProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.2),transparent_70%)] animate-pulse" />
      
      {/* Estrelas flutuantes */}
      <div className="absolute top-10 left-10 text-6xl animate-bounce">⭐</div>
      <div className="absolute top-20 right-20 text-5xl animate-pulse delay-300">✨</div>
      <div className="absolute bottom-20 left-20 text-7xl animate-bounce delay-500">🌟</div>
      <div className="absolute bottom-10 right-10 text-6xl animate-pulse delay-700">💫</div>
      
      {/* Portal dimensional */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-primary via-accent to-secondary animate-spin" style={{ animationDuration: "10s" }} />
      </div>

      <Card className="max-w-4xl w-full p-12 shadow-2xl relative border-4 border-primary/50 bg-gradient-to-br from-card via-background to-card">
        <div className="text-center space-y-8">
          {/* Ícone principal */}
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-glow animate-pulse">
              <Sparkles className="w-16 h-16 text-primary-foreground" />
            </div>
            <div className="absolute -inset-4 border-4 border-accent rounded-full opacity-30 animate-ping" />
          </div>

          {/* Título */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Star className="w-10 h-10 text-accent animate-spin" style={{ animationDuration: "3s" }} />
              <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                NOVA DIMENSÃO
              </h1>
              <Star className="w-10 h-10 text-accent animate-spin" style={{ animationDuration: "3s" }} />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground">
              Mundo Intermediário Desbloqueado! 🎉
            </h2>
          </div>

          {/* Descrição */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border-2 border-primary/30">
            <p className="text-xl text-foreground leading-relaxed mb-6">
              Você transcendeu os fundamentos básicos e agora adentra em territórios
              mais profundos da programação Python! 
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-primary mb-1">Listas & Arrays</div>
                  <div className="text-sm text-muted-foreground">Domine coleções de dados</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-accent mb-1">Métodos de String</div>
                  <div className="text-sm text-muted-foreground">Manipule texto como um mestre</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-success mb-1">Dicionários</div>
                  <div className="text-sm text-muted-foreground">Organize dados com chave:valor</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-secondary mb-1">Tuplas & Módulos</div>
                  <div className="text-sm text-muted-foreground">Estruturas avançadas</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Motivação */}
          <div className="text-lg text-muted-foreground italic">
            "Os portais dimensionais se abrem para aqueles que dominam os fundamentos.
            Prepare-se para desafios que expandirão sua mente de programador!" ✨
          </div>

          {/* Botão */}
          <Button
            onClick={onContinue}
            size="lg"
            className="text-xl py-8 px-12 bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90 shadow-glow"
          >
            <Sparkles className="w-6 h-6 mr-2" />
            Adentrar o Mundo Intermediário
            <Sparkles className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
