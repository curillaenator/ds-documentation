import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CrosshairSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.625 12C20.625 16.7635 16.7635 20.625 12 20.625M20.625 12C20.625 7.23654 16.7635 3.375 12 3.375M20.625 12H16.875M12 20.625C7.23654 20.625 3.375 16.7635 3.375 12M12 20.625V16.875M3.375 12C3.375 7.23654 7.23654 3.375 12 3.375M3.375 12H7.125M12 3.375V7.125'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CrosshairSimple);
export default ForwardRef;
