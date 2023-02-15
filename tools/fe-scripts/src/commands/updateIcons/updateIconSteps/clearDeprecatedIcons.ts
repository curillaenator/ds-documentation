import * as path from 'path';

import fs from 'fs-extra';

import { IconInfo, IconsInfoMap } from '../interfaces';
import { Config } from '../createConfig';

const clearDeprecatedIcons = (deprecatedIcons: IconsInfoMap, config: Config) => {
  const file = fs.readFileSync(config.deprecatedPathMap).toString().split('\n');

  Object.values(deprecatedIcons)
    .filter((i) => i.link)
    .forEach((icon) => {
      const link = icon.link as IconInfo;
      const relativePathToIcon = path.relative(config.targetPathMapDir, link.targetPath);
      const rowIndex = file.findIndex((line) => line.includes(icon.fullName));
      file[rowIndex] = file[rowIndex].replace(/'.*'/g, `'${relativePathToIcon}'`);

      fs.removeSync(icon.targetPath);
    });

  fs.writeFileSync(config.deprecatedPathMap, file.join('\n'));
};

export default clearDeprecatedIcons;
