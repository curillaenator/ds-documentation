import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SunDim = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 3.375V2.625M5.9014 5.90089L5.37107 5.37056M3.375 12H2.625M5.9014 18.0987L5.37107 18.6291M12 20.625V21.375M18.0986 18.0987L18.6289 18.6291M20.625 12H21.375M18.0986 5.90089L18.6289 5.37056M17.625 12C17.625 15.1066 15.1066 17.625 12 17.625C8.8934 17.625 6.375 15.1066 6.375 12C6.375 8.8934 8.8934 6.375 12 6.375C15.1066 6.375 17.625 8.8934 17.625 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SunDim);
export default ForwardRef;
