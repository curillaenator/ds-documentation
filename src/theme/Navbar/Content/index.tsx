import React, { ReactNode } from "react";
import cn from "classnames";
import { useThemeConfig } from "@docusaurus/theme-common";

import {
  splitNavbarItems,
  useNavbarMobileSidebar,
  //@ts-ignore
} from "@docusaurus/theme-common/internal";

import NavbarItem, { type Props as NavbarItemConfig } from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarSearch from "@theme/Navbar/Search";

import { Button } from "./Button";
import styles from "./styles.module.scss";

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

function NavbarContentLayout({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className={cn(styles.navBar)}>
      <div className={cn(styles.navBarleft)}>{left}</div>

      <div className={cn(styles.navBarRight)}>{right}</div>
    </div>
  );
}

export default function NavbarContent(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  const searchBarItem = items.find((item) => item.type === "search");

  return (
    <NavbarContentLayout
      left={
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        <>
          <NavbarItems items={rightItems} />

          <span className={styles.customTitle}>Design System & UI Kit</span>

          {/* <div className={styles.customButtoms}>
            <Button startIcon="menu">Меню</Button>

            <Button appearance="text" startIcon="home">
              Главная
            </Button>
          </div> */}

          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}

          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </>
      }
    />
  );
}
