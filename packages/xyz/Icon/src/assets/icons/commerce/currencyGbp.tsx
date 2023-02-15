import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CurrencyGbp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.25 12.375H12.75M17.25 19.5H5.25C6.14511 19.5 7.00355 19.1444 7.63649 18.5115C8.26942 17.8785 8.625 17.0201 8.625 16.125V7.875C8.625 7.05915 8.86693 6.26163 9.32019 5.58327C9.77345 4.90492 10.4177 4.37621 11.1714 4.064C11.9252 3.75179 12.7546 3.6701 13.5547 3.82926C14.3549 3.98843 15.0899 4.38129 15.6668 4.95819'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CurrencyGbp);
export default ForwardRef;
