import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TrainingIntegration = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 126 168' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <rect x={1} y={1} width={124} height={166} rx={11} fill='#E3F1FD' stroke='#469FF1' strokeWidth={2} />
    <rect x={28} y={33} width={70} height={40} rx={1} fill='#FFE8EA' stroke='#6060FF' strokeWidth={2} />
    <line
      x1={1}
      y1={-1}
      x2={77.0272}
      y2={-1}
      transform='matrix(0.878106 -0.478466 0.475063 0.879952 29.3225 72.8335)'
      stroke='#6060FF'
      strokeWidth={2}
      strokeLinecap='round'
    />
    <line
      x1={1}
      y1={-1}
      x2={77.0272}
      y2={-1}
      transform='matrix(-0.878106 -0.478466 -0.475063 0.879952 96.6774 72.8335)'
      stroke='#6060FF'
      strokeWidth={2}
      strokeLinecap='round'
    />
    <line x1={40} y1={96} x2={102} y2={96} stroke='#FF6476' strokeWidth={2} strokeLinecap='round' />
    <circle r={4} transform='matrix(1 0 0 -1 28 97)' fill='#FFD1D6' stroke='#FF6476' strokeWidth={2} />
    <line x1={40} y1={118} x2={102} y2={118} stroke='#FF6476' strokeWidth={2} strokeLinecap='round' />
    <circle r={4} transform='matrix(1 0 0 -1 28 119)' fill='#FFD1D6' stroke='#FF6476' strokeWidth={2} />
    <line x1={40} y1={140} x2={102} y2={140} stroke='#FF6476' strokeWidth={2} strokeLinecap='round' />
    <circle r={4} transform='matrix(1 0 0 -1 28 141)' fill='#FFD1D6' stroke='#FF6476' strokeWidth={2} />
  </svg>
);

const ForwardRef = forwardRef(TrainingIntegration);
export default ForwardRef;
