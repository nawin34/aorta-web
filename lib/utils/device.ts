import MobileDetect from 'mobile-detect';

export function getDeviceType(userAgent: string) {
  const md = new MobileDetect(userAgent);
  
  if (md.is('iOS')) {
    return 'ios';
  } else if (md.is('AndroidOS')) {
    return 'android';
  }
  return 'web';
}

export const storeLinks = {
  ios: 'https://apps.apple.com/app/your-app',
  android: 'https://play.google.com/store/apps/details?id=your.app',
};