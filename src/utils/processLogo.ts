import { removeBackground, loadImageFromUrl } from './backgroundRemoval';
import servercanineLogo from '@/assets/servercanine-logo-new.png';

export const processLogoWithoutBackground = async (): Promise<string> => {
  try {
    console.log('Loading logo image...');
    const imageElement = await loadImageFromUrl(servercanineLogo);
    
    console.log('Removing background from logo...');
    const processedBlob = await removeBackground(imageElement);
    
    // Create object URL for the processed image
    const processedUrl = URL.createObjectURL(processedBlob);
    console.log('Logo background removed successfully');
    
    return processedUrl;
  } catch (error) {
    console.error('Error processing logo:', error);
    // Fallback to original logo if processing fails
    return servercanineLogo;
  }
};