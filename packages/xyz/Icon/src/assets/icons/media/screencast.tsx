import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Screencast = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M2.99951 9V5.25C2.99951 5.05109 3.07853 4.86032 3.21918 4.71967C3.35983 4.57902 3.5506 4.5 3.74951 4.5H20.2495C20.4484 4.5 20.6392 4.57902 20.7798 4.71967C20.9205 4.86032 20.9995 5.05109 20.9995 5.25V18.75C20.9995 18.9489 20.9205 19.1397 20.7798 19.2803C20.6392 19.421 20.4484 19.5 20.2495 19.5H13.4995M2.99951 18C3.39734 18 3.77887 18.158 4.06017 18.4393C4.34148 18.7206 4.49951 19.1022 4.49951 19.5M2.99951 15C4.193 15 5.3376 15.4741 6.18152 16.318C7.02544 17.1619 7.49955 18.3065 7.49955 19.5M2.99951 12C3.98443 12 4.9597 12.194 5.86964 12.5709C6.77958 12.9478 7.60637 13.5003 8.30281 14.1967C8.99925 14.8931 9.5517 15.7199 9.92861 16.6299C10.3055 17.5398 10.4995 18.5151 10.4995 19.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Screencast);
export default ForwardRef;
