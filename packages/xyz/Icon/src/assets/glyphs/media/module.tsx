import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Module = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 168 126' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M1 12L1 114C1 120.075 5.92487 125 12 125L156 125C162.075 125 167 120.075 167 114V12C167 5.92487 162.075 1 156 1L12 1C5.92487 1 1 5.92487 1 12Z'
      fill='#E7E7FF'
      stroke='#6060FF'
      strokeWidth={2}
    />
    <path
      opacity={0.8}
      d='M18.6 67.9999H1V112.5C1 119.127 6.37258 124.5 13 124.5H155C161.627 124.5 167 119.127 167 112.5V67.9999H43.4C43.1359 67.9999 42.8745 67.9476 42.6308 67.8461L32.5385 63.6409C31.5538 63.2307 30.4462 63.2307 29.4615 63.6409L19.3692 67.8461C19.1255 67.9476 18.8641 67.9999 18.6 67.9999Z'
      fill='#E3F1FD'
      stroke='#469FF1'
      strokeWidth={2}
      strokeLinejoin='round'
    />
    <path opacity={0.8} d='M14 79H50' stroke='#469FF1' strokeWidth={2} strokeLinecap='round' />
    <path
      d='M49 34H15C14.4477 34 14 34.4477 14 35V55C14 55.5523 14.4477 56 15 56H49C49.5523 56 50 55.5523 50 55V35C50 34.4477 49.5523 34 49 34Z'
      fill='#FFE8EA'
      stroke='#FF6476'
      strokeWidth={2}
    />
    <path
      d='M101 38H67C66.4477 38 66 38.4477 66 39V59C66 59.5523 66.4477 60 67 60H101C101.552 60 102 59.5523 102 59V39C102 38.4477 101.552 38 101 38Z'
      fill='#FFE8EA'
      stroke='#FF6476'
      strokeWidth={2}
    />
    <path
      d='M153 38H119C118.448 38 118 38.4477 118 39V59C118 59.5523 118.448 60 119 60H153C153.552 60 154 59.5523 154 59V39C154 38.4477 153.552 38 153 38Z'
      fill='#FFE8EA'
      stroke='#FF6476'
      strokeWidth={2}
    />
    <path
      d='M49 89H15C14.4477 89 14 89.4477 14 90V110C14 110.552 14.4477 111 15 111H49C49.5523 111 50 110.552 50 110V90C50 89.4477 49.5523 89 49 89Z'
      fill='#C8E2FB'
      stroke='#469FF1'
      strokeWidth={2}
    />
    <path
      d='M101 89H67C66.4477 89 66 89.4477 66 90V110C66 110.552 66.4477 111 67 111H101C101.552 111 102 110.552 102 110V90C102 89.4477 101.552 89 101 89Z'
      fill='#C8E2FB'
      stroke='#469FF1'
      strokeWidth={2}
    />
    <path
      d='M151 9C152.657 9 154 10.3431 154 12C154 13.6569 152.657 15 151 15C149.343 15 148 13.6569 148 12C148 10.3431 149.343 9 151 9Z'
      fill='white'
      stroke='#6060FF'
      strokeWidth={2}
    />
    <path
      d='M17 9C18.6569 9 20 10.3431 20 12C20 13.6569 18.6569 15 17 15C15.3431 15 14 13.6569 14 12C14 10.3431 15.3431 9 17 9Z'
      fill='white'
      stroke='#6060FF'
      strokeWidth={2}
    />
    <path
      d='M65 9C66.6569 9 68 10.3431 68 12C68 13.6569 66.6569 15 65 15C63.3431 15 62 13.6569 62 12C62 10.3431 63.3431 9 65 9Z'
      fill='white'
      stroke='#6060FF'
      strokeWidth={2}
    />
    <path
      d='M51 9H31C30.4477 9 30 9.44772 30 10V14C30 14.5523 30.4477 15 31 15H51C51.5523 15 52 14.5523 52 14V10C52 9.44772 51.5523 9 51 9Z'
      fill='white'
      stroke='#6060FF'
      strokeWidth={2}
    />
    <path
      d='M1 12L1 114C1 120.075 5.92487 125 12 125L156 125C162.075 125 167 120.075 167 114V12C167 5.92487 162.075 1 156 1L12 1C5.92487 1 1 5.92487 1 12Z'
      stroke='#6060FF'
      strokeWidth={2}
    />
  </svg>
);

const ForwardRef = forwardRef(Module);
export default ForwardRef;
