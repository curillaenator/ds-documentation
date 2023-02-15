import image from '@rollup/plugin-image';
import config from '@pcbl/fe-scripts/configs/rollup.config.js';

import pkg from './package.json';

const commonConfig = config.getConfig(pkg, false);

export default [{ ...commonConfig, plugins: [image(), ...commonConfig.plugins] }];
