import hexRgb from 'hex-rgb';
import rgbHex from 'rgb-hex';

// @ts-expect-error no types
import CardSource from '!!raw-loader!../components/Card';
// @ts-expect-error no types
import BlackSource from '!!raw-loader!./examples/Black';
// @ts-expect-error no types
import WhiteSource from '!!raw-loader!./examples/White';
// @ts-expect-error no types
import ColorSource from '!!raw-loader!./examples/Color';

export const DEFAULT = [
  { title: 'black', hex: '#000000', exampleCode: BlackSource },
  { title: 'white', hex: '#ffffff', exampleCode: WhiteSource },
  { title: 'indigo', hex: '#4020E0', exampleCode: ColorSource },
  { title: 'purple', hex: '#6020E0' },
  { title: 'blue', hex: '#0060FF' },
  { title: 'green', hex: '#00C060' },
  { title: 'yellow', hex: '#FFA020' },
  { title: 'red', hex: '#FF6040', exampleCode: CardSource },
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

const newShade = (hexColor: string, magnitude: number) => {
  hexColor = hexColor.replace(`#`, ``);

  if (hexColor.length !== 6) return '#ff0000';

  const decimalColor = parseInt(hexColor, 16);

  let r = (decimalColor >> 16) + magnitude;

  r > 255 && (r = 255);
  r < 0 && (r = 0);

  let g = (decimalColor & 0x0000ff) + magnitude;

  g > 255 && (g = 255);
  g < 0 && (g = 0);

  let b = ((decimalColor >> 8) & 0x00ff) + magnitude;

  b > 255 && (b = 255);
  b < 0 && (b = 0);

  const rgb = `rgb(${r}, ${g}, ${b})`;

  return `#${rgbHex(rgb)}`;
};

const STEP = 16;

const makeColorMatrix = (hexColor) => {
  const colorsToBlack = new Array(26)
    .fill(0)
    .map((el, i) => el + i * STEP)
    .map((magnitude) => newShade(hexColor, magnitude * -1));

  return colorsToBlack.map((color) => {
    return new Array(26)
      .fill(0)
      .map((el, i) => el + i * STEP)
      .map((magnitude) => newShade(color, magnitude));
  });
};

export const COLOR_MATRIX = makeColorMatrix('#0060FF');
