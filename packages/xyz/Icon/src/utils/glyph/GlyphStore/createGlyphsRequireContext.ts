import DefaultGlyph from '../../../assets/default/glyph/unknown-format';
import type { CreateRequireContextFn } from '../../SvgSymbolStore/interfaces';

const createGlyphsRequireContext: CreateRequireContextFn = () => {
  try {
    // @ts-ignore
    return require.context('../../../assets/glyphs', true, /\.(tsx|js)$/, 'lazy');
  } catch {
    return () => Promise.resolve({ default: DefaultGlyph });
  }
};

export { createGlyphsRequireContext };
