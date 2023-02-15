import DefaultGlyph from '../../../assets/default/glyph/unknown-format';
import type { Glyphs } from '../../..';
import SvgSymbolStore from '../../SvgSymbolStore';

import { mapToFilePath } from './mapToFilePath';
import { createGlyphsRequireContext } from './createGlyphsRequireContext';

export const GlyphStore = new SvgSymbolStore<Glyphs>(createGlyphsRequireContext(), DefaultGlyph, mapToFilePath);
