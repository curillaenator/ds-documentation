import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CurrencyBtc = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.50002 11.2499H14.25C15.2445 11.2499 16.1984 11.645 16.9016 12.3482C17.6049 13.0515 18 14.0053 18 14.9999C18 15.9944 17.6049 16.9483 16.9016 17.6515C16.1984 18.3548 15.2445 18.7499 14.25 18.7499L7.49948 18.7494M7.49948 18.7494V4.49941M7.49948 18.7494L5.99951 18.7494M7.49948 4.49941L13.125 4.49987C14.0201 4.49987 14.8785 4.85545 15.5115 5.48839C16.1444 6.12132 16.5 6.97977 16.5 7.87487C16.5 8.76998 16.1444 9.62842 15.5115 10.2614C14.8785 10.8943 14.0201 11.2499 13.125 11.2499M7.49948 4.49941H5.99951M9.74999 4.5V2.25M12.75 4.5V2.25M9.74999 21V18.75M12.75 21V18.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CurrencyBtc);
export default ForwardRef;
