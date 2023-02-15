import { parse } from 'bowser';

/** Функция для проверки на планшет */
export const isMobile = (): boolean => {
  const platformType = parse(window.navigator.userAgent).platform.type;
  return platformType === 'mobile';
};
