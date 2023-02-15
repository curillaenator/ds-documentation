import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CloudArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.0681 16.3178L14.25 19.4998M14.25 19.4998L17.432 16.3178M14.25 19.4998L14.25 11.9999M8.99981 19.4999H6.74982C6.00529 19.4992 5.26943 19.3401 4.59108 19.0332C3.91274 18.7264 3.30742 18.2787 2.8153 17.72C2.32319 17.1613 1.95553 16.5044 1.73674 15.7927C1.51794 15.081 1.45302 14.331 1.54627 13.5923C1.63952 12.8537 1.88882 12.1433 2.27761 11.5083C2.66641 10.8734 3.1858 10.3284 3.80133 9.90953C4.41686 9.49066 5.11444 9.20751 5.84776 9.07886C6.58109 8.95021 7.3334 8.97901 8.05474 9.16334M7.50001 12C7.50013 10.8117 7.78262 9.64035 8.32421 8.5826C8.8658 7.52485 9.65098 6.61093 10.6151 5.91615C11.5791 5.22137 12.6945 4.76563 13.8693 4.58646C15.044 4.4073 16.2445 4.50985 17.3719 4.88566C18.4992 5.26148 19.5212 5.8998 20.3534 6.74802C21.1857 7.59625 21.8045 8.6301 22.1588 9.76438C22.5132 10.8987 22.5929 12.1009 22.3915 13.2721C22.19 14.4432 21.7132 15.5497 21.0002 16.5004'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CloudArrowDown);
export default ForwardRef;