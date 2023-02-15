import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChatCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.25891 16.5937C3.14072 14.7087 2.74912 12.4803 3.15764 10.3271C3.56617 8.17376 4.74672 6.24366 6.4776 4.89919C8.20849 3.55472 10.3706 2.88837 12.5581 3.02525C14.7455 3.16213 16.8077 4.09284 18.3575 5.6426C19.9073 7.19237 20.838 9.25458 20.9749 11.442C21.1118 13.6294 20.4454 15.7916 19.101 17.5225C17.7565 19.2534 15.8264 20.4339 13.6731 20.8425C11.5198 21.251 9.29145 20.8594 7.40645 19.7412L7.40647 19.7411L4.29804 20.6293C4.16944 20.666 4.03334 20.6677 3.90387 20.6341C3.77439 20.6006 3.65624 20.533 3.56167 20.4385C3.46709 20.3439 3.39952 20.2257 3.36597 20.0963C3.33242 19.9668 3.33411 19.8307 3.37085 19.7021L4.25898 16.5937L4.25891 16.5937Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ChatCircle);
export default ForwardRef;
