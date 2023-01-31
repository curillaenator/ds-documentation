import React, { useRef, useCallback, useState } from "react";
import classnames from "classnames";
import { useHistory } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { usePluginData } from "@docusaurus/useGlobalData";
import useIsBrowser from "@docusaurus/useIsBrowser";

import { useColorMode } from "@docusaurus/theme-common";

import { MGlass } from "./MGlass";

import styles from "./styles.module.scss";

const Search = (props) => {
  const initialized = useRef(false);
  const searchBarRef = useRef(null);
  const history = useHistory();
  const isBrowser = useIsBrowser();
  const { siteConfig = {} } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const { baseUrl } = siteConfig;

  const [focused, setFocused] = useState(false);
  const [indexReady, setIndexReady] = useState(false);

  const initAlgolia = (searchDocs, searchIndex, DocSearch) => {
    new DocSearch({
      searchDocs,
      searchIndex,
      baseUrl,
      inputSelector: "#search_input_react",
      // Override algolia's default selection event, allowing us to do client-side
      // navigation and avoiding a full page refresh.
      handleSelected: (_input, _event, suggestion) => {
        const url = suggestion.url || "/";
        // Use an anchor tag to parse the absolute url into a relative url
        // Alternatively, we can use new URL(suggestion.url) but its not supported in IE
        const a = document.createElement("a");
        a.href = url;
        // Algolia use closest parent element id #__docusaurus when a h1 page title does not have an id
        // So, we can safely remove it. See https://github.com/facebook/docusaurus/issues/1828 for more details.

        history.push(url);
      },
    });
  };

  const pluginData = usePluginData("docusaurus-lunr-search");

  const getSearchDoc = () => {
    return process.env.NODE_ENV === "production"
      ? fetch(`${baseUrl}${pluginData.fileNames.searchDoc}`).then((content) =>
          content.json()
        )
      : Promise.resolve([]);
  };

  const getLunrIndex = () => {
    return process.env.NODE_ENV === "production"
      ? fetch(`${baseUrl}${pluginData.fileNames.lunrIndex}`).then((content) =>
          content.json()
        )
      : Promise.resolve([]);
  };

  const loadAlgolia = () => {
    if (!initialized.current) {
      Promise.all([
        getSearchDoc(),
        getLunrIndex(),
        import("./DocSearch"),
        import("./algolia.css"),
      ]).then(([searchDocs, searchIndex, { default: DocSearch }]) => {
        if (searchDocs.length === 0) {
          return;
        }
        initAlgolia(searchDocs, searchIndex, DocSearch);
        setIndexReady(true);
      });
      initialized.current = true;
    }
  };

  const toggleSearchIconClick = useCallback(
    (e) => {
      setFocused((prev) => !prev);

      if (!searchBarRef.current.contains(e.target)) {
        searchBarRef.current.focus();
      }

      props.handleSearchBarToggle &&
        props.handleSearchBarToggle(!props.isSearchBarExpanded);
    },
    [props.isSearchBarExpanded]
  );

  if (isBrowser) {
    loadAlgolia();
  }

  return (
    <div
      className={classnames(
        "navbar__search",
        styles.searchContainer,
        styles[colorMode],
        {
          [styles.searchContainer_f]: focused,
          [styles.searchContainer_db]: !indexReady,
        }
      )}
      key="search-box"
    >
      <span
        aria-label="expand searchbar"
        role="button"
        className={classnames("search-icon", {
          "search-icon-hidden": props.isSearchBarExpanded,
        })}
        onClick={toggleSearchIconClick}
        onKeyDown={toggleSearchIconClick}
        tabIndex={0}
      />
      <input
        ref={searchBarRef}
        id="search_input_react"
        type="search"
        placeholder={indexReady ? "Поиск" : "Дев режим..."}
        aria-label="Search"
        className={classnames(
          // "navbar__search-input",
          styles.searchInput,
          {
            "search-bar-expanded": props.isSearchBarExpanded,
            "search-bar": !props.isSearchBarExpanded,
          }
        )}
        onClick={loadAlgolia}
        onMouseOver={loadAlgolia}
        onFocus={toggleSearchIconClick}
        onBlur={toggleSearchIconClick}
        disabled={!indexReady}
      />

      <MGlass />
    </div>
  );
};

export default Search;
