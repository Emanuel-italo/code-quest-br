import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, Lightbulb, Code2 } from "lucide-react";
import { Level, Question } from "@/data/gameData";
import { Badge } from "@/components/ui/badge";

interface GamePlayProps {
  level: Level;
  onLevelComplete: (score: number) => void;
  currentLevelNumber: number;
  totalLevels: number;
}

export const GamePlay = ({ level, onLevelComplete, currentLevelNumber, totalLevels }: GamePlayProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showHint, setShowHint] = useState(0); // 0 = no hint, 1 = hint1, 2 = hint2
  const [score, setScore] = useState(0);

  const currentQuestion = level.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === level.questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / level.questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowFeedback(true);
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      const points = showHint === 0 ? 10 : showHint === 1 ? 7 : 5;
      setScore(score + points);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onLevelComplete(score);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setShowHint(0);
    }
  };

  const handleHint = () => {
    if (showHint < 2) {
      setShowHint(showHint + 1);
    }
  };

  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-4xl mx-auto py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="text-sm">
              Nível {currentLevelNumber} de {totalLevels}
            </Badge>
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="font-semibold text-lg">{score} pontos</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-2">{level.title}</h2>
          <p className="text-muted-foreground mb-4">{level.description}</p>
          
          <Progress value={progress} className="h-2" />
        </div>

        {/* Concept Box */}
        {currentQuestionIndex === 0 && !showFeedback && (
          <Card className="p-6 mb-6 bg-primary/5 border-primary/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              Conceito Principal
            </h3>
            <p className="text-sm">{level.concept}</p>
          </Card>
        )}

        {/* Question Card */}
        <Card className="p-8 shadow-lg">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">
                Questão {currentQuestionIndex + 1} de {level.questions.length}
              </h3>
              {!showFeedback && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleHint}
                  disabled={showHint >= 2}
                  className="gap-2"
                >
                  <Lightbulb className="w-4 h-4" />
                  Dica {showHint > 0 ? `(${showHint}/2)` : ''}
                </Button>
              )}
            </div>
            
            <p className="text-lg mb-4">{currentQuestion.question}</p>
            
            {currentQuestion.code && (
              <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4 overflow-x-auto">
                <pre>{currentQuestion.code}</pre>
              </div>
            )}

            {/* Hints */}
            {showHint > 0 && !showFeedback && (
              <div className="bg-secondary/10 border border-secondary/30 p-4 rounded-lg mb-4">
                <p className="text-sm">
                  <strong>💡 Dica {showHint}:</strong>{' '}
                  {showHint === 1 ? currentQuestion.hint1 : currentQuestion.hint2}
                </p>
              </div>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const showCorrect = showFeedback && index === currentQuestion.correctAnswer;
              const showWrong = showFeedback && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showCorrect
                      ? 'border-success bg-success/10'
                      : showWrong
                      ? 'border-destructive bg-destructive/10'
                      : isSelected
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50 hover:bg-muted/50'
                  } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showCorrect && <CheckCircle2 className="w-5 h-5 text-success" />}
                    {showWrong && <XCircle className="w-5 h-5 text-destructive" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <Card className={`p-4 mb-6 ${isCorrect ? 'bg-success/10 border-success/30' : 'bg-destructive/10 border-destructive/30'}`}>
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                ) : (
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                )}
                <div>
                  <h4 className="font-semibold mb-1">
                    {isCorrect ? '🎉 Correto!' : '❌ Não foi dessa vez'}
                  </h4>
                  <p className="text-sm">{currentQuestion.explanation}</p>
                  {isCorrect && showHint > 0 && (
                    <p className="text-xs mt-2 text-muted-foreground">
                      +{showHint === 1 ? '7' : '5'} pontos (dica usada)
                    </p>
                  )}
                  {isCorrect && showHint === 0 && (
                    <p className="text-xs mt-2 text-muted-foreground">
                      +10 pontos (sem dicas!)
                    </p>
                  )}
                </div>
              </div>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            {!showFeedback ? (
              <Button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className="flex-1"
                size="lg"
              >
                Confirmar Resposta
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="flex-1"
                size="lg"
              >
                {isLastQuestion ? 'Concluir Nível' : 'Próxima Questão'}
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
