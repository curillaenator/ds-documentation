import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Audio = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 126 168' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <g clipPath='url(#audio__clip0)'>
      <path d='M1 108H125V155C125 161.627 119.627 167 113 167H12C5.92486 167 1 162.075 1 156V108Z' fill='#E7E7FF' />
      <path d='M1 11C1 5.47715 5.47715 1 11 1H115C120.523 1 125 5.47715 125 11V108H1V11Z' fill='#FFE8EA' />
      <path
        d='M1 13C1 6.37259 6.37258 1 13 1H113C119.627 1 125 6.37258 125 13V155C125 161.627 119.627 167 113 167H13C6.37259 167 1 161.627 1 155V13Z'
        stroke='#6060FF'
        strokeWidth={2}
      />
      <path d='M0 108H126' stroke='#6060FF' strokeWidth={2} />
      <path
        d='M63 155C72.9411 155 81 146.941 81 137C81 127.059 72.9411 119 63 119C53.0589 119 45 127.059 45 137C45 146.941 53.0589 155 63 155Z'
        fill='white'
        stroke='#6060FF'
        strokeWidth={2}
      />
      <path
        d='M70.7147 134.402C72.7147 135.557 72.7147 138.444 70.7147 139.598L61.3933 144.98C59.3933 146.135 56.8933 144.692 56.8933 142.382V131.619C56.8933 129.309 59.3933 127.866 61.3933 129.021L70.7147 134.402Z'
        fill='#E7E7FF'
        stroke='#6060FF'
        strokeWidth={2}
        strokeLinejoin='round'
      />
      <path
        d='M25 145C29.4183 145 33 141.418 33 137C33 132.582 29.4183 129 25 129C20.5817 129 17 132.582 17 137C17 141.418 20.5817 145 25 145Z'
        fill='white'
        stroke='#FF6476'
        strokeWidth={2}
      />
      <path
        d='M101 145C105.418 145 109 141.418 109 137C109 132.582 105.418 129 101 129C96.5817 129 93 132.582 93 137C93 141.418 96.5817 145 101 145Z'
        fill='white'
        stroke='#FF6476'
        strokeWidth={2}
      />
      <path d='M47.0273 37V73' stroke='#FF6476' strokeWidth={2} strokeLinecap='round' />
      <path d='M88.0566 32V68' stroke='#FF6476' strokeWidth={2} strokeLinecap='round' />
      <path
        d='M45.0312 81.5863C49.1317 77.4858 50.0815 71.7873 47.1525 68.8584C44.2236 65.9294 38.5251 66.8792 34.4246 70.9797C30.3241 75.0802 29.3744 80.7787 32.3033 83.7076C35.2322 86.6365 40.9307 85.6868 45.0312 81.5863Z'
        fill='#FFD1D6'
        stroke='#FF6476'
        strokeWidth={2}
      />
      <path
        d='M85.0586 76.5863C89.1591 72.4858 90.1088 66.7873 87.1799 63.8584C84.251 60.9294 78.5525 61.8792 74.452 65.9797C70.3515 70.0802 69.4017 75.7787 72.3306 78.7076C75.2596 81.6365 80.9581 80.6868 85.0586 76.5863Z'
        fill='#FFD1D6'
        stroke='#FF6476'
        strokeWidth={2}
      />
      <path
        d='M47.0273 36.5341C47.0273 35.6292 47.635 34.837 48.5091 34.6025L85.5091 24.6756C86.7795 24.3348 88.0273 25.292 88.0273 26.6073V39L47.0273 50V36.5341Z'
        fill='#FFD1D6'
        stroke='#FF6476'
        strokeWidth={2}
      />
    </g>
    <defs>
      <clipPath id='audio__clip0'>
        <rect width={126} height={168} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Audio);
export default ForwardRef;
