import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LinkSimpleHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.49869 11.9991H16.4987M9.74821 16.4997H5.99821C4.80474 16.4997 3.66014 16.0256 2.81623 15.1817C1.97232 14.3378 1.49821 13.1932 1.49821 11.9997C1.49821 10.8062 1.97232 9.66158 2.81623 8.81766C3.66014 7.97374 4.80474 7.49963 5.99821 7.49963H9.74821M14.2487 16.4997H17.9987C19.1922 16.4997 20.3368 16.0256 21.1807 15.1817C22.0246 14.3378 22.4987 13.1932 22.4987 11.9997C22.4987 10.8062 22.0246 9.66158 21.1807 8.81766C20.3368 7.97374 19.1922 7.49963 17.9987 7.49963H14.2487'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LinkSimpleHorizontal);
export default ForwardRef;
