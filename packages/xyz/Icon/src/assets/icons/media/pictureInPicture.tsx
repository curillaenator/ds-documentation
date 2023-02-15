import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PictureInPicture = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.75 18.75V12.75C12.75 12.5511 12.829 12.3603 12.9697 12.2197C13.1103 12.079 13.3011 12 13.5 12H21M3.75 5.25H20.25C20.6642 5.25 21 5.58579 21 6V18C21 18.4142 20.6642 18.75 20.25 18.75H3.75C3.33579 18.75 3 18.4142 3 18V6C3 5.58579 3.33579 5.25 3.75 5.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(PictureInPicture);
export default ForwardRef;
