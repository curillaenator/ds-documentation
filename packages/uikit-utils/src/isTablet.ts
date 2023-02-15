import { parse } from 'bowser';

/** Функция для проверки на планшет */
export const isTablet = (): boolean => {
  const platformType = parse(window.navigator.userAgent).platform.type;
  return platformType === 'tablet' || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
};
