import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CirclesThreePlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.875 14.25V19.5M19.5 16.875H14.25M10.5 7.125C10.5 8.98896 8.98896 10.5 7.125 10.5C5.26104 10.5 3.75 8.98896 3.75 7.125C3.75 5.26104 5.26104 3.75 7.125 3.75C8.98896 3.75 10.5 5.26104 10.5 7.125ZM20.25 7.125C20.25 8.98896 18.739 10.5 16.875 10.5C15.011 10.5 13.5 8.98896 13.5 7.125C13.5 5.26104 15.011 3.75 16.875 3.75C18.739 3.75 20.25 5.26104 20.25 7.125ZM10.5 16.875C10.5 18.739 8.98896 20.25 7.125 20.25C5.26104 20.25 3.75 18.739 3.75 16.875C3.75 15.011 5.26104 13.5 7.125 13.5C8.98896 13.5 10.5 15.011 10.5 16.875Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CirclesThreePlus);
export default ForwardRef;
