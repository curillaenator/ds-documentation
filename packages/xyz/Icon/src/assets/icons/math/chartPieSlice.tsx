import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChartPieSlice = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 12V3C13.5769 3.00029 15.126 3.41485 16.4922 4.20216C17.8584 4.98947 18.9938 6.1219 19.7846 7.48605C20.5755 8.8502 20.994 10.3982 20.9984 11.975C21.0028 13.5518 20.5928 15.1021 19.8096 16.4706C19.0263 17.8391 17.8973 18.9779 16.5355 19.7728C15.1737 20.5676 13.6269 20.9908 12.0501 20.9999C10.4733 21.0089 8.92184 20.6035 7.551 19.8243C6.18017 19.0451 5.03811 17.9194 4.23918 16.56M19.7942 7.5L4.20575 16.5M3.15008 13.6456C2.76041 11.5368 3.13532 9.3582 4.2075 7.50096C5.27967 5.64372 6.97886 4.22956 8.99991 3.51244V10.2683L3.15008 13.6456Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ChartPieSlice);
export default ForwardRef;
