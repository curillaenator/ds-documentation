import React from 'react';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import { ColorModeToggle } from '@site/src/components/ColorModeToggle';
import { useSettings } from './hooks/useSettings';
import type { Props } from '@theme/Navbar/ColorModeToggle';

export default function NavbarColorModeToggle({ className }: Props): JSX.Element | null {
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const { colorMode, setColorMode } = useColorMode();
  const { isBrowser, title } = useSettings(colorMode);

  if (disabled) {
    return null;
  }

  return (
    <ColorModeToggle
      className={className}
      value={colorMode}
      onChange={setColorMode}
      title={title}
      disabled={!isBrowser}
    />
  );
}
