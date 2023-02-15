import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberCircleThree = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.74971 7.87412H14.2497L11.6253 11.6249C12.057 11.6249 12.482 11.7313 12.8627 11.9348C13.2434 12.1383 13.5681 12.4326 13.8079 12.7915C14.0477 13.1504 14.1953 13.563 14.2377 13.9926C14.28 14.4222 14.2157 14.8556 14.0505 15.2544C13.8853 15.6532 13.6243 16.0052 13.2906 16.279C12.9569 16.5529 12.5608 16.7402 12.1374 16.8244C11.714 16.9086 11.2764 16.8871 10.8633 16.7618C10.4502 16.6365 10.0744 16.4113 9.76915 16.106M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberCircleThree);
export default ForwardRef;
