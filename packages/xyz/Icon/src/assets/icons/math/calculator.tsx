import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Calculator = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 6H7.5V10.5H16.5V6Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19.5 20.25V3.75C19.5 3.33579 19.1642 3 18.75 3H5.25C4.83579 3 4.5 3.33579 4.5 3.75V20.25C4.5 20.6642 4.83579 21 5.25 21H18.75C19.1642 21 19.5 20.6642 19.5 20.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 13.92H12.0012M8.40002 13.92H8.40122M15.6 13.92H15.6012M12 17.88H12.0012M8.15979 17.88H8.16099M15.6 17.88H15.6012'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Calculator);
export default ForwardRef;
