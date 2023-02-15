import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DeviceTabletCamera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 6.36H12.0012M19.5 4.5V19.5C19.5 20.3284 18.8284 21 18 21H6C5.17157 21 4.5 20.3284 4.5 19.5V4.5C4.5 3.67157 5.17157 3 6 3H18C18.8284 3 19.5 3.67157 19.5 4.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(DeviceTabletCamera);
export default ForwardRef;
