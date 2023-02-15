import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Copybook = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 126 168' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M1 13C1 6.37259 6.37258 1 13 1H113C119.627 1 125 6.37258 125 13V155C125 161.627 119.627 167 113 167H13C6.37259 167 1 161.627 1 155V13Z'
      fill='#E9F8ED'
    />
    <path d='M22 0V168' stroke='#F2994A' strokeWidth={2} />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M125 91.4235V104H115.127L107.342 82.3286H74.6152L66.8296 104H52.2129L84.1083 20H98.4664L125 91.4235ZM102.881 70.9571L91.0402 36.1829L79.0755 70.9571H102.881Z'
      fill='#C8E2FB'
      stroke='#469FF1'
      strokeWidth={2}
    />
    <path
      d='M99.3529 120H44.6471C42.6328 120 41 120.685 41 121.529V144.471C41 145.315 42.6328 146 44.6471 146H99.3529C101.367 146 103 145.315 103 144.471V121.529C103 120.685 101.367 120 99.3529 120Z'
      fill='#FFD1D6'
      stroke='#FF6476'
      strokeWidth={2}
    />
    <path d='M58 137H86' stroke='#FF6476' strokeWidth={2} strokeLinecap='round' />
    <path d='M52 129H91' stroke='#FF6476' strokeWidth={2} strokeLinecap='round' />
    <path
      d='M1 13C1 6.37259 6.37258 1 13 1H113C119.627 1 125 6.37258 125 13V155C125 161.627 119.627 167 113 167H13C6.37259 167 1 161.627 1 155V13Z'
      stroke='#6BD087'
      strokeWidth={2}
    />
  </svg>
);

const ForwardRef = forwardRef(Copybook);
export default ForwardRef;
