import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HardDrives = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.8 7.44H16.8012M16.8 16.56H16.8012M4.5 13.5H19.5C19.9142 13.5 20.25 13.8358 20.25 14.25V18.75C20.25 19.1642 19.9142 19.5 19.5 19.5H4.5C4.08579 19.5 3.75 19.1642 3.75 18.75V14.25C3.75 13.8358 4.08579 13.5 4.5 13.5ZM4.5 4.5H19.5C19.9142 4.5 20.25 4.83579 20.25 5.25V9.75C20.25 10.1642 19.9142 10.5 19.5 10.5H4.5C4.08579 10.5 3.75 10.1642 3.75 9.75V5.25C3.75 4.83579 4.08579 4.5 4.5 4.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(HardDrives);
export default ForwardRef;
