import config from '@pcbl/fe-scripts/configs/rollup.config';
import pkg from './package.json';

const commonConfig = config.getConfig(pkg, true);

const addIconsPlugin = config.getAddInputPlugin({
  filesDirName: './src/assets',
  additionalInputs: ['./src/utils/icon/mapPropsToIcons.ts'],
});
const addBaseStylesPlugin = config.getAddBaseStyles(["import '@kit-base/icon/build/index.css';\n"]);

export default [{ ...commonConfig, plugins: [...commonConfig.plugins, addIconsPlugin(), addBaseStylesPlugin()] }];
