import fs from 'fs-extra';

import { IconsInfoMap } from '../interfaces';
import { transform } from '@svgr/core';

const convertToTSXInline = (iconsInfo: IconsInfoMap) => {
  Object.values(iconsInfo).forEach(async (icon) => {
    const file = fs.readFileSync(icon.originSvgPath).toString();
    const iconName = icon.iconName.charAt(0).toUpperCase() + icon.iconName.slice(1);
    const jsxIcon = await transform(file, { ref: true, typescript: true }, { componentName: iconName });
    fs.writeFileSync(icon.originTSXPath, jsxIcon);
  });
};

export default convertToTSXInline;
