import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ListNumbers = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.75 12H20.2499M9.75 6H20.2499M9.74993 18H20.2499M3.75 5.625L5.25 4.875V10.1244M3.85314 14.3015C3.92441 14.1329 4.03016 13.9811 4.16359 13.8557C4.29703 13.7304 4.4552 13.6344 4.62795 13.5738C4.8007 13.5132 4.98422 13.4895 5.1667 13.504C5.34918 13.5186 5.5266 13.5711 5.68756 13.6583C5.84853 13.7455 5.98947 13.8654 6.10135 14.0103C6.21322 14.1552 6.29355 14.3219 6.33718 14.4997C6.38081 14.6775 6.38677 14.8625 6.35468 15.0427C6.32259 15.2229 6.25316 15.3944 6.15084 15.5462L3.75 18.7499H6.375'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ListNumbers);
export default ForwardRef;
