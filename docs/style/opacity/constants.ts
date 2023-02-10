import json from '@site/packages/theme/src/dist/XYZ.json';

const opacitiesJson = json.values.style['opacity'] as Record<string, { value: string }>;

export const OPACITIES = Object.entries(opacitiesJson).map(([key, { value }]) => ({
  title: `opacity-${key}`,
  name: `opacity/${key}`,
  value,
}));

export const OPACITIES_LAYOUT = [
  { from: 0, to: 1, cols: 1, mb: 32 },
  { from: 1, to: 3, cols: 2, mb: 32 },
  { from: 3, to: 6, cols: 3, mb: 32 },
  { from: 6, to: 8, cols: 2, mb: 32 },
  { from: 8, to: undefined, cols: 3, mb: 0 },
];
