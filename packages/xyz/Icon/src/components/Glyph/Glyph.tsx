import React, { useContext, useMemo, FC } from 'react';
import { Icon as BaseGlyph } from '@kit-base/icon';

import { GlyphsStoreContext } from '../../contexts';

import { DEFAULT_SIZE, DEFAULT_TEST_ID } from './constants';
import { GlyphProps } from './interfaces';

const Glyph: FC<GlyphProps> = (props) => {
  const { size = DEFAULT_SIZE, name, dataTestId = DEFAULT_TEST_ID } = props;
  const sizeStyle = { width: size };
  const glyphStore = useContext(GlyphsStoreContext);
  const GlyphComponent = useMemo(() => glyphStore.get(name), [glyphStore, name]);

  return (
    <BaseGlyph data-icon-name={name} {...props} dataTestId={dataTestId} style={sizeStyle} component={GlyphComponent} />
  );
};

export { Glyph };
