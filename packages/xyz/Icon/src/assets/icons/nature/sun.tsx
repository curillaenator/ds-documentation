import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Sun = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 3.375V1.5M5.90108 5.90108L4.57526 4.57526M3.375 12H1.5M5.90108 18.0987L4.57526 19.4246M12 20.625V22.5M18.0986 18.0987L19.4244 19.4246M20.625 12H22.5M18.0986 5.90108L19.4244 4.57526M17.625 12C17.625 15.1066 15.1066 17.625 12 17.625C8.8934 17.625 6.375 15.1066 6.375 12C6.375 8.8934 8.8934 6.375 12 6.375C15.1066 6.375 17.625 8.8934 17.625 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Sun);
export default ForwardRef;
