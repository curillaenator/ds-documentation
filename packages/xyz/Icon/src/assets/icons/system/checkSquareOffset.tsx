import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CheckSquareOffset = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.12493 13.4318V4.875C4.12493 4.67609 4.20394 4.48532 4.3446 4.34467C4.48525 4.20402 4.67601 4.125 4.87493 4.125H19.1249C19.3238 4.125 19.5146 4.20402 19.6553 4.34467C19.7959 4.48532 19.8749 4.67609 19.8749 4.875V19.125C19.8749 19.3239 19.7959 19.5147 19.6553 19.6553C19.5146 19.796 19.3238 19.875 19.1249 19.875H12.7158M12 14.25L6 20.25L3 17.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CheckSquareOffset);
export default ForwardRef;
