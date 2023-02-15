import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ThumbsDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.49957 4.5H2.99954C2.80062 4.5 2.60986 4.57902 2.4692 4.71967C2.32855 4.86032 2.24953 5.05109 2.24953 5.25V13.5C2.24953 13.6989 2.32855 13.8897 2.4692 14.0303C2.60986 14.171 2.80062 14.25 2.99954 14.25H7.49957M7.49957 4.5V14.25M7.49957 4.5H18.9253C19.2909 4.5 19.6439 4.63353 19.918 4.87548C20.1921 5.11744 20.3684 5.45117 20.4137 5.81395L21.5387 14.8139C21.5651 15.025 21.5463 15.2392 21.4836 15.4425C21.4208 15.6457 21.3156 15.8333 21.1748 15.9927C21.0341 16.1522 20.861 16.2798 20.6671 16.3673C20.4733 16.4548 20.263 16.5 20.0503 16.5H14.2495V18.75C14.2495 19.144 14.1719 19.5341 14.0211 19.8981C13.8704 20.262 13.6494 20.5927 13.3708 20.8713C13.0922 21.1499 12.7615 21.3709 12.3975 21.5216C12.0336 21.6724 11.6435 21.75 11.2495 21.75L7.49957 14.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ThumbsDown);
export default ForwardRef;
