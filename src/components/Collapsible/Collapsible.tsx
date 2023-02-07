/* eslint-disable react/no-unknown-property */

import React, { FC, ReactNode } from 'react';
import Details from '@theme/MDXComponents/Details';

export const Collapsible: FC<{ title: string; children: ReactNode }> = (props) => {
  const { title, children } = props;

  return (
    <Details>
      {/* @ts-expect-error summary */}
      <summary mdxType='summary'>{title}</summary>

      {children}
    </Details>
  );
};
