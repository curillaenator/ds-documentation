import React from 'react';
import cn from 'classnames';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {
  splitNavbarItems,
  useNavbarMobileSidebar,
  // @ts-expect-error no types for import
} from '@docusaurus/theme-common/internal';

import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';

// import { Button } from "./Button";
import styles from './styles.module.scss';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({ items }: { items: NavbarItemConfig[] }): JSX.Element {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </>
  );
}

export default function NavbarContent(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const mobileSidebar = useNavbarMobileSidebar();
  const { pathname } = useLocation();

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  const searchBarItem = items.find((item) => item.type === 'search');

  const isRootPage = pathname === siteConfig.baseUrl;

  return (
    <div
      className={cn(styles.navBarLayout, {
        [styles.navBarLayout_rootPage]: isRootPage,
      })}
    >
      <div className={cn(styles.navBarleft)}>
        {!isRootPage && <div className={styles.beard} />}

        {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}

        <NavbarLogo />
        <NavbarItems items={leftItems} />
      </div>

      <div className={cn(styles.navBarRight)}>
        <NavbarItems items={rightItems} />

        {/* <div className={styles.customButtoms}>
            <Button startIcon="menu">????????</Button>

            <Button appearance="text" startIcon="home">
              ??????????????
            </Button>
          </div> */}

        {!searchBarItem && (
          <NavbarSearch>
            <SearchBar />
          </NavbarSearch>
        )}

        <NavbarColorModeToggle className={styles.colorModeToggle} />
      </div>
    </div>
  );
}
