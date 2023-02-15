import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Medium = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M22.5 6.75V17.25M12 12C12 15.1066 9.6495 17.625 6.75 17.625C3.8505 17.625 1.5 15.1066 1.5 12C1.5 8.8934 3.8505 6.375 6.75 6.375C9.6495 6.375 12 8.8934 12 12ZM19.5 12C19.5 14.8995 18.4926 17.25 17.25 17.25C16.0074 17.25 15 14.8995 15 12C15 9.10051 16.0074 6.75 17.25 6.75C18.4926 6.75 19.5 9.10051 19.5 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Medium);
export default ForwardRef;
