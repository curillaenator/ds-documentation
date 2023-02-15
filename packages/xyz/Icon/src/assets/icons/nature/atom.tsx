import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Atom = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 12.0001H12.0012M14.9167 9.08353C19.1637 13.3305 21.3006 18.0792 19.6897 19.6901C18.0788 21.301 13.33 19.1641 9.08308 14.9172C4.83613 10.6702 2.6992 5.92147 4.31011 4.31056C5.92103 2.69964 10.6698 4.83657 14.9167 9.08353ZM19.6897 4.31027C21.3006 5.92118 19.1637 10.6699 14.9167 14.9169C10.6698 19.1638 5.92104 21.3007 4.31012 19.6898C2.69921 18.0789 4.83614 13.3302 9.0831 9.08324C13.3301 4.83629 18.0788 2.69936 19.6897 4.31027Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Atom);
export default ForwardRef;
