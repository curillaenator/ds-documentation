import json from '@site/packages/theme/src/dist/XYZ.json';
import rgbHex from 'rgb-hex';
import hexRgb from 'hex-rgb';

import { CardProps } from '../interfaces';

const { color } = json.values.style;

const COLOR_NAMES = [
  'neutral',
  'accent-1',
  'accent-2',
  'primary',
  'informative',
  'secondary',
  'positive',
  'attention',
  'negative',
];

const reHEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const reKEY = /^.*-[1-9]00$/;

const hexToRgba = (hex: string) => {
  const { red, green, blue, alpha } = hexRgb(hex);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};
const rgbaToHex = (rgba: string) => `#${rgbHex(rgba)}`;

export const COLORS: Record<string, CardProps[]> = Object.fromEntries(
  COLOR_NAMES.map((name) => {
    const current = [];

    for (const key in color) {
      if (key.includes(name) && reKEY.test(key)) {
        const hexTest = reHEX.test(color[key].value);

        const hexValue = hexTest ? color[key].value : rgbaToHex(color[key].value);

        const hexColor = `HEX: ${hexValue}`;
        const rgbColor = `RGB: ${hexTest ? hexToRgba(color[key].value) : color[key].value}`;

        current.push({
          title: key,
          subtitles: [hexColor, rgbColor],
          name: `color/${key}`,
          valueStyle: { backgroundColor: hexValue },
        });
      }
    }

    return [name, current];
  }),
);
