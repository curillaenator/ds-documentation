import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CirclesThreeSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 10.875C14.4853 10.875 16.5 8.86028 16.5 6.375C16.5 3.88972 14.4853 1.875 12 1.875C9.51472 1.875 7.5 3.88972 7.5 6.375C7.5 8.86028 9.51472 10.875 12 10.875Z'
      fill='currentColor'
    />
    <path
      d='M17.625 20.625C20.1103 20.625 22.125 18.6103 22.125 16.125C22.125 13.6397 20.1103 11.625 17.625 11.625C15.1397 11.625 13.125 13.6397 13.125 16.125C13.125 18.6103 15.1397 20.625 17.625 20.625Z'
      fill='currentColor'
    />
    <path
      d='M6.375 20.625C8.86028 20.625 10.875 18.6103 10.875 16.125C10.875 13.6397 8.86028 11.625 6.375 11.625C3.88972 11.625 1.875 13.6397 1.875 16.125C1.875 18.6103 3.88972 20.625 6.375 20.625Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CirclesThreeSolid);
export default ForwardRef;
