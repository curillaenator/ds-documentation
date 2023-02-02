import React from 'react';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import { ColorModeToggle } from '../../../components/ColorModeToggle';
import type { Props } from '@theme/Navbar/ColorModeToggle';

export default function NavbarColorModeToggle({ className }: Props): JSX.Element | null {
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const { colorMode, setColorMode } = useColorMode();

  if (disabled) {
    return null;
  }

  return <ColorModeToggle className={className} value={colorMode} onChange={setColorMode} />;
}
