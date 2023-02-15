import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HandbagSimpleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M22.403 19.3344L21.0697 7.33433C21.0293 6.96732 20.8547 6.62815 20.5796 6.3819C20.3045 6.13565 19.9481 5.99966 19.5789 6H16.4364C16.2594 4.95148 15.7167 3.99956 14.9046 3.3131C14.0925 2.62664 13.0635 2.25 12.0001 2.25C10.9367 2.25 9.90773 2.62664 9.09562 3.3131C8.28352 3.99956 7.7408 4.95148 7.56375 6H4.42133C4.05208 5.99966 3.6957 6.13566 3.42057 6.38192C3.14543 6.62818 2.9709 6.96735 2.93047 7.33438L1.59718 19.3344C1.57389 19.544 1.59509 19.7563 1.65939 19.9572C1.72369 20.1581 1.82965 20.3432 1.97034 20.5004C2.11104 20.6576 2.28331 20.7833 2.4759 20.8694C2.66849 20.9555 2.87707 21 3.08803 21H20.9121C21.1231 21 21.3317 20.9555 21.5243 20.8694C21.7169 20.7833 21.8891 20.6576 22.0298 20.5004C22.1705 20.3432 22.2765 20.1581 22.3408 19.9572C22.4051 19.7563 22.4263 19.544 22.403 19.3344H22.403ZM12.0001 3.75C12.665 3.75085 13.3109 3.97218 13.8365 4.37932C14.3622 4.78646 14.738 5.35644 14.9052 6H9.09502C9.26214 5.35644 9.63796 4.78646 10.1636 4.37932C10.6893 3.97218 11.3352 3.75085 12.0001 3.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(HandbagSimpleSolid);
export default ForwardRef;
