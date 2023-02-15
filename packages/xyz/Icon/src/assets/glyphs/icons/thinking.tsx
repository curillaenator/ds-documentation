import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Thinking = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.46875 14.8125C6.54375 14.8125 4.125 12.3937 4.125 9.46875C4.125 6.54375 6.54375 4.125 9.46875 4.125C12.3937 4.125 14.8125 6.54375 14.8125 9.46875C14.8125 12.3937 12.3937 14.8125 9.46875 14.8125Z'
      fill='#60A5F9'
    />
    <path
      d='M19.3125 9.75H15.9375C15.7687 13.0688 13.125 15.7687 9.75 15.9375V19.3125C9.75 19.65 9.975 19.875 10.3125 19.875H19.3125C19.65 19.875 19.875 19.65 19.875 19.3125V10.3125C19.875 9.975 19.65 9.75 19.3125 9.75Z'
      fill='#93C4FC'
    />
  </svg>
);

const ForwardRef = forwardRef(Thinking);
export default ForwardRef;
