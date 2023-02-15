import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TagChevron = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.4731 18.4152L21.4731 12.4152C21.5553 12.292 21.5991 12.1472 21.5991 11.9991C21.5991 11.8511 21.5553 11.7063 21.4731 11.5831L17.4731 5.58312C17.4047 5.48039 17.3119 5.39615 17.203 5.33789C17.0941 5.27963 16.9726 5.24915 16.8491 5.24915H2.25049L6.47316 11.5839C6.55529 11.7071 6.59911 11.8519 6.5991 11.9999C6.59909 12.148 6.55526 12.2927 6.47312 12.4159L2.25049 18.7491H16.8491C16.9726 18.7491 17.0941 18.7187 17.203 18.6604C17.3119 18.6021 17.4047 18.5179 17.4731 18.4152Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TagChevron);
export default ForwardRef;
