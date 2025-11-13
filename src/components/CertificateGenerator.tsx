import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CertificateProps {
  fullName: string;
  completionDate: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  badgesCount: number;
  certificateId: string;
}

export const CertificateGenerator = ({
  fullName,
  completionDate,
  totalScore,
  maxScore,
  percentage,
  badgesCount,
  certificateId
}: CertificateProps) => {
  const certificateRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleDownloadPDF = () => {
    window.print();
    toast({
      title: "Pronto para imprimir! 🖨️",
      description: "Salve como PDF na janela de impressão",
    });
  };

  const handleCopyHTML = () => {
    const htmlContent = certificateRef.current?.innerHTML || "";
    navigator.clipboard.writeText(htmlContent);
    toast({
      title: "HTML copiado! 📋",
      description: "Cole onde quiser",
    });
  };

  return (
    <div>
      {/* Botões de ação - escondidos na impressão */}
      <div className="print:hidden mb-6 flex gap-3 justify-center">
        <Button
          onClick={handleDownloadPDF}
          className="gap-2 bg-gradient-to-r from-primary via-accent to-primary"
          size="lg"
        >
          <Download className="w-5 h-5" />
          Imprimir/Salvar PDF
        </Button>
        <Button
          onClick={handleCopyHTML}
          variant="outline"
          className="gap-2"
          size="lg"
        >
          <Copy className="w-5 h-5" />
          Copiar HTML
        </Button>
      </div>

      {/* Certificado - modo paisagem na impressão */}
      <Card 
        ref={certificateRef}
        className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background border-8 border-primary shadow-2xl print:border-primary print:shadow-none print:w-[297mm] print:h-[210mm] print:max-w-none print:m-0"
      >
        {/* Efeito de fundo pulsante */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_70%)] animate-pulse" />
        
        {/* Decorações de canto */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-8 border-l-8 border-accent opacity-30" />
        <div className="absolute top-0 right-0 w-32 h-32 border-t-8 border-r-8 border-accent opacity-30" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-8 border-l-8 border-accent opacity-30" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-8 border-r-8 border-accent opacity-30" />

        {/* Conteúdo */}
        <div className="relative z-10 p-16 text-center">
          {/* Logo/Ícone */}
          <div className="text-7xl mb-6">🏆</div>

          {/* Título */}
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            CERTIFICADO QUÂNTICO
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Python Quest - Uma Jornada Épica
          </p>

          {/* Selo de Verificação */}
          <div className="inline-block relative mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent via-primary to-secondary flex items-center justify-center shadow-glow animate-pulse">
              <svg className="w-16 h-16 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <div className="absolute -inset-2 border-4 border-accent rounded-full opacity-30" />
            <div className="absolute -inset-4 border-2 border-accent rounded-full opacity-20" />
          </div>

          {/* Texto de Certificação */}
          <p className="text-lg text-muted-foreground mb-4">
            Certificamos que
          </p>

          <h2 className="text-5xl font-bold mb-8 text-foreground uppercase tracking-wide">
            {fullName}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Completou com sucesso todos os níveis da jornada Python Quest,
            demonstrando domínio em variáveis, operadores, estruturas condicionais,
            laços de repetição e funções, transcendendo as dimensões do código.
          </p>

          {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">{totalScore}</div>
              <div className="text-sm text-muted-foreground">Pontos de {maxScore}</div>
            </div>
            <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-6">
              <div className="text-4xl font-bold text-accent mb-2">{percentage}%</div>
              <div className="text-sm text-muted-foreground">Aproveitamento</div>
            </div>
            <div className="bg-success/10 border-2 border-success/30 rounded-lg p-6">
              <div className="text-4xl font-bold text-success mb-2">{badgesCount}</div>
              <div className="text-sm text-muted-foreground">Medalhas</div>
            </div>
          </div>

          {/* Data e ID */}
          <div className="flex justify-between items-end mt-12 pt-8 border-t-2 border-primary/20">
            <div className="text-left">
              <div className="text-sm text-muted-foreground mb-1">Data de Conclusão</div>
              <div className="text-lg font-semibold">{completionDate}</div>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-1 bg-primary mb-2" />
              <div className="text-xs text-muted-foreground">Assinatura Digital</div>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-muted-foreground mb-1">ID de Verificação</div>
              <div className="text-lg font-mono font-semibold">{certificateId}</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Instruções - escondidas na impressão */}
      <Card className="mt-6 p-6 bg-muted/30 border-primary/20 print:hidden">
        <h3 className="font-bold mb-3 text-lg">📜 Como usar seu certificado:</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>✨ Clique em "Imprimir/Salvar PDF" e escolha "Salvar como PDF"</li>
          <li>🔗 Use "Copiar HTML" para incorporar em seu site ou portfólio</li>
          <li>🌐 Compartilhe nas redes sociais para celebrar sua conquista</li>
          <li>🎯 Este certificado é válido e verificável pelo ID único</li>
        </ul>
      </Card>
    </div>
  );
};
