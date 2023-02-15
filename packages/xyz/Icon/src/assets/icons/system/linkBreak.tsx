import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LinkBreak = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.99994 6.75V4.5M15 19.5V17.25M6.74994 9H4.49994M19.5 15H17.25M6.65915 12.038L5.59849 13.0987C4.89557 13.802 4.50078 14.7557 4.50093 15.7501C4.50108 16.7444 4.89615 17.698 5.59928 18.4011C6.3024 19.1042 7.256 19.4993 8.25037 19.4995C9.24474 19.4996 10.1985 19.1048 10.9018 18.4019L11.9625 17.3413M17.341 11.9625L18.4016 10.9019C19.1045 10.1985 19.4993 9.2448 19.4992 8.25043C19.499 7.25606 19.104 6.30246 18.4008 5.59934C17.6977 4.89621 16.7441 4.50114 15.7498 4.50099C14.7554 4.50084 13.8017 4.89564 13.0984 5.59855L12.0377 6.65921'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LinkBreak);
export default ForwardRef;
