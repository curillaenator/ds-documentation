import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Textbook = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 126 168' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M1 13C1 6.37259 6.37258 1 13 1H113C119.627 1 125 6.37258 125 13V155C125 161.627 119.627 167 113 167H13C6.37259 167 1 161.627 1 155V13Z'
      fill='#E9F8ED'
    />
    <path
      d='M107 126C107 88.9969 77.0031 59 40 59C33.7644 59 27.7277 59.8518 22 61.4455V167H92.9946C101.774 155.668 107 141.444 107 126Z'
      fill='#FFD1D6'
    />
    <path
      d='M92.9946 167C101.774 155.668 107 141.444 107 126C107 88.9969 77.0031 59 40 59C33.7644 59 27.7277 59.8518 22 61.4455'
      stroke='#FF6476'
      strokeWidth={2}
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
    <path d='M34 126H84' stroke='#FF6476' strokeWidth={2} strokeLinecap='round' />
    <path d='M34 142H84' stroke='#FF6476' strokeWidth={2} strokeLinecap='round' />
    <path
      d='M1 13C1 6.37259 6.37258 1 13 1H113C119.627 1 125 6.37258 125 13V155C125 161.627 119.627 167 113 167H13C6.37259 167 1 161.627 1 155V13Z'
      stroke='#6BD087'
      strokeWidth={2}
    />
  </svg>
);

const ForwardRef = forwardRef(Textbook);
export default ForwardRef;
