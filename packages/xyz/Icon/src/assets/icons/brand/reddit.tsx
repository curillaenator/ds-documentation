import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Reddit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.0961 16.5001C14.1384 16.993 13.077 17.2501 11.9999 17.2501C10.9229 17.2501 9.86141 16.993 8.90375 16.5002M12 6.75L12.75 2.25L16.1423 2.77191M12 6.75C9.53624 6.75 7.28587 7.38265 5.56944 8.4261C5.37281 8.15587 5.11858 7.93302 4.82498 7.77337C4.53138 7.61372 4.20591 7.52147 3.8722 7.50332C3.5385 7.48518 3.20494 7.54159 2.89576 7.66847C2.58658 7.79535 2.30954 7.9895 2.08477 8.23682C1.86 8.48414 1.69315 8.77842 1.59632 9.09829C1.4995 9.41816 1.47514 9.75557 1.52502 10.086C1.57489 10.4165 1.69775 10.7317 1.88466 11.0087C2.07157 11.2858 2.31766 11.5176 2.6054 11.6876C2.37165 12.2633 2.25097 12.8786 2.24994 13.5C2.24994 17.2279 6.61516 20.25 11.9999 20.25C17.3847 20.25 21.7499 17.2279 21.7499 13.5C21.7489 12.8786 21.628 12.2634 21.3943 11.6877C21.682 11.5177 21.9283 11.2858 22.1152 11.0087C22.3021 10.7317 22.4249 10.4165 22.4748 10.0861C22.5246 9.75561 22.5003 9.41821 22.4034 9.09836C22.3066 8.77851 22.1398 8.48424 21.915 8.23693C21.6902 7.98961 21.4132 7.79547 21.1041 7.6686C20.7949 7.54172 20.4613 7.4853 20.1277 7.50344C19.794 7.52157 19.4685 7.61381 19.1749 7.77344C18.8813 7.93307 18.6271 8.15589 18.4304 8.4261C16.714 7.38265 14.4637 6.75 12 6.75ZM8.28046 12.3609H8.28166M15.72 12.3609H15.7212M19.125 3C19.125 3.82843 18.4534 4.5 17.625 4.5C16.7966 4.5 16.125 3.82843 16.125 3C16.125 2.17157 16.7966 1.5 17.625 1.5C18.4534 1.5 19.125 2.17157 19.125 3Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Reddit);
export default ForwardRef;
