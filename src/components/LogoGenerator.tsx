import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Download, Wand2 } from 'lucide-react';

interface LogoGeneratorProps {
  onLogoGenerated: (logoUrl: string) => void;
}

const LogoGenerator = ({ onLogoGenerated }: LogoGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLogoUrl, setGeneratedLogoUrl] = useState<string | null>(null);

  const generateLogo = async () => {
    setIsGenerating(true);
    try {
      // Use a placeholder logo for now - you can integrate with any AI service later
      const placeholderLogo = '/placeholder.svg';
      setGeneratedLogoUrl(placeholderLogo);
      onLogoGenerated(placeholderLogo);
      toast.success('Logo generated successfully!');
    } catch (error) {
      console.error('Error generating logo:', error);
      toast.error('Failed to generate logo. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadLogo = async () => {
    if (!generatedLogoUrl) return;
    
    try {
      const response = await fetch(generatedLogoUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'servercanine-logo-generated.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      toast.success('Logo downloaded!');
    } catch (error) {
      toast.error('Failed to download logo');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-5 w-5" />
          Generate New Logo
        </CardTitle>
        <CardDescription>
          Create a professional servercanine logo.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={generateLogo} 
          disabled={isGenerating}
          className="w-full"
        >
          {isGenerating ? 'Generating...' : 'Generate Clean Logo'}
        </Button>

        {generatedLogoUrl && (
          <div className="space-y-3">
            <div className="p-4 bg-muted/30 rounded-lg">
              <img 
                src={generatedLogoUrl} 
                alt="Generated servercanine logo" 
                className="w-full h-32 object-contain"
              />
            </div>
            <Button 
              onClick={downloadLogo}
              variant="outline"
              className="w-full"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Logo
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LogoGenerator;
