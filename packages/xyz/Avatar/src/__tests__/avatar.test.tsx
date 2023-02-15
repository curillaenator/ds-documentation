import React from 'react';
import { render, screen } from '@pcbl/fe-scripts/configs/test-utils';

import { Avatar } from '../Avatar';
import { DEFAULT_TEST_ID } from '../constants';
import URL from '../stories/assets/image.png';

jest.mock('@kit-base/uikit-utils', () => ({
  useImageLoader: (src?: string) => {
    if (src) {
      return { dataImg: src, error: false };
    }

    return { dataImg: '', error: true };
  },
}));

describe('Тесты компонента Avatar', () => {
  const TEXT = 'TX';
  const CLASSNAME = 'ADDITIONAL';

  it('Avatar рендериться без переданных props', () => {
    render(<Avatar />);
    const avatar = screen.getByTestId(DEFAULT_TEST_ID);

    expect(avatar).toBeInTheDocument();
  });

  it('Avatar рендериться с заданным текстом', () => {
    render(<Avatar text={TEXT} dataTestId={DEFAULT_TEST_ID} />);
    const avatar = screen.getByTestId(DEFAULT_TEST_ID);

    expect(avatar).toHaveTextContent(TEXT);
  });

  it('Avatar рендериться с заданным URL, текст не должен отображаться', () => {
    render(<Avatar imageURL={URL} alt={TEXT} text={TEXT} title={TEXT} />);
    const avatar = screen.getByTestId(DEFAULT_TEST_ID);
    const image = screen.getByTestId(`${DEFAULT_TEST_ID}.Image`);

    expect(avatar).not.toHaveTextContent(TEXT);
    expect(image).toBeInTheDocument();
  });

  it('Avatar рендериться с дополнительным className', () => {
    render(<Avatar className={CLASSNAME} />);
    const avatar = screen.getByTestId(DEFAULT_TEST_ID);

    expect(avatar).toHaveClass(CLASSNAME);
  });

  it('Avatar отбражает нотификации', () => {
    render(<Avatar notionPlacement='top-left' />);
    const notion = screen.getByTestId(`${DEFAULT_TEST_ID}.Online`);

    expect(notion).toBeInTheDocument();
  });
});
