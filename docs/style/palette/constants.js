import hexRgb from 'hex-rgb';

import CardSource from '!!raw-loader!../components/Card';
import BlackSource from '!!raw-loader!./examples/Black';
import WhiteSource from '!!raw-loader!./examples/White';
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
