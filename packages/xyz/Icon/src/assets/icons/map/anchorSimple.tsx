import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const AnchorSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.0002 8.24976C13.2428 8.24976 14.2502 7.2424 14.2502 5.99976C14.2502 4.75712 13.2428 3.74976 12.0002 3.74976C10.7575 3.74976 9.75015 4.75712 9.75015 5.99976C9.75015 7.2424 10.7575 8.24976 12.0002 8.24976ZM12.0002 8.24976V20.2498M12.0002 20.2498C9.6132 20.2498 7.32402 19.3015 5.63619 17.6137C3.94836 15.9259 3.00015 13.6367 3.00015 11.2498H5.25015M12.0002 20.2498C14.3871 20.2498 16.6763 19.3015 18.3641 17.6137C20.0519 15.9259 21.0002 13.6367 21.0002 11.2498H18.7502'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(AnchorSimple);
export default ForwardRef;
