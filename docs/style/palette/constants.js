import BlackSource from '!!raw-loader!./examples/Black';
import WhiteSource from '!!raw-loader!./examples/White';
import ColorSource from '!!raw-loader!./examples/Color';

export const PALETTE = [
  { title: 'black', name: 'palette-black', hex: '#000000', rgb: '0 0 0', exampleCode: BlackSource },
  { title: 'white', name: 'palette-white', hex: '#ffffff', rgb: '255 255 255', exampleCode: WhiteSource },
  { title: 'indigo', name: 'palette-indigo', hex: '#4020E0', rgb: '64 32 224', exampleCode: ColorSource },
  { title: 'purple', name: 'palette-purple', hex: '#6020E0', rgb: '96 32 224' },
  { title: 'blue', name: 'palette-blue', hex: '#0060FF', rgb: '0 96 255' },
  { title: 'green', name: 'palette-green', hex: '#00C060', rgb: '0 192 96' },
  { title: 'yellow', name: 'palette-yellow', hex: '#FFA020', rgb: '255 160 32' },
  { title: 'red', name: 'palette-red', hex: '#FF6040', rgb: '255 96 64' },
];
