/* eslint-disable */

import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { DocsHeader } from '@site/src/components/DocsHeader';
import { DocSection } from '@site/src/components/DocSection';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  docheader: DocsHeader,
  docsection: DocSection,
};
