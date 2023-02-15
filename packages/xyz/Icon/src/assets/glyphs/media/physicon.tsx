import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Physicon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 126 168' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <rect width={126} height={168} rx={12} fill='#ECFDF5' />
    <path d='M0 12C0 5.37259 5.37258 0 12 0H21V168H12C5.37259 168 0 162.627 0 156V12Z' fill='#6EE7B7' />
    <line x1={22} y1={-4.37114e-8} x2={22} y2={168} stroke='#6060FF' strokeWidth={2} />
    <rect x={1} y={1} width={124} height={166} rx={11} stroke='#6060FF' strokeWidth={2} />
    <line x1={47} y1={126} x2={97} y2={126} stroke='#6060FF' strokeWidth={2} strokeLinecap='round' />
    <line x1={47} y1={142} x2={97} y2={142} stroke='#6060FF' strokeWidth={2} strokeLinecap='round' />
    <path
      d='M64.341 94.86H78.849V87.42H80.244C98.937 87.42 106.935 79.422 106.935 59.985C106.935 40.083 99.402 32.55 80.244 32.55H78.849V26.04H64.341V32.55H62.946C44.253 32.55 36.255 40.548 36.255 59.985C36.255 79.422 44.253 87.42 62.946 87.42H64.341V94.86ZM51.321 59.985C51.321 47.523 54.297 44.64 63.411 44.64H64.806V75.33H63.411C54.297 75.33 51.321 72.447 51.321 59.985ZM91.869 59.985C91.869 72.354 88.893 75.33 79.779 75.33H78.384V44.64H79.779C88.986 44.64 91.869 47.523 91.869 59.985Z'
      fill='#D1FAE5'
      stroke='#6060FF'
      strokeWidth={2}
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Physicon);
export default ForwardRef;
