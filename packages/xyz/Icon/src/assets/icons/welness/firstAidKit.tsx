import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FirstAidKit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 10.875V16.125M14.625 13.5H9.37503M15.75 6.75V5.25C15.75 4.85218 15.592 4.47064 15.3107 4.18934C15.0294 3.90804 14.6479 3.75 14.25 3.75H9.75003C9.3522 3.75 8.97067 3.90804 8.68937 4.18934C8.40806 4.47064 8.25003 4.85218 8.25003 5.25V6.75M3.75061 6.75H20.2506C20.6648 6.75 21.0006 7.08579 21.0006 7.5V19.5C21.0006 19.9142 20.6648 20.25 20.2506 20.25H3.75061C3.3364 20.25 3.00061 19.9142 3.00061 19.5V7.5C3.00061 7.08579 3.3364 6.75 3.75061 6.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FirstAidKit);
export default ForwardRef;
