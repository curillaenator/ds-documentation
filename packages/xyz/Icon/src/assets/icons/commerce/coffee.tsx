import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Coffee = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.25 2.25V5.25M11.25 2.25V5.25M14.25 2.25V5.25M3 20.25H19.5M7.80905 20.2504C6.37372 19.5915 5.15763 18.5346 4.30519 17.205C3.45274 15.8755 2.99974 14.3293 3 12.75V8.25H19.5M19.5 8.25V12.75C19.5003 14.3293 19.0473 15.8756 18.1948 17.2051C17.3423 18.5346 16.1262 19.5915 14.6909 20.2504M19.5 8.25C20.2956 8.25 21.0589 8.56607 21.6215 9.12868C22.1841 9.69129 22.5002 10.4544 22.5002 11.25V12C22.5002 12.7956 22.1841 13.5587 21.6215 14.1213C21.0589 14.6839 20.2958 15 19.5002 15H19.1834'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Coffee);
export default ForwardRef;
