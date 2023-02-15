import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HouseLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2489 20.2497V10.8315C20.2489 10.727 20.227 10.6236 20.1848 10.5281C20.1425 10.4325 20.0807 10.3468 20.0034 10.2765L12.5029 3.45763C12.3648 3.33211 12.1849 3.26257 11.9983 3.26257C11.8117 3.26258 11.6319 3.33214 11.4938 3.45766L3.99432 10.2765C3.91701 10.3468 3.85524 10.4325 3.81298 10.5281C3.77071 10.6236 3.74887 10.727 3.74887 10.8315V20.2497M1.49881 20.25H22.4988M14.2485 20.2489V14.9989C14.2485 14.8 14.1695 14.6093 14.0289 14.4686C13.8882 14.328 13.6974 14.2489 13.4985 14.2489H10.4985C10.2996 14.2489 10.1088 14.328 9.96815 14.4686C9.82749 14.6093 9.74847 14.8 9.74847 14.9989V20.2489'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(HouseLine);
export default ForwardRef;
