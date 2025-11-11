import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Trophy, Zap, Sparkles } from "lucide-react";

interface GameIntroProps {
  onStart: () => void;
}

export const GameIntro = ({ onStart }: GameIntroProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-card/50 to-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.1),transparent_50%)]" />
      
      <Card className="max-w-4xl w-full p-8 md:p-12 shadow-2xl relative border-primary/20">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-secondary mb-4 shadow-glow animate-pulse">
            <Code2 className="w-12 h-12 text-primary-foreground" />
          </div>
          
          <div className="inline-flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              Python Quest
            </h1>
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
          </div>
          
          <p className="text-xl text-foreground max-w-2xl mx-auto font-medium">
            Uma jornada épica e surreal pelo mundo da programação Python 🐍✨
          </p>
          
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Domine variáveis mágicas, loops temporais e funções místicas através de desafios 
            interativos que vão além da realidade comum!
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="flex flex-col items-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:scale-105 transition-transform">
              <Zap className="w-10 h-10 text-primary mb-3 animate-pulse" />
              <h3 className="font-bold mb-2 text-lg">6 Níveis Épicos</h3>
              <p className="text-sm text-muted-foreground text-center">
                De variáveis mágicas a funções místicas através de dimensões paralelas
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 hover:scale-105 transition-transform">
              <Trophy className="w-10 h-10 text-accent mb-3" />
              <h3 className="font-bold mb-2 text-lg">Medalhas Lendárias</h3>
              <p className="text-sm text-muted-foreground text-center">
                Conquiste títulos surreais e desbloqueie segredos cósmicos
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:scale-105 transition-transform">
              <Code2 className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold mb-2 text-lg">Certificado Quântico</h3>
              <p className="text-sm text-muted-foreground text-center">
                Receba um certificado compartilhável que desafia as leis da física
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <Button 
              onClick={onStart} 
              size="lg"
              className="text-xl px-12 py-6 bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90 shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              🚀 Iniciar Aventura Épica
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ⏱️ 10-12 minutos de pura magia · 🧙‍♂️ 12 desafios surreais · ✨ Totalmente gratuito
            </p>
            
            <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-accent/20">
              <p className="text-xs text-muted-foreground italic">
                💡 <strong>Dica interdimensional:</strong> Prepare-se para encontrar variáveis falantes, 
                loops que dobram o tempo e funções que sonham acordadas...
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
