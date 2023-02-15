import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Microphone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 18.75V21.75M12 18.75C13.6604 18.75 15.2625 18.1381 16.5002 17.0312C17.7378 15.9243 18.5241 14.4001 18.7087 12.75M12 18.75C10.3396 18.75 8.73736 18.1381 7.49972 17.0312C6.26207 15.9243 5.47578 14.4001 5.29114 12.75M12 2.25C12.9946 2.25 13.9484 2.64509 14.6517 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6V12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75C11.5076 15.75 11.0199 15.653 10.5649 15.4645C10.11 15.2761 9.69658 14.9999 9.34836 14.6517C9.00014 14.3034 8.72392 13.89 8.53546 13.4351C8.34701 12.9801 8.25001 12.4925 8.25001 12V5.99999C8.25001 5.00543 8.6451 4.05161 9.34836 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Microphone);
export default ForwardRef;
