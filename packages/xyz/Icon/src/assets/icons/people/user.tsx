import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const User = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68628 3 5.99999 5.68629 5.99999 9C5.99999 12.3137 8.68628 15 12 15ZM12 15C10.1567 15 8.34592 15.485 6.74948 16.4064C5.15304 17.3278 3.82718 18.6531 2.90509 20.2491M12 15C13.8432 15 15.654 15.4851 17.2504 16.4065C18.8469 17.3279 20.1727 18.6533 21.0948 20.2493'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(User);
export default ForwardRef;
