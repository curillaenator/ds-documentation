import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LightningSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.5 3.74971L19.5 20.2497M15.3541 15.6899L9 22.4978L10.5 14.9978L4.5 12.7478L8.64356 8.30827M10.6975 6.10667L15.0001 1.49683L13.5001 8.99678L19.5002 11.2468L17.4081 13.4882'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LightningSlash);
export default ForwardRef;
