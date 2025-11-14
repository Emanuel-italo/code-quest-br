interface CodeBlockProps {
  code: string;
}

export const CodeBlock = ({ code }: CodeBlockProps) => {
  // Função para aplicar syntax highlighting usando regex
  const highlightCode = (code: string) => {
    // Keywords do Python
    const keywords = /\b(def|class|if|elif|else|for|while|return|import|from|as|try|except|finally|with|pass|break|continue|in|not|and|or|is|None|True|False|print|input|range|len|str|int|float|list|dict|tuple|set)\b/g;
    
    // Strings
    const strings = /(['"])(?:(?=(\\?))\2.)*?\1/g;
    
    // Números
    const numbers = /\b\d+\.?\d*\b/g;
    
    // Comentários
    const comments = /(#.*$)/gm;
    
    // Funções (palavra antes de parênteses)
    const functions = /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g;
    
    let highlighted = code;
    
    // Substituir na ordem correta para evitar conflitos
    highlighted = highlighted.replace(comments, '<span class="text-muted-foreground italic">$1</span>');
    highlighted = highlighted.replace(strings, '<span class="text-success">$&</span>');
    highlighted = highlighted.replace(functions, '<span class="text-secondary">$1</span>');
    highlighted = highlighted.replace(keywords, '<span class="text-primary font-semibold">$&</span>');
    
    return highlighted;
  };

  return (
    <div className="relative bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 flex items-center gap-2 px-4">
        <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
        <div className="w-3 h-3 rounded-full bg-accent/80"></div>
        <div className="w-3 h-3 rounded-full bg-success/80"></div>
        <span className="ml-2 text-xs text-muted-foreground font-mono">python</span>
      </div>
      <pre className="p-4 pt-12 overflow-x-auto">
        <code 
          className="text-sm font-mono leading-relaxed"
          dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
        />
      </pre>
    </div>
  );
};
