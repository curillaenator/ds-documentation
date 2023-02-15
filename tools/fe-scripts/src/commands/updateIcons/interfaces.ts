import { FigmaElement } from './sources/figma/responces.interface';

export interface IconInfo {
  iconName: string;
  iconMapKey: string;
  sectionName: string;
  fullName: string;

  targetPath: string;
  originSvgPath: string;
  originTSXPath: string;
  link?: IconInfo;
  originalName: string;
}

export interface IconsInfoMap {
  [key: string]: IconInfo;
}

export interface SectionInfo {
  section: FigmaElement;
  path: string;
}
