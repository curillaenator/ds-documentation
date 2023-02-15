import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HouseSimpleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.5092 9.72161L20.5091 9.72151L13.0085 2.90258C12.733 2.65029 12.3729 2.51036 11.9994 2.51038C11.6258 2.51039 11.2658 2.65035 10.9904 2.90267L3.49091 9.72152C3.33643 9.86223 3.21299 10.0336 3.12847 10.2247C3.04395 10.4158 3.00019 10.6224 3 10.8314V19.4996C3.00045 19.8973 3.15864 20.2786 3.43984 20.5598C3.72105 20.841 4.10231 20.9992 4.5 20.9996H19.5C19.8977 20.9992 20.279 20.841 20.5602 20.5598C20.8414 20.2786 20.9995 19.8973 21 19.4996V10.8314C20.9998 10.6225 20.9561 10.4159 20.8716 10.2248C20.787 10.0337 20.6636 9.86233 20.5092 9.72161Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(HouseSimpleSolid);
export default ForwardRef;
