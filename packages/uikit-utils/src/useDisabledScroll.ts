/* eslint-disable react-hooks/exhaustive-deps */

import { RefObject, useEffect, useRef } from 'react';

import { BaseScrollManager } from './ScrollManager';

export const useDisabledScroll = <T extends HTMLElement>(
  document: Document,
  window: Window,
  targets: RefObject<T | null>[] = [],
) => {
  // const scroll = useMemo(() => new BaseScrollManager(targets, { document, window }), [document, window,targets]);

  const scrollRef = useRef(new BaseScrollManager(targets, { document, window }));

  useEffect(() => {
    scrollRef.current.disable();

    return () => scrollRef.current.enable();
  }, []);
};
