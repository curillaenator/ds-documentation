import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SquareHalfSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.125 3.375H4.875C4.47731 3.37545 4.09605 3.53364 3.81484 3.81484C3.53364 4.09605 3.37545 4.47731 3.375 4.875V19.125C3.37545 19.5227 3.53364 19.904 3.81484 20.1852C4.09605 20.4664 4.47731 20.6245 4.875 20.625H19.125C19.5227 20.6245 19.904 20.4664 20.1852 20.1852C20.4664 19.904 20.6245 19.5227 20.625 19.125V4.875C20.6245 4.47731 20.4664 4.09605 20.1852 3.81484C19.904 3.53364 19.5227 3.37545 19.125 3.375ZM4.875 4.875H12V19.125H4.875V4.875Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(SquareHalfSolid);
export default ForwardRef;
