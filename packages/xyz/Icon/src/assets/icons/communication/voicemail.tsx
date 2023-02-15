import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Voicemail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.29999 16.5C7.78527 16.5 9.79999 14.4853 9.79999 12C9.79999 9.51472 7.78527 7.5 5.29999 7.5C2.81471 7.5 0.799988 9.51472 0.799988 12C0.799988 14.4853 2.81471 16.5 5.29999 16.5ZM5.29999 16.5H18.8M18.8 16.5C21.2853 16.5 23.3 14.4853 23.3 12C23.3 9.51472 21.2853 7.5 18.8 7.5C16.3147 7.5 14.3 9.51472 14.3 12C14.3 14.4853 16.3147 16.5 18.8 16.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Voicemail);
export default ForwardRef;
