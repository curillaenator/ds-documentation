import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LockSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 7.5H16.125V4.875C16.125 3.78098 15.6904 2.73177 14.9168 1.95818C14.1432 1.1846 13.094 0.75 12 0.75C10.906 0.75 9.85677 1.1846 9.08318 1.95818C8.3096 2.73177 7.875 3.78098 7.875 4.875V7.5H4.5C4.10231 7.50045 3.72105 7.65864 3.43984 7.93984C3.15864 8.22105 3.00045 8.60231 3 9V19.5C3.00045 19.8977 3.15864 20.279 3.43984 20.5602C3.72105 20.8414 4.10231 20.9995 4.5 21H19.5C19.8977 20.9995 20.279 20.8414 20.5602 20.5602C20.8414 20.279 20.9995 19.8977 21 19.5V9C20.9995 8.60231 20.8414 8.22105 20.5602 7.93984C20.279 7.65864 19.8977 7.50045 19.5 7.5ZM11.9995 15.375C11.7769 15.375 11.5594 15.309 11.3744 15.1854C11.1894 15.0618 11.0452 14.8861 10.9601 14.6805C10.8749 14.475 10.8527 14.2488 10.8961 14.0305C10.9395 13.8123 11.0466 13.6118 11.204 13.4545C11.3613 13.2972 11.5617 13.19 11.78 13.1466C11.9982 13.1032 12.2244 13.1255 12.43 13.2106C12.6355 13.2958 12.8112 13.44 12.9349 13.625C13.0585 13.81 13.1245 14.0275 13.1245 14.25C13.1245 14.3977 13.0954 14.544 13.0388 14.6805C12.9823 14.817 12.8994 14.941 12.7949 15.0455C12.6905 15.15 12.5665 15.2328 12.43 15.2894C12.2935 15.3459 12.1472 15.375 11.9995 15.375ZM14.625 7.5H9.375V4.875C9.375 4.17881 9.65156 3.51113 10.1438 3.01884C10.6361 2.52656 11.3038 2.25 12 2.25C12.6962 2.25 13.3639 2.52656 13.8562 3.01884C14.3484 3.51113 14.625 4.17881 14.625 4.875V7.5Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(LockSolid);
export default ForwardRef;
