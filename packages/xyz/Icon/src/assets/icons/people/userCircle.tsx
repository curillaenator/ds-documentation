import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UserCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15ZM12 15C10.7538 15 9.53192 15.3448 8.46963 15.9963C7.40734 16.6478 6.54605 17.5806 5.9811 18.6913M12 15C13.2462 15 14.4679 15.3448 15.5302 15.9963C16.5925 16.6478 17.4538 17.5806 18.0188 18.6913M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(UserCircle);
export default ForwardRef;
