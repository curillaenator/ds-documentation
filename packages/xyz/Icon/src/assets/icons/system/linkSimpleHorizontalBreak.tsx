import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LinkSimpleHorizontalBreak = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.74952 16.4997H5.99952C4.80604 16.4997 3.66145 16.0256 2.81753 15.1817C1.97362 14.3378 1.49952 13.1932 1.49952 11.9997C1.49952 10.8062 1.97362 9.66158 2.81753 8.81766C3.66145 7.97374 4.80604 7.49963 5.99952 7.49963H9.74952M14.25 16.4997H18C19.1935 16.4997 20.3381 16.0256 21.182 15.1817C22.0259 14.3378 22.5 13.1932 22.5 11.9997C22.5 10.8062 22.0259 9.66158 21.182 8.81766C20.3381 7.97374 19.1935 7.49963 18 7.49963H14.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(LinkSimpleHorizontalBreak);
export default ForwardRef;
