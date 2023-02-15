import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BellRinging = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9 18.0001V18.7501C9 19.5457 9.31607 20.3088 9.87868 20.8714C10.4413 21.434 11.2044 21.7501 12 21.7501C12.7956 21.7501 13.5587 21.434 14.1213 20.8714C14.6839 20.3088 15 19.5457 15 18.7501V18.0001M17.197 2.24951C18.7231 3.21294 19.9533 4.57933 20.7518 6.19785M3.24847 6.19785C4.047 4.57933 5.27724 3.21294 6.80337 2.24951M5.26892 10.5001C5.26645 9.61454 5.43873 8.7372 5.77591 7.91835C6.11308 7.09949 6.60851 6.35521 7.23382 5.72815C7.85913 5.1011 8.60202 4.60359 9.41994 4.26413C10.2378 3.92467 11.1147 3.74993 12.0003 3.74993C12.8858 3.74993 13.7627 3.92467 14.5806 4.26413C15.3985 4.60359 16.1414 5.1011 16.7667 5.72815C17.392 6.35521 17.8874 7.09949 18.2246 7.91835C18.5618 8.7372 18.7341 9.61454 18.7316 10.5001C18.7316 13.8578 19.4341 15.8062 20.0528 16.8712C20.1195 16.985 20.1549 17.1143 20.1556 17.2462C20.1563 17.3781 20.1223 17.5078 20.0568 17.6223C19.9914 17.7368 19.8969 17.832 19.783 17.8983C19.669 17.9647 19.5395 17.9998 19.4077 18.0001H4.5921C4.46021 17.9998 4.33075 17.9646 4.21677 17.8983C4.10278 17.8319 4.00831 17.7367 3.94289 17.6222C3.87747 17.5077 3.8434 17.3779 3.84413 17.246C3.84486 17.1142 3.88035 16.9848 3.94704 16.871C4.5661 15.806 5.26892 13.8576 5.26892 10.5001Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BellRinging);
export default ForwardRef;