import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Smiley = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.8979 14.2496C15.5026 14.9334 14.9343 15.5012 14.2501 15.8959C13.5659 16.2907 12.7899 16.4985 12 16.4985C11.2101 16.4985 10.4341 16.2907 9.74993 15.896C9.06574 15.5012 8.49742 14.9335 8.10205 14.2496M8.64023 10.08H8.64143M15.36 10.0805H15.3612M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Smiley);
export default ForwardRef;
