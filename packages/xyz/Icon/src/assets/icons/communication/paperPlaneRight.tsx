import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PaperPlaneRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6.75 12H12.75M20.5817 11.3453L4.74589 2.47724C4.61267 2.40264 4.45985 2.37047 4.30786 2.38505C4.15586 2.39962 4.01194 2.46024 3.89532 2.5588C3.7787 2.65736 3.69494 2.78916 3.65524 2.9366C3.61554 3.08404 3.62178 3.24008 3.67313 3.38387L6.66011 11.7474C6.71837 11.9105 6.71837 12.0888 6.66011 12.2519L3.67313 20.6154C3.62178 20.7592 3.61554 20.9153 3.65524 21.0627C3.69494 21.2101 3.7787 21.3419 3.89532 21.4405C4.01194 21.5391 4.15587 21.5997 4.30786 21.6143C4.45985 21.6288 4.61267 21.5967 4.74589 21.5221L20.5817 12.654C20.698 12.5889 20.7948 12.4939 20.8623 12.3789C20.9297 12.2639 20.9652 12.133 20.9652 11.9997C20.9652 11.8663 20.9297 11.7354 20.8623 11.6204C20.7948 11.5054 20.698 11.4104 20.5817 11.3453Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(PaperPlaneRight);
export default ForwardRef;
