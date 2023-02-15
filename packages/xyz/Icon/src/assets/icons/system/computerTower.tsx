import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ComputerTower = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15 6.75H9M15 9.75H9M12 16.8H12.0012M18.75 3.75V20.25C18.75 20.6642 18.4142 21 18 21H6C5.58579 21 5.25 20.6642 5.25 20.25V3.75C5.25 3.33579 5.58579 3 6 3H18C18.4142 3 18.75 3.33579 18.75 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ComputerTower);
export default ForwardRef;
