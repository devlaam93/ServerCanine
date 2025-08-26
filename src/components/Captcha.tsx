import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, Shield } from 'lucide-react';

interface CaptchaProps {
  onVerify: (isValid: boolean) => void;
  isValid: boolean;
  className?: string;
}

const Captcha = ({ onVerify, isValid, className = "" }: CaptchaProps) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [operation, setOperation] = useState("+");

  const generateCaptcha = () => {
    const operations = ["+", "-", "×"];
    const selectedOp = operations[Math.floor(Math.random() * operations.length)];
    setOperation(selectedOp);

    if (selectedOp === "+") {
      setNum1(Math.floor(Math.random() * 20) + 1);
      setNum2(Math.floor(Math.random() * 20) + 1);
    } else if (selectedOp === "-") {
      const larger = Math.floor(Math.random() * 30) + 10;
      const smaller = Math.floor(Math.random() * larger);
      setNum1(larger);
      setNum2(smaller);
    } else { // multiplication
      setNum1(Math.floor(Math.random() * 10) + 1);
      setNum2(Math.floor(Math.random() * 10) + 1);
    }
    
    setUserAnswer("");
    onVerify(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    if (userAnswer.trim() === "") {
      onVerify(false);
      return;
    }

    const correctAnswer = getCorrectAnswer();
    const isCorrect = parseInt(userAnswer) === correctAnswer;
    onVerify(isCorrect);
  }, [userAnswer, num1, num2, operation]);

  const getCorrectAnswer = () => {
    switch (operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "×":
        return num1 * num2;
      default:
        return 0;
    }
  };

  const handleRefresh = () => {
    generateCaptcha();
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <Label className="text-sm font-medium flex items-center gap-2">
        <Shield className="h-4 w-4 text-primary" />
        Security Verification
      </Label>
      
      <Card className="border-2 border-dashed border-muted-foreground/20 bg-muted/30">
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-lg font-mono font-bold bg-background px-3 py-2 rounded border">
                {num1} {operation} {num2} = ?
              </div>
              
              <Input
                type="number"
                placeholder="Answer"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className={`w-20 text-center font-mono ${
                  userAnswer && isValid 
                    ? 'border-green-500 bg-green-50' 
                    : userAnswer && !isValid 
                    ? 'border-red-500 bg-red-50' 
                    : ''
                }`}
                required
              />
            </div>
            
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleRefresh}
              className="h-8 w-8 p-0"
              title="Generate new question"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-2 text-xs text-muted-foreground">
            {userAnswer && isValid && (
              <span className="text-green-600 flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Verification successful
              </span>
            )}
            {userAnswer && !isValid && (
              <span className="text-red-600">
                Incorrect answer. Please try again.
              </span>
            )}
            {!userAnswer && (
              <span>
                Please solve the math problem to verify you're human
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Captcha;
