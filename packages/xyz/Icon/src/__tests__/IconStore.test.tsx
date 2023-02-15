import { join } from 'path';

import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';

import type { ISvgSymbolStore } from '../utils/SvgSymbolStore/interfaces';
import { mapToFilePath } from '../utils/icon/IconStore/mapToFilePath';
import { Icons } from '..';
import SvgSymbolStore from '../utils/SvgSymbolStore';

const asyncRequireContext = async (name: string) => {
  await new Promise((resolve) => setTimeout(resolve));
  return import(join('../assets/icons/', name));
};

const ICON_ACCESSIBLE_NAME = {
  DEFAULT: 'test default icon',
  GITHUB: 'test github icon',
  FALLBACK: 'test fallback icon',
};

const DefaultIconMock = () => <svg role='img' aria-label={ICON_ACCESSIBLE_NAME.DEFAULT} />;
const GithubIconMock = () => <svg role='img' aria-label={ICON_ACCESSIBLE_NAME.GITHUB} />;

jest.mock('../assets/default/icon/ic-kosyak', () => DefaultIconMock);
jest.mock('../assets/icons/brand/github', () => GithubIconMock);

describe('Класс BaseIconStore', () => {
  let store: ISvgSymbolStore<Icons>;

  beforeEach(() => {
    store = new SvgSymbolStore(asyncRequireContext, DefaultIconMock, mapToFilePath);
  });

  describe('.get()', () => {
    it('должен возвращать lazy компонент', async () => {
      const Component = store.get('brand-github');

      await render(
        <Suspense fallback={null}>
          <Component />
        </Suspense>,
      );
      const result = await screen.findByRole('img', { name: ICON_ACCESSIBLE_NAME.GITHUB });
      expect(result).toBeTruthy();
    });

    it('должен возвращать модуль с иконкой по-умолчанию, если иконка с переданным именем не существует', async () => {
      // @ts-expect-error, причина: тестирование неправильного названия
      const Component = store.get('not-valid');

      await render(
        <Suspense fallback={null}>
          <Component />
        </Suspense>,
      );

      const result = await screen.findByRole('img', { name: ICON_ACCESSIBLE_NAME.DEFAULT });
      expect(result).toBeTruthy();
    });
  });
});
