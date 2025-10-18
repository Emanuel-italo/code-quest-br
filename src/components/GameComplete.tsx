import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Download, Share2, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface GameCompleteProps {
  totalScore: number;
  maxScore: number;
  earnedBadges: Array<{ name: string; icon: string }>;
  onRestart: () => void;
}

export const GameComplete = ({ totalScore, maxScore, earnedBadges, onRestart }: GameCompleteProps) => {
  const { toast } = useToast();
  const percentage = Math.round((totalScore / maxScore) * 100);
  
  const certificateText = `🏆 CERTIFICADO DE CONCLUSÃO 🏆

Eu completei o curso "Aprenda Python Jogando"!

✅ 6 níveis concluídos
✅ ${totalScore} pontos de ${maxScore} possíveis
✅ ${percentage}% de aproveitamento
✅ ${earnedBadges.length} conquistas desbloqueadas

Conceitos dominados:
• Variáveis e tipos de dados
• Operadores básicos
• Entrada e saída de dados
• Estruturas condicionais (if/elif/else)
• Laços de repetição (for/while)
• Funções

#Python #AprendizadoProgramação #Tecnologia`;

  const linkedInPost = `Acabei de completar um jogo interativo para aprender Python! 🐍

Aprendi sobre variáveis, loops, funções e muito mais de forma divertida e prática.

Resultado: ${percentage}% de aproveitamento e ${earnedBadges.length} conquistas! 🏆

Se você quer começar em programação, esse é um ótimo jeito de dar os primeiros passos!

#Python #Programação #Aprendizado #Tecnologia #DesenvolvimentoProfissional`;

  const handleCopyCertificate = () => {
    navigator.clipboard.writeText(certificateText);
    toast({
      title: "Certificado copiado!",
      description: "Cole em suas redes sociais",
    });
  };

  const handleShareLinkedIn = () => {
    navigator.clipboard.writeText(linkedInPost);
    toast({
      title: "Texto copiado!",
      description: "Agora é só colar no LinkedIn",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <Card className="max-w-3xl w-full p-8 md:p-12 shadow-xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mb-6">
            <Trophy className="w-12 h-12 text-primary-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Parabéns! 🎉
          </h1>
          
          <p className="text-xl text-muted-foreground mb-2">
            Você completou todos os níveis!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center bg-primary/5 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-1">{totalScore}</div>
            <div className="text-sm text-muted-foreground">Pontos Totais</div>
          </Card>
          
          <Card className="p-6 text-center bg-secondary/5 border-secondary/20">
            <div className="text-3xl font-bold text-secondary mb-1">{percentage}%</div>
            <div className="text-sm text-muted-foreground">Aproveitamento</div>
          </Card>
          
          <Card className="p-6 text-center bg-success/5 border-success/20">
            <div className="text-3xl font-bold text-success mb-1">{earnedBadges.length}</div>
            <div className="text-sm text-muted-foreground">Conquistas</div>
          </Card>
        </div>

        {/* Badges */}
        <Card className="p-6 mb-8 bg-muted/30">
          <h3 className="font-semibold mb-4 text-center">Suas Conquistas</h3>
          <div className="flex justify-center gap-8">
            {earnedBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-2">{badge.icon}</div>
                <div className="text-xs font-medium">{badge.name}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Certificate Preview */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
          <div className="text-center mb-4">
            <Star className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-bold text-lg mb-2">Seu Certificado de Conclusão</h3>
          </div>
          <div className="bg-background p-4 rounded-lg text-sm whitespace-pre-line font-mono text-left max-h-64 overflow-y-auto">
            {certificateText}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <div className="grid md:grid-cols-2 gap-3">
            <Button
              onClick={handleCopyCertificate}
              variant="outline"
              className="gap-2"
              size="lg"
            >
              <Download className="w-5 h-5" />
              Copiar Certificado
            </Button>
            
            <Button
              onClick={handleShareLinkedIn}
              className="gap-2 bg-gradient-to-r from-primary to-primary/80"
              size="lg"
            >
              <Share2 className="w-5 h-5" />
              Compartilhar no LinkedIn
            </Button>
          </div>

          <Button
            onClick={onRestart}
            variant="outline"
            className="w-full"
          >
            Jogar Novamente
          </Button>
        </div>

        {/* Next Steps */}
        <Card className="mt-8 p-6 bg-muted/30">
          <h3 className="font-semibold mb-3">📚 Próximos Passos</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Pratique os conceitos criando pequenos programas</li>
            <li>• Explore listas, dicionários e outras estruturas de dados</li>
            <li>• Aprenda sobre bibliotecas populares como Pandas e NumPy</li>
            <li>• Participe de comunidades Python no LinkedIn e Discord</li>
          </ul>
        </Card>
      </Card>
    </div>
  );
};
