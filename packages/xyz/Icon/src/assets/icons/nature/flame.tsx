import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Flame = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 21C10.0109 21 8.10322 20.2098 6.6967 18.8033C5.29018 17.3968 4.5 15.4891 4.5 13.5C4.5 6.75 12 2.25 12 2.25C12 2.25 19.5 6.75 19.5 13.5C19.5 15.4891 18.7098 17.3968 17.3033 18.8033C15.8968 20.2098 13.9891 21 12 21ZM12 21C11.0054 21 10.0516 20.6049 9.34835 19.9017C8.64509 19.1984 8.25 18.2446 8.25 17.25C8.25 13.5 12 11.25 12 11.25C12 11.25 15.75 13.5 15.75 17.25C15.75 18.2446 15.3549 19.1984 14.6517 19.9017C13.9484 20.6049 12.9946 21 12 21Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Flame);
export default ForwardRef;
