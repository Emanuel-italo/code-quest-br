import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Trophy, Zap } from "lucide-react";

interface GameIntroProps {
  onStart: () => void;
}

export const GameIntro = ({ onStart }: GameIntroProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <Card className="max-w-4xl w-full p-8 md:p-12 shadow-xl">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
            <Code2 className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Aprenda Python Jogando
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Domine os fundamentos de Python através de desafios interativos e divertidos. 
            Perfeito para iniciantes que querem começar na programação!
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
              <Zap className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-semibold mb-1">6 Níveis</h3>
              <p className="text-sm text-muted-foreground text-center">
                Aprenda progressivamente de variáveis a funções
              </p>
            </div>
            
            <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
              <Trophy className="w-8 h-8 text-secondary mb-2" />
              <h3 className="font-semibold mb-1">Medalhas</h3>
              <p className="text-sm text-muted-foreground text-center">
                Ganhe conquistas e acompanhe seu progresso
              </p>
            </div>
            
            <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
              <Code2 className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-semibold mb-1">Certificado</h3>
              <p className="text-sm text-muted-foreground text-center">
                Receba um certificado ao completar todos os níveis
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <Button 
              onClick={onStart} 
              size="lg"
              className="text-lg px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Começar Jogo
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ⏱️ Tempo médio: 10-12 minutos · 📚 12 desafios · 🎯 100% gratuito
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
