import { join } from 'path';

import React, { FC } from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { IconsStoreContext } from '@kit-xyz/icon/src/contexts';

import type { ISvgSymbolStore } from '../utils/SvgSymbolStore/interfaces';
import SvgSymbolStore from '../utils/SvgSymbolStore';
import { Icon, Icons } from '..';
import { mapToFilePath } from '../utils/icon/IconStore/mapToFilePath';
import { DEFAULT_TEST_ID } from '../constants';

const ICON_NAMES = {
  GITHUB: 'brand-github',
  TWITCH: 'brand-twitch',
} as const;

const ICON_ACCESSIBLE_NAME = {
  DEFAULT: 'test default icon',
  GITHUB: 'test github icon',
  TWITCH: 'test twitch icon',
};

const DefaultIconMock: FC = (props) => <svg {...props} role='img' aria-label={ICON_ACCESSIBLE_NAME.DEFAULT} />;
const GithubIconMock: FC = (props) => <svg {...props} role='img' aria-label={ICON_ACCESSIBLE_NAME.GITHUB} />;
const TwitchIconMock: FC = (props) => <svg {...props} role='img' aria-label={ICON_ACCESSIBLE_NAME.TWITCH} />;

jest.mock('../assets/default/icon/ic-kosyak', () => DefaultIconMock);
jest.mock('../assets/icons/brand/github', () => GithubIconMock);
jest.mock('../assets/icons/brand/twitch', () => TwitchIconMock);

describe('Компонент <Icon />', () => {
  let syncIconStore: ISvgSymbolStore<Icons>;

  beforeEach(() => {
    syncIconStore = {
      get(name) {
        if (name === 'brand-github') {
          return GithubIconMock;
        }

        if (name === 'brand-twitch') {
          return TwitchIconMock;
        }

        return DefaultIconMock;
      },
    };
  });

  it('должен рендерить обертку с атрибутом [data-icon-name], равным переданному имени иконки', () => {
    render(<Icon name={ICON_NAMES.GITHUB} />);

    const icon = screen.getByTestId(DEFAULT_TEST_ID);

    expect(icon).toHaveAttribute('data-icon-name', ICON_NAMES.GITHUB);
  });

  it('должен рендерить иконку при передаче имени', () => {
    render(
      <IconsStoreContext.Provider value={syncIconStore}>
        <Icon name={ICON_NAMES.GITHUB} />
      </IconsStoreContext.Provider>,
    );
    expect(screen.getByRole('img', { name: ICON_ACCESSIBLE_NAME.GITHUB })).toBeInTheDocument();
  });

  it('должен рендерить фолбек при передаче неверного имени', () => {
    render(
      <IconsStoreContext.Provider value={syncIconStore}>
        {/** @ts-expect-error, причина: тестирование ошибочного имени */}
        <Icon name='not-valid-name' />
      </IconsStoreContext.Provider>,
    );

    expect(screen.getByRole('img', { name: ICON_ACCESSIBLE_NAME.DEFAULT })).toBeInTheDocument();
  });
});

describe('Компонент <Icon />, интегрированный с IconStore,', () => {
  const asyncRequireContext = async (name: string) => {
    await new Promise((resolve) => setTimeout(resolve));
    return import(join('../assets/icons', name));
  };
  let asyncStore: ISvgSymbolStore<Icons>;
  beforeEach(() => {
    asyncStore = new SvgSymbolStore<Icons>(asyncRequireContext, DefaultIconMock, mapToFilePath);
  });
  afterEach(cleanup);

  it('должен асинхронно подгрузить иконку', async () => {
    await render(
      <IconsStoreContext.Provider value={asyncStore}>
        <Icon name={ICON_NAMES.GITHUB} />
      </IconsStoreContext.Provider>,
    );

    const result = await screen.findByRole('img', { name: ICON_ACCESSIBLE_NAME.GITHUB });
    expect(result).not.toBeFalsy();
  });

  it('должен асинхронно сменить иконку', async () => {
    const { rerender } = render(
      <IconsStoreContext.Provider value={asyncStore}>
        <Icon name={ICON_NAMES.GITHUB} />
      </IconsStoreContext.Provider>,
    );
    await screen.findByRole('img', { name: ICON_ACCESSIBLE_NAME.GITHUB });

    rerender(
      <IconsStoreContext.Provider value={asyncStore}>
        <Icon name={ICON_NAMES.TWITCH} />
      </IconsStoreContext.Provider>,
    );

    const twitchIcon = await screen.findByRole('img');
    expect(twitchIcon).toHaveAccessibleName(ICON_ACCESSIBLE_NAME.TWITCH);
  });

  it('должен отобразить фолбек и не должен упасть, если переданное название иконки неверно', async () => {
    const { rerender } = render(
      <IconsStoreContext.Provider value={asyncStore}>
        <Icon name={ICON_NAMES.GITHUB} />
      </IconsStoreContext.Provider>,
    );
    await screen.findByRole('img', { name: ICON_ACCESSIBLE_NAME.GITHUB });

    rerender(
      <IconsStoreContext.Provider value={asyncStore}>
        {/** @ts-expect-error, причина: тестирование ошибочного имени */}
        <Icon name='invalid-name' />
      </IconsStoreContext.Provider>,
    );
    const fallbackIcon = await screen.findByRole('img');
    expect(fallbackIcon).toHaveAccessibleName(ICON_ACCESSIBLE_NAME.DEFAULT);
  });

  it('должен отобразить подгруженную ранее иконку синхронно', async () => {
    const { rerender } = render(
      <IconsStoreContext.Provider value={asyncStore}>
        <Icon name={ICON_NAMES.GITHUB} />
      </IconsStoreContext.Provider>,
    );
    await screen.findByRole('img', { name: ICON_ACCESSIBLE_NAME.GITHUB });

    rerender(
      <IconsStoreContext.Provider value={asyncStore}>
        <Icon name={ICON_NAMES.TWITCH} />
      </IconsStoreContext.Provider>,
    );
    await screen.findByRole('img', { name: ICON_ACCESSIBLE_NAME.TWITCH });

    rerender(
      <IconsStoreContext.Provider value={asyncStore}>
        <Icon name={ICON_NAMES.GITHUB} />
      </IconsStoreContext.Provider>,
    );
    expect(() => screen.getByRole('img', { name: ICON_ACCESSIBLE_NAME.DEFAULT })).toThrowError(
      /Unable to find an accessible element with the role "img" and name "test default icon"/,
    );
    screen.getByRole('img', { name: ICON_ACCESSIBLE_NAME.GITHUB });
  });
});
