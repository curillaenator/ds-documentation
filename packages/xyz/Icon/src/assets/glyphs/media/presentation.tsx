import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Presentation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 168 126' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M13 125C6.37259 125 1.00001 119.627 1.00001 113L1 13C1 6.3726 6.37258 1.00001 13 1.00001L155 1C161.627 1 167 6.37259 167 13V113C167 119.627 161.627 125 155 125H13Z'
      fill='#E3F1FD'
      stroke='#469FF1'
      strokeWidth={2}
    />
    <path
      d='M108 47C108 52.1423 106.475 57.1691 103.618 61.4448C100.761 65.7205 96.7006 69.053 91.9498 71.0209C87.1989 72.9887 81.9712 73.5036 76.9277 72.5004C71.8841 71.4972 67.2514 69.0209 63.6152 65.3848C59.9791 61.7486 57.5028 57.1159 56.4996 52.0723C55.4964 47.0288 56.0113 41.8011 57.9791 37.0502C59.947 32.2994 63.2795 28.2387 67.5552 25.3818C71.8309 22.5249 76.8577 21 82 21V47H108Z'
      fill='#FFD1D6'
      stroke='#FF6476'
      strokeWidth={2}
      strokeLinejoin='round'
    />
    <path
      d='M86 17C89.4144 17 92.7953 17.6725 95.9498 18.9791C99.1042 20.2858 101.97 22.2009 104.385 24.6152C106.799 27.0295 108.714 29.8958 110.021 33.0502C111.327 36.2047 112 39.5856 112 43H86V17Z'
      fill='#FFE8EA'
      stroke='#FF6476'
      strokeWidth={2}
      strokeLinejoin='round'
    />
    <path d='M48 88H120' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
    <path d='M36 104H132' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
  </svg>
);

const ForwardRef = forwardRef(Presentation);
export default ForwardRef;
