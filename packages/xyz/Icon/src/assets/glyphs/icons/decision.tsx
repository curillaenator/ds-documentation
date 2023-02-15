import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Decision = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z'
      stroke='#FCB974'
      strokeWidth={2}
    />
    <path
      d='M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z'
      fill='#FB923C'
    />
    <path d='M9.61719 12.1903L11.4167 13.75L14.5 10.25' stroke='white' strokeWidth={1.5} strokeLinecap='round' />
  </svg>
);

const ForwardRef = forwardRef(Decision);
export default ForwardRef;
