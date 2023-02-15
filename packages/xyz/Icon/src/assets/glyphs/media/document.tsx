import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Document = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 126 168' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <g clipPath='url(#document__clip0)'>
      <path
        d='M1 13C1 6.37259 6.37258 1 13 1H97L125 28.5V155C125 161.627 119.627 167 113 167H13C6.37259 167 1 161.627 1 155V13Z'
        fill='#FDF0E4'
        stroke='#F2994A'
        strokeWidth={2}
      />
      <path
        d='M126 29H109C102.373 29 97 23.6274 97 17V0L126 28.5V29Z'
        fill='#FBE0C9'
        stroke='#F2994A'
        strokeWidth={2}
      />
      <path d='M32 40H82' stroke='#F2994A' strokeWidth={2} strokeLinecap='round' />
      <path d='M32 113H110' stroke='#F2994A' strokeWidth={2} strokeLinecap='round' />
      <path d='M32 129H110' stroke='#F2994A' strokeWidth={2} strokeLinecap='round' />
      <path d='M32 97H110' stroke='#F2994A' strokeWidth={2} strokeLinecap='round' />
      <path d='M32 81H110' stroke='#F2994A' strokeWidth={2} strokeLinecap='round' />
      <path d='M32 65H110' stroke='#F2994A' strokeWidth={2} strokeLinecap='round' />
      <path
        d='M20 69C22.2091 69 24 67.2091 24 65C24 62.7909 22.2091 61 20 61C17.7909 61 16 62.7909 16 65C16 67.2091 17.7909 69 20 69Z'
        fill='#FBE0C9'
        stroke='#F2994A'
        strokeWidth={2}
      />
      <path
        d='M20 101C22.2091 101 24 99.2091 24 97C24 94.7909 22.2091 93 20 93C17.7909 93 16 94.7909 16 97C16 99.2091 17.7909 101 20 101Z'
        fill='#FBE0C9'
        stroke='#F2994A'
        strokeWidth={2}
      />
      <path
        d='M20 117C22.2091 117 24 115.209 24 113C24 110.791 22.2091 109 20 109C17.7909 109 16 110.791 16 113C16 115.209 17.7909 117 20 117Z'
        fill='#FBE0C9'
        stroke='#F2994A'
        strokeWidth={2}
      />
    </g>
    <defs>
      <clipPath id='document__clip0'>
        <rect width={126} height={168} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Document);
export default ForwardRef;
