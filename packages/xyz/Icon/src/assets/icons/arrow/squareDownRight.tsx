import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SquareDownRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M10.125 14.625H14.625M14.625 14.625V10.125M14.625 14.625L9.375 9.375M20.25 4.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V4.5C3.75 4.08579 4.08579 3.75 4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SquareDownRight);
export default ForwardRef;
