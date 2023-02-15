import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SpeakerSimpleSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.9977 9.75V14.25M20.9977 8.25V15.75M4.5 3.75L19.5 20.25M10.5142 5.90569L14.2501 3V10.0152M14.25 14.475V21L7.5 15.75H3C2.80109 15.75 2.61032 15.671 2.46967 15.5303C2.32902 15.3897 2.25 15.1989 2.25 15V9C2.25 8.80109 2.32902 8.61032 2.46967 8.46967C2.61032 8.32902 2.80109 8.25 3 8.25H8.59091'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SpeakerSimpleSlash);
export default ForwardRef;
