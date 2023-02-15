import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DeviceMobileCamera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 5.52H12.0012M18 3.75V20.25C18 21.0784 17.3284 21.75 16.5 21.75H7.5C6.67157 21.75 6 21.0784 6 20.25V3.75C6 2.92157 6.67157 2.25 7.5 2.25H16.5C17.3284 2.25 18 2.92157 18 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(DeviceMobileCamera);
export default ForwardRef;
