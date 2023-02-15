import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MonitorSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75H19.5C20.7426 18.75 21.75 17.7426 21.75 16.5V6C21.75 4.75736 20.7426 3.75 19.5 3.75Z'
      fill='currentColor'
    />
    <path
      d='M15 20.25H9C8.80109 20.25 8.61032 20.329 8.46967 20.4696C8.32902 20.6103 8.25 20.8011 8.25 21C8.25 21.1989 8.32902 21.3896 8.46967 21.5303C8.61032 21.671 8.80109 21.75 9 21.75H15C15.1989 21.75 15.3897 21.671 15.5303 21.5303C15.671 21.3896 15.75 21.1989 15.75 21C15.75 20.8011 15.671 20.6103 15.5303 20.4696C15.3897 20.329 15.1989 20.25 15 20.25Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MonitorSolid);
export default ForwardRef;
