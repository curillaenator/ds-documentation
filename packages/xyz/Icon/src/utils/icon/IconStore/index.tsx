import DefaultIcon from '../../../assets/default/icon/ic-kosyak';
import type { Icons } from '../../..';
import SvgSymbolStore from '../../SvgSymbolStore';

import { mapToFilePath } from './mapToFilePath';
import { createRequireContext } from './createRequireContext';

export const IconsStore = new SvgSymbolStore<Icons>(createRequireContext(), DefaultIcon, mapToFilePath);
