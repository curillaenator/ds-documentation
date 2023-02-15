import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UserRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15ZM12 15C10.604 15 9.24214 15.4327 8.10215 16.2385C6.96216 17.0443 6.09993 18.1836 5.63412 19.4996M12 15C13.396 15 14.7576 15.4327 15.8976 16.2385C17.0376 17.0443 17.8998 18.1836 18.3656 19.4996M3.75 4.5H20.25C20.6642 4.5 21 4.83579 21 5.25V18.75C21 19.1642 20.6642 19.5 20.25 19.5H3.75C3.33579 19.5 3 19.1642 3 18.75V5.25C3 4.83579 3.33579 4.5 3.75 4.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(UserRectangle);
export default ForwardRef;
