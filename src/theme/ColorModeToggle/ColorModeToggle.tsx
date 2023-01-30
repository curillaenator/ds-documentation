import React, { FC } from "react";
import cn from "classnames";

import { useSettings } from "./hooks/useSettings";

import { Icons } from "./icons";

import styles from "./styles.module.css";

interface ColorModeToggle {
  className: string;
  value: "dark" | "light";
  onChange: (value: "dark" | "light") => void;
}

export const ColorModeToggle: FC<ColorModeToggle> = React.memo((props) => {
  const { className, value, onChange } = props;
  const { isBrowser, title } = useSettings(value);

  return (
    <div
      className={cn(className, {
        [styles.light]: value === "light",
        [styles.dark]: value === "dark",
      })}
    >
      <button
        className={cn(styles.toggleButton)}
        type="button"
        onClick={() => onChange(value === "dark" ? "light" : "dark")}
        disabled={!isBrowser}
        title={title}
        aria-label={title}
        aria-live="polite"
      >
        <span
          className={cn(styles.toggler, {
            [styles.togglerActive]: value === "dark",
          })}
        />

        <span className={styles.iconWrapper}>
          <Icons.Light />
        </span>

        <span className={styles.iconWrapper}>
          <Icons.Dark />
        </span>
      </button>
    </div>
  );
});
