import Gradient from 'javascript-color-gradient';
import hexRgb from 'hex-rgb';

import json from '@site/packages/theme/src/dist/XYZ.json';

// @ts-expect-error no types
import CardSource from '!!raw-loader!../components/Card';
// @ts-expect-error no types
import BlackSource from '!!raw-loader!./examples/Black';
// @ts-expect-error no types
import WhiteSource from '!!raw-loader!./examples/White';
// @ts-expect-error no types
import ColorSource from '!!raw-loader!./examples/Color';

const COLOR_JSON = json.values.style.palette;

const c = (colorName: string) => COLOR_JSON[colorName].value;

export const DEFAULT = [
  { title: 'black', hex: c('black'), exampleCode: BlackSource },
  { title: 'white', hex: c('white'), exampleCode: WhiteSource },
  { title: 'indigo', hex: c('indigo-700'), exampleCode: ColorSource },
  { title: 'purple', hex: c('purple-700') },
  { title: 'blue', hex: c('blue-700') },
  { title: 'green', hex: c('green-700') },
  { title: 'yellow', hex: c('yellow-700') },
  { title: 'red', hex: c('red-700'), exampleCode: CardSource },
];

const hexToRgba = (hex) => {
  const { red, green, blue, alpha } = hexRgb(hex);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

export const PALETTE = DEFAULT.map((palette) => {
  return {
    ...palette,
    title: palette.title,
    subtitles: [`HEX: ${palette.hex}`, `RGB: ${hexToRgba(palette.hex)}`],
    name: `palette-${palette.title}`,
    valueStyle: { backgroundColor: palette.hex },
  };
});

// Sample combination

const makeGradient = (from: string, to: string, steps = 25): string[] => {
  return [from, ...new Gradient().setColorGradient(from, to).setMidpoint(steps).getColors()];
};

interface MatrixColor {
  value: string;
  position: { x: number; y: number };
}

const makeColorMatrix = (hexColor: string, darkest: string, lightest: string): MatrixColor[] => {
  const colorToDarkest = makeGradient(hexColor, darkest);
  const lightestToDarkest = makeGradient(lightest, darkest);

  return colorToDarkest
    .map((color, y) =>
      makeGradient(color, lightestToDarkest[y]).map((color, x) => ({ value: color, position: { x, y } })),
    )
    .flat();
};

export const DOT_POSITIONS_MATRIX = ['25_3', '25_12', '25_21', '25_23', '25_24'];
export const COLOR_MATRIX = makeColorMatrix(c('blue-700'), c('neutral-700'), c('white'));

const makeColorRow = (mid: string) => {
  const start = c('neutral-700');
  const end = c('white');

  const startToMid = makeGradient(start, mid, 25);
  startToMid.pop();
  const midToEnd = makeGradient(mid, end, 25);

  return [...startToMid, ...midToEnd].map((color, x) => ({ value: color, position: { x, y: 0 } }));
};

export const DOT_POSITIONS_ROW = ['25_0', '27_0', '31_0', '37_0', '42_0', '46_0', '48_0'];
export const INDIGO = makeColorRow(c('indigo-700'));
export const PURPLE = makeColorRow(c('purple-700'));
export const BLUE = makeColorRow(c('blue-700'));
export const GREEN = makeColorRow(c('green-700'));
export const YELLOW = makeColorRow(c('yellow-700'));
export const RED = makeColorRow(c('red-700'));
