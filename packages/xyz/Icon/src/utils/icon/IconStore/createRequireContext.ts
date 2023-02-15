import DefaultIcon from '../../../assets/default/icon/ic-kosyak';
import type { CreateRequireContextFn } from '../../SvgSymbolStore/interfaces';

const createRequireContext: CreateRequireContextFn = () => {
  try {
    // @ts-ignore
    return require.context('../../../assets/icons', true, /\.(tsx|js)$/, 'lazy');
  } catch {
    return () => Promise.resolve({ default: DefaultIcon });
  }
};

export { createRequireContext };
