import path from 'path';

const allowedStrokeWidth = ['1.4', '1.6', '1.8', '2.0'];

const tempPath = path.resolve(__dirname, './cache/');
const reportPath = path.resolve(__dirname, './report/');

export const baseConfig = {
  tempPath,
  reportPath,
  clearIcon: [/ width="[0-9]{1,}"/, / height="[0-9]{1,}"/, / fill="none"/],
  chunkSize: 200,
  sleep: 30000,

  checkIcon: {
    'stroke-width': allowedStrokeWidth,
  },

  filter: {
    section: [], // ['>Outline>20'],
  },
  transformIcon: {
    black: 'currentColor',
    '#000': 'currentColor',
    '#374151': 'currentColor',
    '#334155': 'currentColor',
    '#171717': 'currentColor',
    [`stroke-width="${allowedStrokeWidth[0]}"`]: 'stroke-width="inherit"',
    [`stroke-width="${allowedStrokeWidth[1]}"`]: 'stroke-width="inherit"',
    [`stroke-width="${allowedStrokeWidth[2]}"`]: 'stroke-width="inherit"',
  },
};
