import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Facebook = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 21V10.5001C12 9.90341 12.2371 9.33111 12.659 8.90916C13.081 8.4872 13.6533 8.25015 14.25 8.25015H15.75M9 13.5001H15'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Facebook);
export default ForwardRef;
