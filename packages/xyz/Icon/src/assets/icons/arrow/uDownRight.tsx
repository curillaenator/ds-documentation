import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UDownRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 11.25L21 15.75M21 15.75L16.5 20.25M21 15.75H8.24999C7.56055 15.75 6.87786 15.6142 6.24091 15.3504C5.60395 15.0865 5.02519 14.6998 4.53769 14.2123C4.05018 13.7248 3.66347 13.1461 3.39963 12.5091C3.13579 11.8721 3 11.1894 3 10.5C3 9.10761 3.55312 7.77226 4.53769 6.78769C5.52226 5.80312 6.85761 5.25 8.25 5.25H16.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(UDownRight);
export default ForwardRef;
