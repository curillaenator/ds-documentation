import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UDownLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.5 11.25L3 15.75M3 15.75L7.5 20.25M3 15.75H15.75C16.4394 15.75 17.1221 15.6142 17.7591 15.3504C18.3961 15.0865 18.9748 14.6998 19.4623 14.2123C19.9498 13.7248 20.3365 13.1461 20.6004 12.5091C20.8642 11.8721 21 11.1894 21 10.5C21 9.10761 20.4469 7.77226 19.4623 6.78769C18.4777 5.80312 17.1424 5.25 15.75 5.25H7.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(UDownLeft);
export default ForwardRef;
