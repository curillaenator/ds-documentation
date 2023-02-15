import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Lamp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 14.25V20.25M9.00002 20.25H15M18 14.25V17.25M7.24447 3.75H16.7554C16.9022 3.75 17.0457 3.79307 17.1682 3.87387C17.2908 3.95467 17.3869 4.06965 17.4447 4.20456L21.3019 13.2046C21.3508 13.3186 21.3706 13.4431 21.3595 13.5667C21.3485 13.6903 21.307 13.8093 21.2387 13.9129C21.1703 14.0165 21.0774 14.1015 20.9681 14.1604C20.8588 14.2192 20.7366 14.25 20.6125 14.25H3.38733C3.26322 14.25 3.14105 14.2192 3.03177 14.1604C2.92249 14.1015 2.82952 14.0165 2.7612 13.9129C2.69288 13.8093 2.65133 13.6903 2.6403 13.5667C2.62926 13.4431 2.64908 13.3186 2.69797 13.2046L6.55511 4.20456C6.61293 4.06965 6.70907 3.95467 6.8316 3.87387C6.95414 3.79307 7.09769 3.75 7.24447 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Lamp);
export default ForwardRef;
