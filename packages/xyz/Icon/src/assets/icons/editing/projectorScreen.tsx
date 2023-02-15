import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ProjectorScreen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.5 17.25V6.75M19.5 6.75V17.25M12 17.25V20.25M12 20.25C11.1716 20.25 10.5 20.9216 10.5 21.75C10.5 22.5784 11.1716 23.25 12 23.25C12.8284 23.25 13.5 22.5784 13.5 21.75C13.5 20.9216 12.8284 20.25 12 20.25ZM3 17.25H21M3.75 3.75H20.25C20.6642 3.75 21 4.08579 21 4.5V6C21 6.41421 20.6642 6.75 20.25 6.75H3.75C3.33579 6.75 3 6.41421 3 6V4.5C3 4.08579 3.33579 3.75 3.75 3.75Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ProjectorScreen);
export default ForwardRef;
