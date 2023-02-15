import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TrainRegional = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 11.25L18.1507 3.55266C18.1074 3.39393 18.0132 3.25384 17.8824 3.15397C17.7516 3.0541 17.5917 3 17.4272 3H6.57285C6.40832 3 6.24835 3.0541 6.1176 3.15397C5.98685 3.25384 5.89256 3.39393 5.84927 3.55266L3.75 11.25M20.25 11.25L18.1507 18.9473C18.1074 19.1061 18.0132 19.2462 17.8824 19.346C17.7516 19.4459 17.5917 19.5 17.4272 19.5H6.57285C6.40832 19.5 6.24835 19.4459 6.1176 19.346C5.98685 19.2462 5.89256 19.1061 5.84927 18.9473L3.75 11.25M20.25 11.25L12 12.75M3.75 11.25L12 12.75M12 19.5V12.75M9 8.25H15M9 19.5L6.75 22.5M15 19.5L17.25 22.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TrainRegional);
export default ForwardRef;
