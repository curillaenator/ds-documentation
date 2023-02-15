import React from 'react';
import { screen, render } from '@testing-library/react';

import { BadgeProps } from '../interfaces';
import { DEFAULT_TEST_ID } from '../constants';
import { Badge } from '../index';

describe('Тесты для компоненты Badge', () => {
  const DEFAULT_IMAGE_TEST_ID = 'UIKit.Icon';

  const DEFAULT_TEXT = 'Caption';

  it('Badge содержимое', () => {
    render(<Badge iconLeftName='arrow-bend-down-right'>{DEFAULT_TEXT}</Badge>);

    expect(screen.getByText(DEFAULT_TEXT)).toBeInTheDocument();
  });

  it.each([
    ['размер - xs', { size: 'xs' }],
    ['appearance - primary', { appearance: 'primary' }],
    ['радиус - circular', { shape: 'circular' }],
    ['disabled', { disabled: true }],
  ])('Badge - %s', (_description, props) => {
    render(<Badge {...(props as BadgeProps)} />);

    const badgeElement = screen.getByTestId(DEFAULT_TEST_ID);

    expect(badgeElement).toBeInTheDocument();
  });

  it('Badge - наличие иконки', () => {
    render(<Badge iconLeftName='arrow-bend-down-right' />);

    const iconElement = screen.getByTestId(DEFAULT_IMAGE_TEST_ID);

    expect(iconElement).toBeInTheDocument();
  });
});
