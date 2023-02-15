import * as path from 'path';

import fs from 'fs-extra';

import { Config } from '../createConfig';
import { IconsInfoMap } from '../interfaces';
import createIconInfo from '../core/createIconInfo';

const getDeprecatedIcons = (config: Config) => {
  const iconsMap: IconsInfoMap = {};
  const files = fs.readdirSync(config.deprecatedIconsPath);
  const svg = files.filter((name) => name.includes('.svg'));

  svg.forEach((fileName) => {
    const name = fileName.replace('.svg', '');
    const filePath = path.resolve(config.deprecatedIconsPath, fileName);

    const iconInfo = createIconInfo(config, name, '', filePath);
    iconInfo.targetPath = filePath;
    iconsMap[iconInfo.fullName] = iconInfo;
  });

  return iconsMap;
};

export default getDeprecatedIcons;
