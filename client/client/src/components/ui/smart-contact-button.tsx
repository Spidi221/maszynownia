import { useDeviceDetection, getPhoneUrl, getSmsUrl } from '@/hooks/use-device-detection';
import { Phone, MessageSquare, Copy, Check, Mail } from 'lucide-react';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

interface SmartContactButtonProps {
  phoneNumber: string;
  variant?: 'call' | 'sms' | 'email';
  className?: string;
  children?: React.ReactNode;
  smsMessage?: string;
}

export function SmartContactButton({ 
  phoneNumber, 
  variant = 'call', 
  className = '', 
  children,
  smsMessage 
}: SmartContactButtonProps) {
  const { isMobile } = useDeviceDetection();
  const { copied, copyToClipboard } = useCopyToClipboard(2000);

  const handleDesktopClick = async () => {
    if (variant === 'email') {
      // Open default email client
      window.location.href = `mailto:${phoneNumber}`;
      return;
    }

    const success = await copyToClipboard(phoneNumber);
    if (!success) {
      // Fallback - show number in alert
      alert(`Numer telefonu: ${phoneNumber}`);
    }
  };

  const getMobileUrl = () => {
    if (variant === 'sms') {
      return getSmsUrl(phoneNumber, smsMessage);
    }
    if (variant === 'email') {
      return `mailto:${phoneNumber}`;
    }
    return getPhoneUrl(phoneNumber);
  };

  const getButtonText = () => {
    if (children) return children;
    
    if (isMobile) {
      if (variant === 'sms') return 'Wyślij SMS';
      if (variant === 'email') return 'Wyślij email';
      return 'Zadzwoń teraz';
    }
    
    if (variant === 'sms') return phoneNumber;
    if (variant === 'email') return phoneNumber;
    return phoneNumber;
  };

  const getIcon = () => {
    if (copied) return <Check className="h-5 w-5" />;
    if (variant === 'sms') return <MessageSquare className="h-5 w-5" />;
    if (variant === 'email') return <Mail className="h-5 w-5" />;
    if (isMobile) return <Phone className="h-5 w-5" />;
    return <Copy className="h-5 w-5" />;
  };

  if (isMobile) {
    return (
      <a
        href={getMobileUrl()}
        className={`inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}
      >
        {getIcon()}
        {getButtonText()}
      </a>
    );
  }

  return (
    <button
      onClick={handleDesktopClick}
      className={`inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95 relative ${className}`}
      title={copied ? 'Skopiowano!' : 'Kliknij aby skopiować numer'}
    >
      {getIcon()}
      {getButtonText()}
      {copied && (
        <span className="text-sm text-green-400 absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap animate-in slide-in-from-bottom-2 fade-in duration-200">
          Skopiowano!
        </span>
      )}
    </button>
  );
}