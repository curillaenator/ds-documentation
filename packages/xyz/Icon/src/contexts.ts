import { createContext } from 'react';

import type { ISvgSymbolStore } from './utils/SvgSymbolStore/interfaces';
import { IconsStore } from './utils/icon/IconStore';
import { GlyphStore } from './utils/glyph/GlyphStore';

import type { Glyphs, Icons } from '.';

const IconsStoreContext = createContext<ISvgSymbolStore<Icons>>(IconsStore);
const GlyphsStoreContext = createContext<ISvgSymbolStore<Glyphs>>(GlyphStore);

export { IconsStoreContext, GlyphsStoreContext };
