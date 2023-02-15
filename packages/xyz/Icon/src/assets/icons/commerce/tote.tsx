import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Tote = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.24999 9.75V6.75C8.24999 5.75544 8.64508 4.80161 9.34834 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6516 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V9.75M19.5787 20.25H4.42129C4.23671 20.25 4.05862 20.1819 3.92109 20.0588C3.78356 19.9358 3.69625 19.7663 3.67587 19.5828L2.34254 7.58282C2.33089 7.47799 2.34149 7.37188 2.37363 7.27142C2.40578 7.17095 2.45876 7.0784 2.52911 6.99981C2.59945 6.92121 2.68559 6.85834 2.78188 6.81529C2.87818 6.77225 2.98247 6.75 3.08795 6.75H20.9121C21.0175 6.75 21.1218 6.77225 21.2181 6.81529C21.3144 6.85834 21.4006 6.92121 21.4709 6.99981C21.5412 7.0784 21.5942 7.17095 21.6264 7.27142C21.6585 7.37188 21.6691 7.47799 21.6575 7.58282L20.3241 19.5828C20.3038 19.7663 20.2164 19.9358 20.0789 20.0588C19.9414 20.1819 19.7633 20.25 19.5787 20.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Tote);
export default ForwardRef;