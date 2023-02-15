import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const InCardinal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.6516 17.6516L12 15M12 15L9.34834 17.6516M12 15L12 21.75M9.34834 6.34871L12 9.00033M12 9.00033L14.6516 6.34871M12 9.00033L12 2.25M6.34834 14.6519L8.99996 12.0003M8.99996 12.0003L6.34834 9.34871M8.99996 12.0003L2.25 12M17.6516 9.34871L15 12.0003M15 12.0003L17.6516 14.6519M15 12.0003L21.75 12'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(InCardinal);
export default ForwardRef;
