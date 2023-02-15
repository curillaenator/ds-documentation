import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BatteryWarningVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 8.67505V12.425M9 0.800049H15M12 15.65H12.0012M6.75 3.80005H17.25C18.0784 3.80005 18.75 4.47162 18.75 5.30005V19.55C18.75 20.3785 18.0784 21.05 17.25 21.05H6.75C5.92157 21.05 5.25 20.3785 5.25 19.55V5.30005C5.25 4.47162 5.92157 3.80005 6.75 3.80005Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BatteryWarningVertical);
export default ForwardRef;
