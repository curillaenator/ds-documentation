import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Gauge = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 5.25V8.25M2.58228 12.4768L5.48004 13.2533M21.4178 12.4768L18.52 13.2533M9.69822 18.0001L16.1093 9.6449M2.25 17.25V15.1058C2.25 9.71719 6.5769 5.26871 11.9655 5.25006C13.2488 5.24552 14.5204 5.49436 15.7073 5.98231C16.8942 6.47025 17.9731 7.18771 18.8821 8.09353C19.7911 8.99934 20.5124 10.0757 21.0045 11.2609C21.4967 12.446 21.75 13.7167 21.75 15V17.25C21.75 17.4489 21.671 17.6397 21.5303 17.7803C21.3897 17.921 21.1989 18 21 18H3C2.80109 18 2.61032 17.921 2.46967 17.7803C2.32902 17.6397 2.25 17.4489 2.25 17.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Gauge);
export default ForwardRef;
