import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Video = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 168 126' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path d='M1 12C1 5.92487 5.92487 1 12 1H155C161.627 1 167 6.37258 167 13V98H1V12Z' fill='#FFE8EA' />
    <path d='M1 114C1 120.075 5.92487 125 12 125H155C161.627 125 167 119.627 167 113V98H1V114Z' fill='#E7E7FF' />
    <path
      d='M13 125C6.37259 125 1.00001 119.627 1.00001 113L1 13C1 6.3726 6.37258 1.00001 13 1.00001L155 1C161.627 1 167 6.37259 167 13V113C167 119.627 161.627 125 155 125H13Z'
      stroke='#6060FF'
      strokeWidth={2}
    />
    <path
      d='M84 80C99.464 80 112 67.464 112 52C112 36.536 99.464 24 84 24C68.536 24 56 36.536 56 52C56 67.464 68.536 80 84 80Z'
      fill='white'
      stroke='#FF6476'
      strokeWidth={2}
    />
    <path
      d='M98.5 49.402C100.5 50.5567 100.5 53.4435 98.5 54.5982L79 65.8565C77 67.0112 74.5 65.5678 74.5 63.2584V40.7418C74.5 38.4324 77 36.989 79 38.1437L98.5 49.402Z'
      fill='#FFE8EA'
      stroke='#FF6476'
      strokeWidth={2}
      strokeLinejoin='round'
    />
    <path d='M1 98H166' stroke='#6060FF' strokeWidth={2} />
    <path d='M36 110H152' stroke='#6060FF' strokeWidth={2} strokeLinecap='round' />
    <path
      d='M18 116C21.3137 116 24 113.314 24 110C24 106.686 21.3137 104 18 104C14.6863 104 12 106.686 12 110C12 113.314 14.6863 116 18 116Z'
      fill='white'
      stroke='#FF6476'
      strokeWidth={2}
    />
    <path
      d='M63 114C65.2091 114 67 112.209 67 110C67 107.791 65.2091 106 63 106C60.7909 106 59 107.791 59 110C59 112.209 60.7909 114 63 114Z'
      fill='white'
      stroke='#FF6476'
      strokeWidth={2}
    />
  </svg>
);

const ForwardRef = forwardRef(Video);
export default ForwardRef;
