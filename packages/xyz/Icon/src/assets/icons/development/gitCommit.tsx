import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const GitCommit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.925 12C16.925 14.6924 14.7424 16.875 12.05 16.875C9.35758 16.875 7.17497 14.6924 7.17497 12M16.925 12C16.925 9.30761 14.7424 7.125 12.05 7.125C9.35758 7.125 7.17497 9.30761 7.17497 12M16.925 12H23.3M7.17497 12H0.799999'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(GitCommit);
export default ForwardRef;
