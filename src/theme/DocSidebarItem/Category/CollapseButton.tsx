import React, { FC, ComponentProps } from "react";
import { translate } from "@docusaurus/Translate";

import styles from "./styles.module.scss";

interface CollapseIconProps {
  isActive?: boolean;
}

export const CollapseIcon: FC<CollapseIconProps> = (props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={
      props.isActive ? styles.collapseIcon_active : styles.collapseIcon
    }
  >
    <path d="M16 7V25" strokeWidth="2" strokeLinecap="round" />
    <path d="M25 16L7 16" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const OpenIcon: FC<CollapseIconProps> = (props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={
      props.isActive ? styles.collapseIcon_active : styles.collapseIcon
    }
  >
    <path d="M25 16L7 16" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

interface CollapseButtonProps {
  categoryLabel: string;
  onClick: ComponentProps<"button">["onClick"];
  collapsed?: boolean;
  isActive?: boolean;
}

export const CollapseButton: FC<CollapseButtonProps> = (props) => {
  const { categoryLabel, onClick, collapsed = true, isActive } = props;

  return (
    <button
      aria-label={translate(
        {
          id: "theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",
          message: "Toggle the collapsible sidebar category '{label}'",
          description:
            "The ARIA label to toggle the collapsible sidebar category",
        },
        { label: categoryLabel }
      )}
      type="button"
      // className="clean-btn menu__caret"
      className={styles.button}
      onClick={onClick}
    >
      {collapsed ? (
        <CollapseIcon isActive={isActive} />
      ) : (
        <OpenIcon isActive={isActive} />
      )}
    </button>
  );
};
