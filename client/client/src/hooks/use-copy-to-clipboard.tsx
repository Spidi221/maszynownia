import { useState, useCallback } from 'react';

interface UseCopyToClipboardReturn {
  copied: boolean;
  copyToClipboard: (text: string) => Promise<boolean>;
  resetCopied: () => void;
}

export function useCopyToClipboard(resetDelay: number = 2000): UseCopyToClipboardReturn {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      
      if (resetDelay > 0) {
        setTimeout(() => setCopied(false), resetDelay);
      }
      
      return true;
    } catch (error) {
      console.warn('Failed to copy to clipboard:', error);
      
      // Fallback for older browsers
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          setCopied(true);
          if (resetDelay > 0) {
            setTimeout(() => setCopied(false), resetDelay);
          }
        }
        
        return successful;
      } catch (fallbackError) {
        console.warn('Fallback copy method also failed:', fallbackError);
        return false;
      }
    }
  }, [resetDelay]);

  const resetCopied = useCallback(() => {
    setCopied(false);
  }, []);

  return {
    copied,
    copyToClipboard,
    resetCopied,
  };
}