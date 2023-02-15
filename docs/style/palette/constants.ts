/* eslint-disable import/no-webpack-loader-syntax, import/extensions */

import Gradient from 'javascript-color-gradient';
import hexRgb from 'hex-rgb';
import json from '@site/packages/theme/src/dist/XYZ.json';

// @ts-expect-error no types
import CardSource from '!!raw-loader!../components/Card.tsx';
// @ts-expect-error no types
import BlackSource from '!!raw-loader!./examples/Black.ts';
// @ts-expect-error no types
import WhiteSource from '!!raw-loader!./examples/White.ts';
// @ts-expect-error no types
import ColorSource from '!!raw-loader!./examples/Color.ts';

const COLOR_JSON = json.values.style.palette;

//
const getColor = (colorName: string) => COLOR_JSON[colorName].value;

export const DEFAULT = [
  { title: 'black', hex: getColor('black'), exampleCode: BlackSource },
  { title: 'white', hex: getColor('white'), exampleCode: WhiteSource },
  { title: 'indigo', hex: getColor('indigo-700'), exampleCode: ColorSource },
  { title: 'purple', hex: getColor('purple-700') },
  { title: 'blue', hex: getColor('blue-700') },
  { title: 'green', hex: getColor('green-700') },
  { title: 'yellow', hex: getColor('yellow-700') },
  { title: 'red', hex: getColor('red-700'), exampleCode: CardSource },
];

const hexToRgba = (hex: string) => {
  const { red, green, blue, alpha } = hexRgb(hex);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

export const PALETTE = DEFAULT.map((palette) => ({
  ...palette,
  title: palette.title,
  subtitles: [`HEX: ${palette.hex}`, `RGB: ${hexToRgba(palette.hex)}`],
  name: `palette-${palette.title}`,
  valueStyle: { backgroundColor: palette.hex },
}));

// Sample combination

const makeGradient = (from: string, to: string, steps = 25): string[] =>
  // конструктор возвращает набор steps цветов, включая последний, но не первый. первый добавляется
  [from, ...new Gradient().setColorGradient(from, to).setMidpoint(steps).getColors()];
interface MatrixColor {
  value: string;
  position: { x: number; y: number };
}

const makeColorMatrix = (hexColor: string, darkest: string, lightest: string): MatrixColor[] => {
  const colorToDarkest = makeGradient(hexColor, darkest);
  const lightestToDarkest = makeGradient(lightest, darkest);

  return colorToDarkest
    .map((color, y) => makeGradient(color, lightestToDarkest[y]).map((c, x) => ({ value: c, position: { x, y } })))
    .flat();
};

export const DOT_POSITIONS_MATRIX = ['25_3', '25_12', '25_21', '25_23', '25_24'];
export const COLOR_MATRIX = makeColorMatrix(getColor('blue-700'), getColor('neutral-700'), getColor('white'));

const makeColorRow = (mid: string) => {
  // start и end не меняются
  const start = getColor('neutral-700');
  const end = getColor('white');

  // в строке цветов 51 элемент, где 26ой эл - основной цвет. pop нужен ввиду специфики работы makeGradient
  const startToMid = makeGradient(start, mid, 25);
  startToMid.pop();
  const midToEnd = makeGradient(mid, end, 25);

  // возвращаеется массив из 51 элемента с ремапом в нужный формат
  return [...startToMid, ...midToEnd].map((color, x) => ({ value: color, position: { x, y: 0 } }));
};

export const DOT_POSITIONS_ROW = ['25_0', '27_0', '31_0', '37_0', '42_0', '46_0', '48_0'];
export const INDIGO = makeColorRow(getColor('indigo-700'));
export const PURPLE = makeColorRow(getColor('purple-700'));
export const BLUE = makeColorRow(getColor('blue-700'));
export const GREEN = makeColorRow(getColor('green-700'));
export const YELLOW = makeColorRow(getColor('yellow-700'));
export const RED = makeColorRow(getColor('red-700'));
