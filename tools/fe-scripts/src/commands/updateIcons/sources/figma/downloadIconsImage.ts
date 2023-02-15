/* eslint-disable no-unused-vars */

import fs from 'fs-extra';
import cliProgress from 'cli-progress';

import { IconsInfoMap } from '../../interfaces';
import downloadFile from '../../utils/downloadFile';
import { Config } from '../../createConfig';

import getImagesLink from './getImageslink';
import { sleep } from '../../utils/sleep';

const downloadIconsImage = async (
  iconsMap: IconsInfoMap,
  { token, file, chunkSize, targetPathDefaultIcon }: Config,
) => {
  console.log('загрузка списка зеркал для изображений');
  const imagesMap: { [key: string]: string } = {};
  const iconsKeys: string[] = Object.keys(iconsMap);

  const iconsMapProgress = new cliProgress.SingleBar({}, cliProgress.Presets.rect);
  iconsMapProgress.start(iconsKeys.length, 0);

  for (let i = 0; i < iconsKeys.length / chunkSize; i += 1) {
    const iconIds = iconsKeys.slice(chunkSize * i, chunkSize * (i + 1));

    const images = await getImagesLink(iconIds, file, token);
    Object.keys(images).forEach((key) => {
      imagesMap[key] = images[key];
    });
    iconsMapProgress.update(chunkSize * (i + 1));
  }
  iconsMapProgress.stop();

  console.log('загрузка изображений');
  const iconsDownloadedProgress = new cliProgress.SingleBar({}, cliProgress.Presets.rect);
  iconsDownloadedProgress.start(iconsKeys.length, 0);

  for (let i = 0; i < iconsKeys.length; i += 1) {
    const id = iconsKeys[i];

    const url = imagesMap[id] as string;
    let failedCounter = 0;
    while (true) {
      if (!fs.existsSync(iconsMap[id].originSvgPath)) {
        if (failedCounter > 0) {
          await sleep(100);
        }
        await downloadFile(iconsMap[id].originSvgPath, url);
      }
      failedCounter += 1;
      if (failedCounter > 10) {
        const isOldVersionExists = fs.existsSync(iconsMap[id].targetPath);
        const fallBackPath = isOldVersionExists ? iconsMap[id].targetPath : targetPathDefaultIcon;
        fs.copyFileSync(fallBackPath, iconsMap[id].originSvgPath);

        console.error(
          new Error(`ошибка загрузки файла ${iconsMap[id].fullName} ${url}, используется фоллбек ${fallBackPath}`),
        );
      }
      const file = fs.readFileSync(iconsMap[id].originSvgPath).toString();
      if (file.includes('</svg>')) {
        break;
      }
      fs.unlinkSync(iconsMap[id].originSvgPath);
    }
    iconsDownloadedProgress.update(i + 1);
  }
  iconsDownloadedProgress.stop();
};

export default downloadIconsImage;
