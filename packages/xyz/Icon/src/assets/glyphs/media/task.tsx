import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Task = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 168 126' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <g clipPath='url(#task__clip0)'>
      <rect
        x={1}
        y={125}
        width={124}
        height={166}
        rx={11}
        transform='rotate(-90 1 125)'
        fill='#E7E7FF'
        stroke='#6060FF'
        strokeWidth={2}
      />
      <circle r={3} transform='matrix(1 0 0 -1 151 12)' fill='white' stroke='#6060FF' strokeWidth={2} />
      <circle r={3} transform='matrix(1 0 0 -1 17 12)' fill='white' stroke='#6060FF' strokeWidth={2} />
      <circle r={3} transform='matrix(1 0 0 -1 65 12)' fill='white' stroke='#6060FF' strokeWidth={2} />
      <rect x={30} y={9} width={22} height={6} rx={1} fill='white' stroke='#6060FF' strokeWidth={2} />
      <rect x={51} y={76} width={60} height={34} rx={9} fill='#E3F1FD' stroke='#469FF1' strokeWidth={2} />
      <line
        opacity={0.8}
        x1={60.8889}
        y1={88}
        x2={90.8889}
        y2={88}
        stroke='#469FF1'
        strokeWidth={2}
        strokeLinecap='round'
      />
      <line
        opacity={0.8}
        x1={60.8889}
        y1={99}
        x2={100.889}
        y2={99}
        stroke='#469FF1'
        strokeWidth={2}
        strokeLinecap='round'
      />
      <path
        d='M105.967 64.2022C106.309 63.384 107.469 63.384 107.811 64.2022L110.639 70.9546C110.784 71.2989 111.107 71.5342 111.479 71.5649L118.775 72.168C119.659 72.2411 120.018 73.3437 119.345 73.9225L113.797 78.6988C113.515 78.9423 113.391 79.3231 113.477 79.6863L115.157 86.8115C115.361 87.6749 114.423 88.3563 113.665 87.8958L107.408 84.0953C107.089 83.9016 106.689 83.9016 106.37 84.0953L100.113 87.8958C99.3546 88.3563 98.4167 87.6749 98.6203 86.8115L100.301 79.6863C100.387 79.3231 100.263 78.9423 99.9804 78.6988L94.4325 73.9225C93.7602 73.3437 94.1184 72.2411 95.0025 72.168L102.298 71.5649C102.67 71.5342 102.994 71.2989 103.138 70.9546L105.967 64.2022Z'
        fill='#FBE0C9'
        stroke='#F2994A'
        strokeWidth={2}
      />
      <path
        opacity={0.8}
        d='M1 59H18.6C18.8641 59 19.1255 58.9477 19.3692 58.8462L29.4615 54.641C30.4462 54.2308 31.5538 54.2308 32.5385 54.641L42.6308 58.8462C42.8745 58.9477 43.1359 59 43.4 59H166'
        stroke='#6060FF'
        strokeWidth={2}
        strokeLinejoin='round'
      />
      <rect x={14} y={33} width={36} height={14} rx={1} fill='#FFE8EA' stroke='#FF6476' strokeWidth={2} />
      <rect x={66} y={37} width={36} height={14} rx={1} fill='#FFE8EA' stroke='#FF6476' strokeWidth={2} />
      <rect x={118} y={37} width={36} height={14} rx={1} fill='#FFE8EA' stroke='#FF6476' strokeWidth={2} />
    </g>
    <defs>
      <clipPath id='task__clip0'>
        <rect width={168} height={126} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Task);
export default ForwardRef;
