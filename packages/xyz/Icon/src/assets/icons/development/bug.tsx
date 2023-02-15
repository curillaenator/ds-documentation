import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Bug = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.36 8.63906H9.3612M14.64 8.63906H14.6412M12 12V20.25M22.875 12L1.125 12M21.7429 17.6247L19.0484 16.069M21.7429 6.375L19.0484 7.93066M2.25727 6.375L4.95174 7.93066M2.25727 17.6245L4.95171 16.0689M19.5 13.5C19.5 15.4891 18.7098 17.3968 17.3033 18.8033C15.8968 20.2098 13.9891 21 12 21C10.0109 21 8.10322 20.2098 6.6967 18.8033C5.29018 17.3968 4.5 15.4891 4.5 13.5V10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5V13.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Bug);
export default ForwardRef;
