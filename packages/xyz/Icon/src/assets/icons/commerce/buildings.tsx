import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Buildings = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M1.5 20.2483H22.5M13.4995 20.2482V3.74823C13.4995 3.54932 13.4205 3.35855 13.2799 3.2179C13.1392 3.07725 12.9484 2.99823 12.7495 2.99823H3.74952C3.55061 2.99823 3.35985 3.07725 3.21919 3.2179C3.07854 3.35855 2.99952 3.54932 2.99952 3.74823V20.2482M20.9996 20.2483V9.7482C20.9996 9.54929 20.9205 9.35852 20.7799 9.21787C20.6392 9.07721 20.4485 8.99819 20.2496 8.99819H13.4996M5.99952 6.74819H8.99956M7.49949 12.7483H10.4995M5.99952 16.4983H8.99956M16.4996 16.4983H17.9996M16.4996 12.7483H17.9996'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Buildings);
export default ForwardRef;
