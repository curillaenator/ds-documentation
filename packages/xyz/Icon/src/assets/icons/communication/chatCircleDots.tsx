import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChatCircleDots = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.55977 12H7.56097M12 12H12.0012M16.8 12H16.8012M4.25895 16.5931C3.14076 14.7081 2.74916 12.4797 3.15768 10.3264C3.56621 8.17312 4.74675 6.24302 6.47764 4.89855C8.20853 3.55408 10.3707 2.88772 12.5581 3.02461C14.7455 3.16149 16.8078 4.0922 18.3575 5.64196C19.9073 7.19173 20.838 9.25394 20.9749 11.4414C21.1118 13.6288 20.4455 15.791 19.101 17.5218C17.7565 19.2527 15.8264 20.4333 13.6732 20.8418C11.5199 21.2504 9.29149 20.8588 7.40649 19.7406L4.29808 20.6286C4.16947 20.6654 4.03338 20.6671 3.90391 20.6335C3.77443 20.6 3.65628 20.5324 3.5617 20.4378C3.46713 20.3432 3.39956 20.2251 3.36601 20.0956C3.33246 19.9661 3.33415 19.83 3.37089 19.7014L4.25895 16.5931Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ChatCircleDots);
export default ForwardRef;
