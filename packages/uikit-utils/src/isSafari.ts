import { parse } from 'bowser';

/**
 * функция для проверки равенства текущего браузера и Safari
 * @returns {boolean} текущий браузер === Safari
 */
export const isSafari = (): boolean => parse && parse(window.navigator.userAgent).browser.name === 'Safari';
