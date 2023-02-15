import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CounterClockwise = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.48425 9.34864H2.98425M2.98425 9.34864V4.84867M2.98425 9.34864L6.16629 6.16637C6.93237 5.40029 7.84184 4.7926 8.84278 4.37799C9.84372 3.96339 10.9165 3.75 11.9999 3.75C13.0833 3.75 14.1561 3.96339 15.1571 4.37799C16.158 4.7926 17.0675 5.40029 17.8336 6.16637M16.5147 14.6514H21.0147M21.0147 14.6514V19.1514M21.0147 14.6514L17.8334 17.8333C17.0673 18.5994 16.1578 19.2071 15.1569 19.6217C14.156 20.0363 13.0832 20.2497 11.9998 20.2497C10.9164 20.2497 9.84356 20.0363 8.84262 19.6217C7.84169 19.2071 6.93222 18.5994 6.16613 17.8333'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CounterClockwise);
export default ForwardRef;
