import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BatteryHigh = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M23.25 9V15M13.3501 15.7501V8.25007M9.89985 15.7501V8.25007M6.44993 15.7501V8.25007M20.25 6.75V17.25C20.25 18.0784 19.5784 18.75 18.75 18.75H4.5C3.67157 18.75 3 18.0784 3 17.25V6.75C3 5.92157 3.67157 5.25 4.5 5.25H18.75C19.5784 5.25 20.25 5.92157 20.25 6.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BatteryHigh);
export default ForwardRef;
