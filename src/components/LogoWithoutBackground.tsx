import { useState, useEffect } from 'react';
import { processLogoWithoutBackground } from '@/utils/processLogo';
import servercanineLogo from '@/assets/servercanine-logo-new.png';

interface LogoWithoutBackgroundProps {
  className?: string;
  alt?: string;
}

const LogoWithoutBackground = ({ className = "h-12 w-12 object-contain", alt = "servercanine logo" }: LogoWithoutBackgroundProps) => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string>(servercanineLogo);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processLogo = async () => {
      try {
        const processedUrl = await processLogoWithoutBackground();
        setProcessedLogoUrl(processedUrl);
      } catch (error) {
        console.error('Failed to process logo:', error);
        // Keep the original logo as fallback
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();

    // Cleanup function to revoke object URL when component unmounts
    return () => {
      if (processedLogoUrl !== servercanineLogo) {
        URL.revokeObjectURL(processedLogoUrl);
      }
    };
  }, []);

  return (
    <img 
      src={processedLogoUrl}
      alt={alt}
      className={className}
      style={isProcessing ? { opacity: 0.7 } : {}}
    />
  );
};

export default LogoWithoutBackground;
