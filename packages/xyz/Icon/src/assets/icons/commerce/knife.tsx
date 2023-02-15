import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Knife = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M13.7335 8.48335L18.75 13.4998C18.75 13.4998 12 22.4998 2.25 20.2498L18.5492 3.54902C18.7233 3.37482 18.93 3.23663 19.1575 3.14234C19.385 3.04804 19.6288 2.99949 19.8751 2.99945C20.1214 2.99941 20.3653 3.04789 20.5928 3.14212C20.8203 3.23635 21.0271 3.37448 21.2012 3.54863C21.3754 3.72277 21.5135 3.92951 21.6077 4.15705C21.7019 4.38458 21.7504 4.62845 21.7504 4.87473C21.7504 5.121 21.7018 5.36486 21.6075 5.59237C21.5132 5.81988 21.375 6.02658 21.2008 6.20067L16.479 11.2299'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Knife);
export default ForwardRef;
