import * as path from 'path';

import fs from 'fs-extra';

import { IconInfo, IconsInfoMap } from '../interfaces';
import { Config } from '../createConfig';

type IconSectionMap = {
  [key: string]: IconInfo[];
};

type SectionInfo = {
  name: string;
};

const updateIconsMap = (iconsMap: IconsInfoMap, config: Config) => {
  const iconsInfoBySections = Object.values(iconsMap).reduce<IconSectionMap>((acc, icon) => {
    const key = icon.sectionName || 'old';
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(icon);

    return acc;
  }, {});

  const sections: SectionInfo[] = [];
  // sections.push({
  //  name: 'deprecatedIconStore',
  // });
  Object.keys(iconsInfoBySections).forEach((sectionName) => {
    let file: string[] = [];
    const icons = iconsInfoBySections[sectionName].filter(
      (value1, index, list) => list.findIndex((value2) => value2.targetPath === value1.targetPath) === index,
    );

    const sectionMapName = `${sectionName || 'old'}IconStore`;

    file.push(`const ${sectionMapName} = {`);

    const map = icons.map((icon) => {
      let relativePath = path.relative(config.targetPathIcons, icon.targetPath);
      if (process.platform === 'win32') {
        relativePath = relativePath.split(path.sep).join(path.posix.sep);
      }
      return `  '${icon.iconMapKey}': './${relativePath}',`;
    });

    file = file.concat(map);
    file.push('};');
    file.push('');
    file.push(`export default ${sectionMapName};`);
    file.push('');
    fs.mkdirSync(config.targetPathMapDir, { recursive: true });
    const sectionMapPath = path.resolve(config.targetPathMapDir, `${sectionMapName}.ts`);
    fs.writeFileSync(sectionMapPath, file.join('\n'));

    sections.push({
      name: sectionMapName,
    });
  });

  const fullMapFile = [];
  sections.forEach((section) => {
    fullMapFile.push(`import ${section.name} from './${section.name}';`);
  });
  fullMapFile.push('');
  fullMapFile.push('export const mapPropsToIcons = {');
  sections.forEach((section) => {
    fullMapFile.push(`  ...${section.name},`);
  });
  fullMapFile.push('};');
  fullMapFile.push('');
  fs.writeFileSync(config.targetPathMap, fullMapFile.join('\n'));
};

export default updateIconsMap;
