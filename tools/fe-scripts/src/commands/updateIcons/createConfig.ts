import * as path from 'path';
import { baseConfig } from './baseConfig';

const createConfig = (file: string, token: string, nodes: string, dist: string) => {
  const targetPath = path.resolve(dist);
  const targetPathIcons = path.resolve(targetPath, './assets/icons');
  const targetPathDefaultIcon = path.resolve(__dirname, './assets/default/ic-kosyak.svg');
  const deprecatedIconsPath = path.resolve(targetPath, './assets/deprecated');
  const targetPathMapDir = path.resolve(targetPath, './utils/icons');
  const targetPathMap = path.resolve(targetPathMapDir, './mapPropsToIcons.ts');
  const deprecatedPathMap = path.resolve(targetPathMapDir, './deprecatedIconStore.ts');

  return {
    apiPath: `/v1/files/${file}/nodes/?ids=${nodes}`,
    imagesApiPath: ``,
    enableCache: true,

    token: token,
    file: file,
    nodes: nodes.split(','),
    dist,
    ...baseConfig,
    targetPath,
    targetPathIcons,
    targetPathMapDir,
    targetPathMap,
    targetPathDefaultIcon,
    deprecatedIconsPath,
    deprecatedPathMap,
  };
};

type Config = ReturnType<typeof createConfig>;

export { createConfig, Config };
