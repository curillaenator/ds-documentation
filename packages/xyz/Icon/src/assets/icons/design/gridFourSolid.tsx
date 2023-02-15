import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const GridFourSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M10.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V10.5C3.75 10.9142 4.08579 11.25 4.5 11.25H10.5C10.9142 11.25 11.25 10.9142 11.25 10.5V4.5C11.25 4.08579 10.9142 3.75 10.5 3.75Z'
      fill='currentColor'
    />
    <path
      d='M19.5 3.75H13.5C13.0858 3.75 12.75 4.08579 12.75 4.5V10.5C12.75 10.9142 13.0858 11.25 13.5 11.25H19.5C19.9142 11.25 20.25 10.9142 20.25 10.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z'
      fill='currentColor'
    />
    <path
      d='M10.5 12.75H4.5C4.08579 12.75 3.75 13.0858 3.75 13.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H10.5C10.9142 20.25 11.25 19.9142 11.25 19.5V13.5C11.25 13.0858 10.9142 12.75 10.5 12.75Z'
      fill='currentColor'
    />
    <path
      d='M19.5 12.75H13.5C13.0858 12.75 12.75 13.0858 12.75 13.5V19.5C12.75 19.9142 13.0858 20.25 13.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V13.5C20.25 13.0858 19.9142 12.75 19.5 12.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(GridFourSolid);
export default ForwardRef;
