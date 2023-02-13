/* eslint-disable */

import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
// Import custom components
import { HeaderMetaProvider } from '@site/src/components/DocsHeader';
import { DocViewport } from '@site/src/components/DocViewport';
import { Divider } from '@site/src/components/Divider';
import { VersionSelector } from '@site/src/components/VersionSelector';
import { ExamplesGrid, Example } from '@site/src/components/ExamplesGrid';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  headermeta: HeaderMetaProvider,
  docviewport: DocViewport,
  divider: Divider,
  examples: ExamplesGrid,
  example: Example,
  versionselector: VersionSelector,
};
