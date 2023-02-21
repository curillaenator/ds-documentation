/* eslint-disable import/no-webpack-loader-syntax, import/extensions */

// @ts-expect-error
import base from '!!raw-loader!./Base.tsx';

export { base };
