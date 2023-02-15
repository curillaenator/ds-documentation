import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const RepeatOnce = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.75 8.25L21 6M21 6L18.75 3.75M21 6H9C7.4087 6 5.88258 6.63214 4.75736 7.75736C3.63214 8.88258 3 10.4087 3 12M5.25 15.75L3 18M3 18L5.25 20.25M3 18H15C16.5913 18 18.1174 17.3679 19.2426 16.2426C20.3679 15.1174 21 13.5913 21 12M10.875 10.4993L12.375 9.75V14.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(RepeatOnce);
export default ForwardRef;
