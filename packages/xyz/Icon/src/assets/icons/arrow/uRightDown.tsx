import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const URightDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.25 16.5L15.75 21M15.75 21L20.25 16.5M15.75 21V8.24999C15.75 7.56055 15.6142 6.87786 15.3504 6.24091C15.0865 5.60395 14.6998 5.02519 14.2123 4.53769C13.7248 4.05018 13.1461 3.66347 12.5091 3.39963C11.8721 3.13579 11.1894 3 10.5 3C9.10761 3 7.77226 3.55312 6.78769 4.53769C5.80312 5.52226 5.25 6.85761 5.25 8.25V16.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(URightDown);
export default ForwardRef;
