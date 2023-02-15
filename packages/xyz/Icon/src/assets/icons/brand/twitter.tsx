import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Twitter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.50008 18.75C4.50008 18.75 8.25008 18 9.00008 15.75C9.00008 15.75 3.00008 13.5 4.50008 5.25C4.50008 5.25 7.50008 9 12.0001 9.75V8.25027C12.0002 7.38867 12.2969 6.55337 12.8404 5.8848C13.3839 5.21624 14.1409 4.75517 14.9844 4.57913C15.8278 4.40309 16.7061 4.5228 17.4717 4.91814C18.2372 5.31348 18.8433 5.96034 19.188 6.74997L22.5001 6.75L19.5001 9.75C19.5001 15 15.7501 20.25 9.00008 20.25C6.00008 20.25 4.50008 18.75 4.50008 18.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Twitter);
export default ForwardRef;
