import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Notepad = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9 12.0006H15M9 15.0007H15M7.5 2.25061V5.25063M12 2.25061V5.25063M16.5 2.25061V5.25063M5.25 3.75063H18.75C18.9489 3.75063 19.1397 3.82965 19.2803 3.9703C19.421 4.11095 19.5 4.30172 19.5 4.50063V18.7506C19.5 19.3474 19.2629 19.9197 18.841 20.3416C18.419 20.7636 17.8467 21.0006 17.25 21.0006H6.75C6.15326 21.0006 5.58097 20.7636 5.15901 20.3416C4.73705 19.9197 4.5 19.3474 4.5 18.7506V4.50063C4.5 4.30172 4.57902 4.11095 4.71967 3.9703C4.86032 3.82965 5.05109 3.75063 5.25 3.75063Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Notepad);
export default ForwardRef;
