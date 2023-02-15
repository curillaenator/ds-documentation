import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const EqualsSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 14.25H3.75C3.55109 14.25 3.36032 14.329 3.21967 14.4697C3.07902 14.6103 3 14.8011 3 15C3 15.1989 3.07902 15.3897 3.21967 15.5303C3.36032 15.671 3.55109 15.75 3.75 15.75H20.25C20.4489 15.75 20.6397 15.671 20.7803 15.5303C20.921 15.3897 21 15.1989 21 15C21 14.8011 20.921 14.6103 20.7803 14.4697C20.6397 14.329 20.4489 14.25 20.25 14.25Z'
      fill='currentColor'
    />
    <path
      d='M3.75 9.75H20.25C20.4489 9.75 20.6397 9.67098 20.7803 9.53033C20.921 9.38968 21 9.19891 21 9C21 8.80109 20.921 8.61032 20.7803 8.46967C20.6397 8.32902 20.4489 8.25 20.25 8.25H3.75C3.55109 8.25 3.36032 8.32902 3.21967 8.46967C3.07902 8.61032 3 8.80109 3 9C3 9.19891 3.07902 9.38968 3.21967 9.53033C3.36032 9.67098 3.55109 9.75 3.75 9.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(EqualsSolid);
export default ForwardRef;
