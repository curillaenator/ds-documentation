import React, { ElementType, FC, InputHTMLAttributes } from "react";
import cn from "classnames";

import { CloseIcon, HomeIcon } from "./icons";

import styles from "./styles.module.scss";

const icons_assoc: Record<"menu" | "home", () => JSX.Element> = {
  menu: CloseIcon,
  home: HomeIcon,
};

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  appearance?: "contained" | "text";
  startIcon?: "menu" | "home";
}

export const Button: FC<ButtonProps> = (props) => {
  const { appearance = "contained", startIcon, children, ...rest } = props;

  const Icon = icons_assoc[startIcon] as ElementType;

  return (
    <button
      {...rest}
      className={cn(styles.button, styles[`button_${appearance}`])}
      type="button"
    >
      <>
        {startIcon && <Icon />}

        <span>{children}</span>
      </>
    </button>
  );
};
