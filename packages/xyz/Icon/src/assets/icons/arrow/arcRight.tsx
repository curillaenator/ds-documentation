import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ArcRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.3642 13.886H21.3642M21.3642 13.886V7.88599M21.3642 13.886L18.364 10.886C17.1053 9.62737 15.5016 8.7702 13.7558 8.42294C12.01 8.07567 10.2004 8.2539 8.55585 8.93509C6.91131 9.61628 5.5057 10.7698 4.51677 12.2499C3.52784 13.7299 3 15.47 3 17.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ArcRight);
export default ForwardRef;
