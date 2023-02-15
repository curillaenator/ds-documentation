import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TrainSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.125 12H19.875M9 19.5L6.75 22.5M15 19.5L17.25 22.5M7.74023 15.8391H7.74144M16.1402 15.8391H16.1414M6.375 3H17.625C18.8676 3 19.875 4.00736 19.875 5.25V17.25C19.875 18.4926 18.8676 19.5 17.625 19.5H6.375C5.13236 19.5 4.125 18.4926 4.125 17.25V5.25C4.125 4.00736 5.13236 3 6.375 3Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TrainSimple);
export default ForwardRef;
