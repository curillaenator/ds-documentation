import { IconProps as BaseIconProps } from '@kit-base/icon';

import { mapPropsToGlyphs } from '../../utils/glyph/mapPropsToGlyphs';

export type Glyphs = keyof typeof mapPropsToGlyphs;
export interface GlyphProps extends BaseIconProps {
  /** Glyph name */
  name: Glyphs;
  /** Регулировка размера глифа. Задает размер по ширине глифа */
  size?: number;
}
