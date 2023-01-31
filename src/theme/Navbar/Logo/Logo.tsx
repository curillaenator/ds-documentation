import React from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useThemeConfig } from "@docusaurus/theme-common";
import ThemedImage from "@theme/ThemedImage";

import styles from "./styles.module.scss";

function LogoThemedImage({ logo, alt, imageClassName }) {
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  return (
    <div className={clsx(styles.logoWrapper, imageClassName)}>
      <ThemedImage
        className={logo.className}
        sources={sources}
        height={logo.height}
        width={logo.width}
        alt={alt}
        style={logo.style}
      />
    </div>
  );
}

export default function Logo(props) {
  const {
    siteConfig: { title },
  } = useDocusaurusContext();

  const {
    navbar: { title: navbarTitle, logo },
  } = useThemeConfig();

  const { imageClassName, titleClassName, className, ...propsRest } = props;
  const logoLink = useBaseUrl(logo?.href || "/");

  // If visible title is shown, fallback alt text should be
  // an empty string to mark the logo as decorative.
  const fallbackAlt = navbarTitle ? "" : title;
  // Use logo alt text if provided (including empty string),
  // and provide a sensible fallback otherwise.
  const alt = logo?.alt ?? fallbackAlt;

  return (
    <Link
      to={logoLink}
      className={clsx({
        [className]: !!className,
        [styles.navbar__brand]: className === "navbar__brand",
      })}
      {...propsRest}
      {...(logo?.target && { target: logo.target })}
    >
      {logo && (
        <LogoThemedImage
          logo={logo}
          alt={alt}
          imageClassName={imageClassName}
        />
      )}
      {navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
    </Link>
  );
}
