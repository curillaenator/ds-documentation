import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Medal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 14.9994V22.4999L11.9993 20.2499L7.49999 22.4999V15.0001M19.4995 9C19.4995 13.1421 16.1416 16.5 11.9995 16.5C7.85738 16.5 4.49951 13.1421 4.49951 9C4.49951 4.85786 7.85738 1.5 11.9995 1.5C16.1416 1.5 19.4995 4.85786 19.4995 9ZM16.4994 9C16.4994 11.4853 14.4847 13.5 11.9994 13.5C9.51418 13.5 7.49947 11.4853 7.49947 9C7.49947 6.51472 9.51418 4.5 11.9994 4.5C14.4847 4.5 16.4994 6.51472 16.4994 9Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Medal);
export default ForwardRef;
