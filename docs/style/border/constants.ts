import json from '@site/packages/theme/src/dist/XYZ.json';

const widths = json.values.style['border-width'] as Record<string, { value: string }>;
const radiuses = json.values.style['border-radius'] as Record<string, { value: string }>;
const styles = json.values.style['border-style'] as Record<string, { value: string }>;

export const BORDER_WIDTHS = Object.entries(widths).map(([key, { value }]) => ({
  title: key,
  subtitles: [`stroke: ${value}`, 'type: inside'],
  name: `border-width/${key}`,
  valueStyle: { border: `${value} solid var(--card-c-gn)` },
}));

export const BORDER_RADIUSES = Object.entries(radiuses).map(([key, { value }]) => ({
  title: key,
  subtitles: [`radius: ${value}`, 'type: inside'],
  name: `border-radius/${key}`,
  valueStyle: {
    border: `2px solid var(--card-c-gn)`,
    borderRadius: value,
  },
}));

export const BORDER_STYLES = Object.entries(styles).map(([key, { value }]) => ({
  title: key,
  subtitles: [`stroke: ${value}`, 'type: inside'],
  name: `border-style/${key}`,
  valueStyle: { border: `2px ${value} var(--card-c-gn)` },
}));
