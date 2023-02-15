import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Spade = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 2.25C12 2.25 21.375 8.25 21.375 13.125C21.375 14.0524 21.1104 14.9606 20.6123 15.743C20.1142 16.5254 19.4033 17.1494 18.563 17.5419C17.7227 17.9344 16.7879 18.0791 15.8683 17.9589C14.9486 17.8388 14.0824 17.4588 13.3711 16.8636L15 21.75H9L10.6289 16.8636C9.91764 17.4588 9.05136 17.8388 8.13173 17.9589C7.2121 18.0791 6.27727 17.9344 5.43697 17.5419C4.59667 17.1494 3.88576 16.5254 3.38768 15.743C2.8896 14.9606 2.62503 14.0524 2.625 13.125C2.625 8.25 12 2.25 12 2.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Spade);
export default ForwardRef;
