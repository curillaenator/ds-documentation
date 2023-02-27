import React from 'react';
import { render, screen } from '@testing-library/react';
import type { Icons } from '@kit-xyz/icon';

import { Button } from '../components/Button';
import type { ButtonProps } from '../interfaces';
import { DEFAULT_BUTTON_TEST_ID } from '../constants';

const defaultBtnProps = {
  dataTestId: DEFAULT_BUTTON_TEST_ID,
} as ButtonProps;

describe('Тесты для Button', () => {
  const TEXT = 'Caption';

  it('Button рендерится с текстом внутри', () => {
    render(<Button {...defaultBtnProps}>{TEXT}</Button>);

    expect(screen.getByTestId(DEFAULT_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(TEXT)).toBeInTheDocument();
  });

  it('Button рендерится в состоянии disabled', () => {
    render(
      <Button {...defaultBtnProps} disabled>
        {TEXT}
      </Button>,
    );

    const buttonEl = screen.getByTestId(DEFAULT_BUTTON_TEST_ID);

    expect(buttonEl).toBeDisabled();
  });

  it('Button рендерится с типом submit', () => {
    render(
      <Button {...defaultBtnProps} type='submit'>
        {TEXT}
      </Button>,
    );

    const buttonEl = screen.getByTestId(DEFAULT_BUTTON_TEST_ID);

    expect(buttonEl).toHaveAttribute('type', 'submit');
  });

  it('Button рендерится с иконкой', () => {
    const iconName: Icons = 'design-circle-half';

    render(
      <Button {...defaultBtnProps} iconLeftName='design-circle-half'>
        {TEXT}
      </Button>,
    );

    const iconEl = screen.getByTestId('UIKit.Icon');

    expect(iconEl).toHaveAttribute('data-icon-name', iconName);
  });
});
