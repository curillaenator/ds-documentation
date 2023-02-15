import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChatCircleText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.00004 10.5H15M9.00004 13.5H15M4.25895 16.5937C3.14076 14.7087 2.74916 12.4803 3.15768 10.3271C3.56621 8.17376 4.74675 6.24366 6.47764 4.89919C8.20853 3.55472 10.3707 2.88837 12.5581 3.02525C14.7455 3.16213 16.8078 4.09284 18.3575 5.6426C19.9073 7.19237 20.838 9.25458 20.9749 11.442C21.1118 13.6294 20.4455 15.7916 19.101 17.5225C17.7565 19.2534 15.8264 20.4339 13.6732 20.8425C11.5199 21.251 9.29149 20.8594 7.40649 19.7412L4.29808 20.6293C4.16947 20.666 4.03338 20.6677 3.90391 20.6341C3.77443 20.6006 3.65628 20.533 3.5617 20.4385C3.46713 20.3439 3.39956 20.2257 3.36601 20.0963C3.33246 19.9668 3.33415 19.8307 3.37089 19.7021L4.25895 16.5937Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ChatCircleText);
export default ForwardRef;
