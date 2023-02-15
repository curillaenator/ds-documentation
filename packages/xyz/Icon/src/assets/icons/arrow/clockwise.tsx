import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Clockwise = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5147 9.34864H21.0147M21.0147 9.34864V4.84867M21.0147 9.34864L17.8334 6.16637C17.0673 5.40029 16.1578 4.7926 15.1569 4.37799C14.156 3.96339 13.0832 3.75 11.9997 3.75C10.9163 3.75 9.84355 3.96339 8.84261 4.37799C7.84167 4.7926 6.9322 5.40029 6.16612 6.16637M7.48424 14.6514H2.98424M2.98424 14.6514V19.1514M2.98424 14.6514L6.16627 17.8333C6.93236 18.5994 7.84183 19.2071 8.84276 19.6217C9.8437 20.0363 10.9165 20.2497 11.9999 20.2497C13.0833 20.2497 14.1561 20.0363 15.157 19.6217C16.158 19.2071 17.0675 18.5994 17.8335 17.8333'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Clockwise);
export default ForwardRef;
