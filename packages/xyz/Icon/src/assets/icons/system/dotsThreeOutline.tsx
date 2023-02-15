import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DotsThreeOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4.5 14.25C5.74264 14.25 6.75 13.2426 6.75 12C6.75 10.7574 5.74264 9.75 4.5 9.75C3.25736 9.75 2.25 10.7574 2.25 12C2.25 13.2426 3.25736 14.25 4.5 14.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19.5 14.25C20.7426 14.25 21.75 13.2426 21.75 12C21.75 10.7574 20.7426 9.75 19.5 9.75C18.2574 9.75 17.25 10.7574 17.25 12C17.25 13.2426 18.2574 14.25 19.5 14.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(DotsThreeOutline);
export default ForwardRef;
