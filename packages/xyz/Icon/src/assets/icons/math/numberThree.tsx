import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberThree = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.5 3H16.4988L11.2507 10.5009C12.114 10.5008 12.964 10.7137 13.7254 11.1206C14.4867 11.5276 15.136 12.116 15.6157 12.8338C16.0953 13.5516 16.3905 14.3766 16.4752 15.2358C16.5598 16.0949 16.4312 16.9617 16.1009 17.7593C15.7705 18.5569 15.2486 19.2607 14.5812 19.8084C13.9139 20.356 13.1218 20.7307 12.2751 20.8991C11.4284 21.0676 10.5532 21.0246 9.72703 20.774C8.9009 20.5234 8.14932 20.0729 7.53887 19.4624'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberThree);
export default ForwardRef;