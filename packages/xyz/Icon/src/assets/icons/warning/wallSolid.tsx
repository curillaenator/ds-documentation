import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const WallSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.75 8.625H21.75V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5H12.75V8.625Z'
      fill='currentColor'
    />
    <path d='M21.75 10.125H17.25V14.25H21.75V10.125Z' fill='currentColor' />
    <path d='M15.75 10.125H8.25V14.25H15.75V10.125Z' fill='currentColor' />
    <path d='M6.75 10.125H2.25V14.25H6.75V10.125Z' fill='currentColor' />
    <path
      d='M12.75 15.75V19.5H21C21.1989 19.5 21.3897 19.421 21.5303 19.2803C21.671 19.1397 21.75 18.9489 21.75 18.75V15.75H12.75Z'
      fill='currentColor'
    />
    <path
      d='M11.25 8.625V4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V8.625H11.25Z'
      fill='currentColor'
    />
    <path
      d='M11.25 15.75H2.25V18.75C2.25 18.9489 2.32902 19.1397 2.46967 19.2803C2.61032 19.421 2.80109 19.5 3 19.5H11.25V15.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(WallSolid);
export default ForwardRef;
