import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Bicycle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.55 7.5C19.55 7.10218 19.392 6.72064 19.1106 6.43934C18.8293 6.15804 18.4478 6 18.05 6H14.3L19.55 15M4.54999 6H7.17499L12.425 15M15.9956 9H8.92502L4.54999 15M23.3 15C23.3 17.0711 21.6211 18.75 19.55 18.75C17.4789 18.75 15.8 17.0711 15.8 15C15.8 12.9289 17.4789 11.25 19.55 11.25C21.6211 11.25 23.3 12.9289 23.3 15ZM8.29999 15C8.29999 17.0711 6.62106 18.75 4.54999 18.75C2.47892 18.75 0.799988 17.0711 0.799988 15C0.799988 12.9289 2.47892 11.25 4.54999 11.25C6.62106 11.25 8.29999 12.9289 8.29999 15Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Bicycle);
export default ForwardRef;
