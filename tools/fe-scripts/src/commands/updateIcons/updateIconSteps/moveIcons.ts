import * as path from 'path';

import fs from 'fs-extra';

import { Config } from '../createConfig';
import { IconsInfoMap } from '../interfaces';

const moveIcons = async (iconsInfo: IconsInfoMap, config: Config) => {
  fs.removeSync(config.targetPathIcons);
  fs.mkdirSync(config.targetPathIcons, { recursive: true });

  for (const info of Object.values(iconsInfo).filter((icon) => !icon.link)) {
    const sectionTargetPath = path.resolve(config.targetPathIcons, info.sectionName);
    await fs.ensureDir(sectionTargetPath);
    await fs.copy(info.originTSXPath, path.resolve(sectionTargetPath, info.targetPath));
  }
};

export default moveIcons;
