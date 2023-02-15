import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Warning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 9.75V13.5M12 16.8H12.0012M10.7019 3.74857L2.45417 17.9978C2.3222 18.2259 2.2526 18.4846 2.25238 18.748C2.25216 19.0115 2.32133 19.2703 2.45293 19.4986C2.58453 19.7268 2.77391 19.9163 3.00202 20.0481C3.23014 20.1799 3.48894 20.2493 3.75239 20.2493H20.2479C20.5114 20.2493 20.7702 20.1799 20.9983 20.0481C21.2264 19.9163 21.4158 19.7268 21.5474 19.4986C21.679 19.2703 21.7482 19.0115 21.7479 18.748C21.7477 18.4846 21.6781 18.2259 21.5461 17.9978L13.2984 3.74857C13.1666 3.52093 12.9773 3.33193 12.7494 3.20055C12.5216 3.06916 12.2632 3 12.0002 3C11.7371 3 11.4787 3.06916 11.2509 3.20055C11.023 3.33193 10.8337 3.52093 10.7019 3.74857Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Warning);
export default ForwardRef;
