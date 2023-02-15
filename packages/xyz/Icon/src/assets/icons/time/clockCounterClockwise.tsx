import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ClockCounterClockwise = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 7.5V12L15.8971 14.25M6.73435 9.34871H2.98431M2.98431 9.34871V5.59874M2.98431 9.34871L6.16629 6.16637C7.32008 5.01259 8.79009 4.22685 10.3904 3.90853C11.9908 3.5902 13.6496 3.75357 15.1571 4.378C16.6646 5.00242 17.953 6.05984 18.8596 7.41655C19.7661 8.77325 20.2499 10.3683 20.2499 12C20.2499 13.6317 19.7661 15.2268 18.8596 16.5835C17.953 17.9402 16.6646 18.9976 15.1571 19.622C13.6496 20.2464 11.9908 20.4098 10.3904 20.0915C8.79009 19.7732 7.32008 18.9874 6.16629 17.8336'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ClockCounterClockwise);
export default ForwardRef;
