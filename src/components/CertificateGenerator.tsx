import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share2, Copy } from "lucide-react";
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
    if (certificateRef.current) {
      window.print();
    }
  };

  const certificateHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Certificado Python Quest</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap');
    
    body {
      margin: 0;
      padding: 40px;
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
    }
    
    .certificate {
      max-width: 900px;
      margin: 0 auto;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a0a0f 100%);
      border: 8px solid #CC092F;
      border-radius: 20px;
      padding: 60px;
      box-shadow: 0 20px 60px rgba(204, 9, 47, 0.4);
      position: relative;
      overflow: hidden;
    }
    
    .certificate::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(204, 9, 47, 0.1) 0%, transparent 70%);
      animation: pulse 3s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
    
    .content {
      position: relative;
      z-index: 1;
      text-align: center;
    }
    
    .logo {
      font-size: 48px;
      margin-bottom: 20px;
    }
    
    .title {
      font-family: 'Playfair Display', serif;
      font-size: 52px;
      font-weight: 700;
      background: linear-gradient(135deg, #CC092F 0%, #FF4D6D 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin: 20px 0;
    }
    
    .subtitle {
      color: #f0f0f0;
      font-size: 24px;
      margin-bottom: 40px;
      font-weight: 600;
    }
    
    .recipient {
      font-size: 18px;
      color: #d0d0d0;
      margin-bottom: 10px;
    }
    
    .name {
      font-family: 'Playfair Display', serif;
      font-size: 42px;
      font-weight: 700;
      color: #ffffff;
      margin: 20px 0 40px 0;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    
    .achievement {
      font-size: 18px;
      line-height: 1.8;
      color: #d0d0d0;
      margin-bottom: 40px;
    }
    
    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin: 40px 0;
    }
    
    .stat {
      background: rgba(204, 9, 47, 0.1);
      border: 2px solid #CC092F;
      border-radius: 12px;
      padding: 20px;
    }
    
    .stat-value {
      font-size: 36px;
      font-weight: 700;
      color: #CC092F;
    }
    
    .stat-label {
      font-size: 14px;
      color: #b0b0b0;
      margin-top: 5px;
    }
    
    .footer {
      margin-top: 50px;
      padding-top: 30px;
      border-top: 2px solid rgba(204, 9, 47, 0.3);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .date, .signature {
      color: #b0b0b0;
      font-size: 14px;
    }
    
    .verification {
      margin-top: 30px;
      font-size: 12px;
      color: #808080;
    }
    
    .seal {
      position: absolute;
      bottom: 40px;
      right: 40px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: radial-gradient(circle, #CC092F 0%, #8B0623 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      box-shadow: 0 0 30px rgba(204, 9, 47, 0.6);
    }
    
    @media print {
      body { background: white; padding: 0; }
      .certificate { box-shadow: none; border-width: 4px; }
    }
  </style>
</head>
<body>
  <div class="certificate">
    <div class="content">
      <div class="logo">🐍✨</div>
      <h1 class="title">Certificado Quântico</h1>
      <p class="subtitle">Python Quest - Jornada Épica</p>
      
      <p class="recipient">Este certificado confirma que</p>
      <h2 class="name">${fullName}</h2>
      
      <p class="achievement">
        Completou com sucesso a jornada épica e surreal pelo mundo da programação Python,
        dominando variáveis mágicas, loops temporais e funções místicas através de 6 níveis
        de desafios interativos que transcendem a realidade comum.
      </p>
      
      <div class="stats">
        <div class="stat">
          <div class="stat-value">${totalScore}</div>
          <div class="stat-label">Pontos Conquistados</div>
        </div>
        <div class="stat">
          <div class="stat-value">${percentage}%</div>
          <div class="stat-label">Aproveitamento</div>
        </div>
        <div class="stat">
          <div class="stat-value">${badgesCount}</div>
          <div class="stat-label">Medalhas Lendárias</div>
        </div>
      </div>
      
      <div class="achievement">
        <strong>Conceitos Dominados:</strong> Variáveis e Tipos de Dados • Operadores Básicos • 
        Entrada e Saída • Estruturas Condicionais • Laços de Repetição • Funções
      </div>
      
      <div class="footer">
        <div class="date">
          Emitido em: ${completionDate}
        </div>
        <div class="signature">
          Python Quest Academy<br/>
          <small>Certificação Digital</small>
        </div>
      </div>
      
      <div class="verification">
        ID de Verificação: ${certificateId}<br/>
        Este certificado é válido em todas as dimensões conhecidas e desconhecidas
      </div>
    </div>
    
    <div class="seal">🏆</div>
  </div>
</body>
</html>
  `;

  const handleCopyHTML = () => {
    navigator.clipboard.writeText(certificateHTML);
    toast({
      title: "HTML copiado! 📋",
      description: "Cole em um arquivo .html e abra no navegador",
    });
  };

  const handleShare = () => {
    const shareText = `🏆 Acabei de completar o Python Quest!

📊 Resultado: ${percentage}% de aproveitamento
⭐ ${totalScore} pontos conquistados
🎖️ ${badgesCount} medalhas lendárias

Domínei: Variáveis, Operadores, Condicionais, Loops e Funções em Python!

#Python #Programação #Aprendizado #PythonQuest #DesenvolvimentoProfissional`;

    navigator.clipboard.writeText(shareText);
    toast({
      title: "Texto copiado! 🎉",
      description: "Cole no LinkedIn ou em suas redes sociais",
    });
  };

  return (
    <div className="space-y-6">
      <Card className="p-8 bg-gradient-to-br from-card to-background border-primary/30">
        <div
          ref={certificateRef}
          dangerouslySetInnerHTML={{ __html: certificateHTML }}
          className="certificate-preview"
          style={{ transform: 'scale(0.5)', transformOrigin: 'top center' }}
        />
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        <Button
          onClick={handleDownloadPDF}
          className="gap-2 bg-gradient-to-r from-primary to-accent"
        >
          <Download className="w-5 h-5" />
          Imprimir/Salvar PDF
        </Button>

        <Button
          onClick={handleCopyHTML}
          variant="outline"
          className="gap-2"
        >
          <Copy className="w-5 h-5" />
          Copiar HTML
        </Button>

        <Button
          onClick={handleShare}
          className="gap-2 bg-gradient-to-r from-accent to-primary"
        >
          <Share2 className="w-5 h-5" />
          Compartilhar
        </Button>
      </div>

      <Card className="p-4 bg-muted/30">
        <h4 className="font-semibold mb-2 text-sm">💡 Como usar seu certificado:</h4>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• <strong>Imprimir/PDF:</strong> Use Ctrl+P (Cmd+P no Mac) para salvar como PDF</li>
          <li>• <strong>Copiar HTML:</strong> Cole em um arquivo .html e abra no navegador</li>
          <li>• <strong>Compartilhar:</strong> Texto pronto para LinkedIn e redes sociais</li>
        </ul>
      </Card>
    </div>
  );
};
