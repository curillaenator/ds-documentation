import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MagnetStraight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.5 9H9.75M14.25 9H19.5M9.75 13.5C9.75 14.0967 9.98705 14.669 10.409 15.091C10.831 15.5129 11.4033 15.75 12 15.75C12.5967 15.75 13.169 15.5129 13.591 15.091C14.0129 14.669 14.25 14.0967 14.25 13.5V5.25C14.25 5.05109 14.329 4.86032 14.4697 4.71967C14.6103 4.57902 14.8011 4.5 15 4.5H18.75C18.9489 4.5 19.1397 4.57902 19.2803 4.71967C19.421 4.86032 19.5 5.05109 19.5 5.25V13.4058C19.5 17.5413 16.1922 20.9691 12.0569 20.9998C11.0672 21.0073 10.0858 20.8188 9.16933 20.4453C8.25282 20.0718 7.41931 19.5205 6.71684 18.8234C6.01437 18.1262 5.45683 17.2969 5.07636 16.3833C4.69588 15.4696 4.5 14.4897 4.5 13.5V5.25C4.5 5.05109 4.57902 4.86032 4.71967 4.71967C4.86032 4.57902 5.05109 4.5 5.25 4.5H9C9.19891 4.5 9.38968 4.57902 9.53033 4.71967C9.67098 4.86032 9.75 5.05109 9.75 5.25V13.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(MagnetStraight);
export default ForwardRef;
