import { useState, useEffect } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  userAgent: string;
}

export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    userAgent: ''
  });

  useEffect(() => {
    const userAgent = navigator.userAgent;
    
    // Mobile detection - comprehensive patterns
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(userAgent);
    
    // Tablet detection - specific patterns
    const isTablet = /iPad|Android(?!.*Mobile)|Tablet/i.test(userAgent);
    
    // Desktop detection - everything else
    const isDesktop = !isMobile && !isTablet;

    setDeviceInfo({
      isMobile: isMobile && !isTablet, // Mobile but not tablet
      isTablet,
      isDesktop,
      userAgent
    });
  }, []);

  return deviceInfo;
}

// Utility functions for specific use cases
export const getPhoneUrl = (phoneNumber: string): string => {
  return `tel:${phoneNumber.replace(/\s/g, '')}`;
};

export const getSmsUrl = (phoneNumber: string, message?: string): string => {
  const cleanNumber = phoneNumber.replace(/\s/g, '');
  return message 
    ? `sms:${cleanNumber}?body=${encodeURIComponent(message)}`
    : `sms:${cleanNumber}`;
};

export const getEmailUrl = (email: string, subject?: string, body?: string): string => {
  let url = `mailto:${email}`;
  const params = [];
  
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  
  if (params.length > 0) {
    url += `?${params.join('&')}`;
  }
  
  return url;
};