import config from "@pcbl/fe-scripts/configs/rollup.config.js";
import pkg from './package.json';

const commonConfig = config.getConfig(pkg, true);

const addBaseStylesPlugin = config.getAddBaseStyles(["import '@kit-base/button/build/index.css';\n"]);

export default [{ ...commonConfig, plugins: [...commonConfig.plugins, addBaseStylesPlugin()] }];