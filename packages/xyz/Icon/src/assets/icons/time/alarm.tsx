import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Alarm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 6.75014V12.0001H17.25M18.3638 2.45483L21.5458 5.63681M2.45398 5.63681L5.63596 2.45483M20.25 12.0001C20.25 16.5565 16.5563 20.2501 12 20.2501C7.44363 20.2501 3.74998 16.5565 3.74998 12.0001C3.74998 7.44379 7.44363 3.75014 12 3.75014C16.5563 3.75014 20.25 7.44379 20.25 12.0001Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Alarm);
export default ForwardRef;
