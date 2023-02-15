import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Moon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.3121 14.3109C18.8398 14.72 17.2853 14.7308 15.8076 14.3422C14.3298 13.9535 12.9817 13.1793 11.9012 12.0989C10.8207 11.0184 10.0466 9.67032 9.6579 8.19253C9.26923 6.71474 9.28 5.16025 9.6891 3.68799L9.68934 3.68806C8.23722 4.09203 6.91629 4.86943 5.85813 5.94281C4.79998 7.0162 4.04155 8.34811 3.65838 9.80586C3.27522 11.2636 3.2807 12.7963 3.67428 14.2513C4.06787 15.7063 4.83581 17.0327 5.90161 18.0985C6.96741 19.1643 8.29387 19.9322 9.74885 20.3258C11.2038 20.7194 12.7365 20.7248 14.1943 20.3416C15.652 19.9585 16.9839 19.2 18.0573 18.1419C19.1307 17.0837 19.9081 15.7628 20.312 14.3106L20.3121 14.3109Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Moon);
export default ForwardRef;
