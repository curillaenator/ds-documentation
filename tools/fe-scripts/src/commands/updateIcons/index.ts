import { Command } from 'commander';

import clearIcons from './updateIconSteps/clearIcons';
import updateIconsMap from './updateIconSteps/updateIconsMap';
import moveIcons from './updateIconSteps/moveIcons';
import getFigmaIcons from './sources/getFigmaIcons';
import clearCache from './service/clearCache';
import convertToTSXInline from './updateIconSteps/convertIconsToTSXInline';
import downloadIconsImage from './sources/figma/downloadIconsImage';
import { createConfig } from './createConfig';

const run = async (cmd: Command) => {
  const rawArgs = cmd.parent.rawArgs as string[];
  const { token, dist, filename, nodes } = cmd;
  const config = createConfig(filename, token, nodes, dist);

  console.log('Иконки будут выгружены по пути: ', config.targetPath);
  if (rawArgs.includes('--clear-cache')) {
    console.log('выполнена очистка кеша');
    clearCache();
  } else {
    console.log('используются закешированные данные');
  }

  console.log('загрузка информации об иконках');
  const newIcons = await getFigmaIcons(config);
  await downloadIconsImage(newIcons, config);
  console.log('чистка иконок от мусора');
  await clearIcons(newIcons, config);

  console.log('конвертация иконок в tsx');
  await convertToTSXInline(newIcons);

  console.log('перемещение иконок в пакет');
  await moveIcons(newIcons, config);

  console.log('генерация индексирующих файлов');
  await updateIconsMap(newIcons, config);
  console.log('генерация завершена');
};

export default run;
