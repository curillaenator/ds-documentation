import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Article = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 126 168' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <g clipPath='url(#article__clip0)'>
      <path
        d='M1 13C1 6.37259 6.37258 1 13 1H97L125 28.5V155C125 161.627 119.627 167 113 167H13C6.37259 167 1 161.627 1 155V13Z'
        fill='#E3F1FD'
        stroke='#469FF1'
        strokeWidth={2}
      />
      <path
        d='M126 29H109C102.373 29 97 23.6274 97 17V0L126 28.5V29Z'
        fill='#C8E2FB'
        stroke='#469FF1'
        strokeWidth={2}
      />
      <path d='M38 40H88' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
      <path d='M58 97H110' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
      <path d='M16 113H110' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
      <path d='M16 129H110' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
      <path d='M58 81H110' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
      <path d='M58 65H110' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
      <path
        d='M47 64H17C15.8954 64 15 64.8954 15 66V96C15 97.1046 15.8954 98 17 98H47C48.1046 98 49 97.1046 49 96V66C49 64.8954 48.1046 64 47 64Z'
        fill='#FFD1D6'
        stroke='#FF6476'
        strokeWidth={2}
      />
    </g>
    <defs>
      <clipPath id='article__clip0'>
        <rect width={126} height={168} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Article);
export default ForwardRef;
