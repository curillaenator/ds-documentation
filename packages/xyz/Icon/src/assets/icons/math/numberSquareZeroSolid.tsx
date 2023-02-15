import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberSquareZeroSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 15.75C13.2426 15.75 14.25 14.0711 14.25 12C14.25 9.92893 13.2426 8.25 12 8.25C10.7574 8.25 9.75 9.92893 9.75 12C9.75 14.0711 10.7574 15.75 12 15.75Z'
      fill='currentColor'
    />
    <path
      d='M19.5 3H4.5C4.10233 3.00052 3.7211 3.15872 3.43991 3.43991C3.15872 3.7211 3.00052 4.10233 3 4.5V19.5C3.00052 19.8977 3.15872 20.2789 3.43991 20.5601C3.7211 20.8413 4.10233 20.9995 4.5 21H19.5C19.8977 20.9995 20.2789 20.8413 20.5601 20.5601C20.8413 20.2789 20.9995 19.8977 21 19.5V4.5C20.9995 4.10233 20.8413 3.7211 20.5601 3.43991C20.2789 3.15872 19.8977 3.00052 19.5 3ZM12 17.25C9.40942 17.25 8.25 14.6133 8.25 12C8.25 9.38672 9.40942 6.75 12 6.75C14.5906 6.75 15.75 9.38672 15.75 12C15.75 14.6133 14.5906 17.25 12 17.25Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberSquareZeroSolid);
export default ForwardRef;
