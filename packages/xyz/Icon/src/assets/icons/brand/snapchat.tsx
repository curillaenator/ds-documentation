import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Snapchat = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.7494 11.5003L20.2501 10.5M6.25088 11.5004L3.75 10.5M1.73676 17.689C1.73676 17.689 6.75026 15.3701 6.75026 7.5C6.75026 6.10761 7.30338 4.77226 8.28795 3.78769C9.27252 2.80312 10.6079 2.25 12.0003 2.25C13.3926 2.25 14.728 2.80312 15.7126 3.78769C16.6971 4.77226 17.2503 6.10761 17.2503 7.5C17.2503 15.3701 22.2638 17.689 22.2638 17.689C21.3961 18.5034 19.5515 18.0065 18.501 18.5848C17.4661 19.1545 16.9004 20.983 15.729 21.2827C14.5963 21.5725 13.2233 20.25 12.0003 20.25C10.7772 20.25 9.40428 21.5725 8.27156 21.2827C7.10015 20.983 6.53446 19.1545 5.49957 18.5848C4.44909 18.0065 2.60442 18.5034 1.73676 17.689Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Snapchat);
export default ForwardRef;
