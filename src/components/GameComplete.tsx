import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Share2, Star, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CertificateGenerator } from "./CertificateGenerator";

interface GameCompleteProps {
  totalScore: number;
  maxScore: number;
  earnedBadges: Array<{ name: string; icon: string }>;
  onRestart: () => void;
}

export const GameComplete = ({ totalScore, maxScore, earnedBadges, onRestart }: GameCompleteProps) => {
  const { toast } = useToast();
  const [showCertificate, setShowCertificate] = useState(false);
  const [userProfile, setUserProfile] = useState<{ full_name: string; email: string } | null>(null);
  const [certificateId, setCertificateId] = useState("");
  const percentage = Math.round((totalScore / maxScore) * 100);

  useEffect(() => {
    loadUserProfile();
    generateCertificate();
  }, []);

  const loadUserProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("full_name, email")
        .eq("id", user.id)
        .single();

      if (error) throw error;
      setUserProfile(data);
    } catch (error) {
      console.error("Error loading profile:", error);
    }
  };

  const generateCertificate = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || !userProfile) return;

      const certId = `PQ-${Date.now()}-${user.id.substring(0, 8).toUpperCase()}`;
      setCertificateId(certId);

      const { error } = await supabase.from("certificates").insert({
        user_id: user.id,
        full_name: userProfile.full_name || userProfile.email || "Codificador Anônimo",
        total_score: totalScore,
        max_score: maxScore,
        percentage,
        badges_count: earnedBadges.length,
      });

      if (error) console.error("Error saving certificate:", error);
    } catch (error) {
      console.error("Error generating certificate:", error);
    }
  };
  
  const certificateText = `🏆 CERTIFICADO QUÂNTICO 🏆

Eu completei o Python Quest - Uma Jornada Épica!

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

  const linkedInPost = `Acabei de completar o Python Quest - uma jornada épica e surreal! 🐍✨

Dominei variáveis mágicas, loops temporais e funções místicas através de desafios interativos que transcendem a realidade!

📊 Resultado: ${percentage}% de aproveitamento
🏆 ${earnedBadges.length} medalhas lendárias conquistadas
⚡ ${totalScore} pontos de ${maxScore} possíveis

Conceitos dominados: Variáveis, Operadores, Condicionais, Loops e Funções em Python!

Se você quer começar em programação de forma divertida e memorável, essa é a aventura perfeita! 🚀

#Python #Programação #Aprendizado #PythonQuest #Tecnologia #DesenvolvimentoProfissional`;

  const handleCopyCertificate = () => {
    navigator.clipboard.writeText(certificateText);
    toast({
      title: "Certificado copiado! 📋",
      description: "Cole em suas redes sociais",
    });
  };

  const handleShareLinkedIn = () => {
    navigator.clipboard.writeText(linkedInPost);
    toast({
      title: "Texto copiado! 🎉",
      description: "Agora é só colar no LinkedIn",
    });
  };

  const handleViewCertificate = () => {
    setShowCertificate(true);
  };

  if (showCertificate && userProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-card/50 to-background">
        <div className="max-w-5xl w-full">
          <Button
            onClick={() => setShowCertificate(false)}
            variant="outline"
            className="mb-4"
          >
            ← Voltar
          </Button>
          <CertificateGenerator
            fullName={userProfile.full_name || userProfile.email || "Codificador Anônimo"}
            completionDate={new Date().toLocaleDateString("pt-BR")}
            totalScore={totalScore}
            maxScore={maxScore}
            percentage={percentage}
            badgesCount={earnedBadges.length}
            certificateId={certificateId}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-card/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
      <div className="absolute top-20 left-20 text-6xl animate-pulse">✨</div>
      <div className="absolute bottom-20 right-20 text-6xl animate-pulse delay-1000">🌟</div>
      
      <Card className="max-w-3xl w-full p-8 md:p-12 shadow-2xl relative border-primary/30">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-primary via-accent to-secondary mb-6 shadow-glow animate-pulse">
            <Trophy className="w-14 h-14 text-primary-foreground" />
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-accent animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Épico! 🎉
            </h1>
            <Sparkles className="w-8 h-8 text-accent animate-pulse" />
          </div>
          
          <p className="text-2xl text-foreground font-semibold mb-2">
            Você transcendeu a realidade! 🚀
          </p>
          <p className="text-lg text-muted-foreground">
            Completou todos os níveis da jornada Python Quest
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-primary mb-1">{totalScore}</div>
            <div className="text-sm text-muted-foreground">Pontos Conquistados</div>
            <div className="text-xs text-primary mt-1">de {maxScore} possíveis</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-transparent border-accent/30 hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-accent mb-1">{percentage}%</div>
            <div className="text-sm text-muted-foreground">Aproveitamento</div>
            <div className="text-xs text-accent mt-1">Nível: {percentage >= 90 ? "Mestre" : percentage >= 70 ? "Avançado" : "Intermediário"}</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-success/10 to-transparent border-success/30 hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-success mb-1">{earnedBadges.length}</div>
            <div className="text-sm text-muted-foreground">Medalhas Lendárias</div>
            <div className="text-xs text-success mt-1">Conquistas Épicas</div>
          </Card>
        </div>

        {/* Badges */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-muted/30 to-transparent border-primary/20">
          <h3 className="font-bold mb-4 text-center text-lg">🏆 Suas Conquistas Lendárias</h3>
          <div className="flex justify-center gap-8">
            {earnedBadges.map((badge, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl mb-2 group-hover:scale-125 transition-transform">{badge.icon}</div>
                <div className="text-sm font-semibold text-primary">{badge.name}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Certificate Preview */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border-2 border-primary/30 shadow-glow">
          <div className="text-center mb-4">
            <Star className="w-10 h-10 text-primary mx-auto mb-3 animate-pulse" />
            <h3 className="font-bold text-xl mb-2">✨ Seu Certificado Quântico Está Pronto!</h3>
            <p className="text-sm text-muted-foreground">Um documento que transcende as dimensões</p>
          </div>
          
          <Button
            onClick={handleViewCertificate}
            size="lg"
            className="w-full mb-4 bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90"
          >
            🏆 Ver Certificado Completo
          </Button>
          
          <div className="bg-background/50 p-4 rounded-lg text-sm whitespace-pre-line font-mono text-left max-h-48 overflow-y-auto border border-primary/20">
            {certificateText}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleShareLinkedIn}
            className="w-full gap-2 bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90 shadow-lg"
            size="lg"
          >
            <Share2 className="w-5 h-5" />
            🚀 Compartilhar no LinkedIn
          </Button>

          <Button
            onClick={onRestart}
            variant="outline"
            className="w-full border-primary/30 hover:bg-primary/10"
          >
            🔄 Jogar Novamente
          </Button>
        </div>

        {/* Next Steps */}
        <Card className="mt-8 p-6 bg-gradient-to-br from-muted/30 to-transparent border-accent/20">
          <h3 className="font-bold mb-3 text-lg">🚀 Sua Jornada Continua...</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>✨ Pratique criando pequenos programas mágicos</li>
            <li>🔮 Explore listas, dicionários e outras estruturas interdimensionais</li>
            <li>⚡ Domine bibliotecas como Pandas, NumPy e requests</li>
            <li>🌟 Junte-se a comunidades Python no LinkedIn, Discord e GitHub</li>
            <li>🎯 Crie projetos pessoais e construa seu portfólio</li>
          </ul>
        </Card>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground italic">
            "No reino quântico do código, você acabou de abrir o portal para infinitas possibilidades..." ✨
          </p>
        </div>
      </Card>
    </div>
  );
};
