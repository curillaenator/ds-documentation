import path from 'path';

import { IconInfo } from '../interfaces';
import { Config } from '../createConfig';
import getCamelCaseName from '../utils/getCamelCaseName';
import { reservedWords } from './reservedWords';

const getNameParts = (str: string): string[] =>
  str
    .replace(/[^A-Za-z0-9]{1,}/g, ' ')
    .replace(/[A-Z]/g, (letter) => ` ${letter.toLowerCase()}`)
    .trim()
    .split(' ');

const createIconInfo = (config: Config, name: string, section: string, svgPath?: string): IconInfo => {
  const isReservedWord = reservedWords.includes(name.toLocaleLowerCase());
  const nameParts = getNameParts(name).filter((part) => part !== '');
  const iconName = getCamelCaseName(name);
  const cleanedSectionName =
    section.replace('icons', '').replace('Icons', '').replace('icon', '').replace('—', '') || 'main';
  const sectionParts = getNameParts(cleanedSectionName);
  const sectionName = getCamelCaseName(section);
  const fullName = getCamelCaseName(`${sectionName} ${iconName}`);
  const targetPath = path.resolve(config.targetPathIcons, sectionName, `${isReservedWord ? fullName : iconName}.tsx`);
  const originSvgPath = (svgPath || path.resolve(config.tempPath, `${fullName}.svg`)) as string;
  const originTSXPath = path.resolve(config.tempPath, `${fullName}.tsx`) as string;
  const iconMapKey = sectionParts.concat(nameParts).join('-').toLowerCase();

  return {
    iconMapKey,
    iconName,
    sectionName,
    originSvgPath,
    originTSXPath,
    targetPath,
    fullName,
    originalName: name,
  };
};

export default createIconInfo;
