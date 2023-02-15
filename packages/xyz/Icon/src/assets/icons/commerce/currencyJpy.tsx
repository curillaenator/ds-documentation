import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CurrencyJpy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.5 15.75H16.5M7.5 12.75H16.5M12 12.75V20.25M12 12.75L18.75 4.5M12 12.75L5.25 4.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CurrencyJpy);
export default ForwardRef;
