import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MouseSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 10.5L12 6.75M10.125 3H13.875C16.7745 3 19.125 5.3505 19.125 8.25V15.75C19.125 18.6495 16.7745 21 13.875 21H10.125C7.2255 21 4.875 18.6495 4.875 15.75V8.25C4.875 5.3505 7.2255 3 10.125 3Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(MouseSimple);
export default ForwardRef;
