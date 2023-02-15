import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BugDroid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.36001 7.91953H9.36121M14.64 7.91953H14.6412M19.4947 12H4.49472M5.24472 2.625L7.14918 4.40025M18.7433 2.625L16.8388 4.40031M19.4947 13.875C19.4947 15.8641 18.7045 17.7718 17.298 19.1783C15.8915 20.5848 13.9838 21.375 11.9947 21.375C10.0056 21.375 8.09794 20.5848 6.69142 19.1783C5.2849 17.7718 4.49472 15.8641 4.49472 13.875V10.125C4.49472 8.13588 5.2849 6.22822 6.69142 4.8217C8.09794 3.41518 10.0056 2.625 11.9947 2.625C13.9838 2.625 15.8915 3.41518 17.298 4.8217C18.7045 6.22822 19.4947 8.13588 19.4947 10.125V13.875Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BugDroid);
export default ForwardRef;
