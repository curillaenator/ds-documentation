import fs from 'fs-extra';

import { baseConfig } from '../baseConfig';
import { IconsInfoMap } from '../interfaces';

const transformIcon = (str: string): string =>
  Object.keys(baseConfig.transformIcon).reduce(
    (acc, key) =>
      // @ts-ignore
      acc.replace(new RegExp(key, 'g'), config.transformIcon[key]),
    str,
  );

const clearIcon = (str: string): string => baseConfig.clearIcon.reduce((acc, item) => acc.replace(item, ''), str);

const clearIcons = (iconsInfo: IconsInfoMap) => {
  console.log('чистка иконок от мусора');
  Object.values(iconsInfo).forEach((icon) => {
    let file = fs.readFileSync(icon.originSvgPath).toString();
    file = clearIcon(file);
    file = transformIcon(file);

    fs.writeFileSync(icon.originSvgPath, file);
  });
};

export default clearIcons;
