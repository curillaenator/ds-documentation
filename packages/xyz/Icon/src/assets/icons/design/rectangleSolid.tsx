import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const RectangleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2506 3.75H3.75061C2.92218 3.75 2.25061 4.42157 2.25061 5.25V18.75C2.25061 19.5784 2.92218 20.25 3.75061 20.25H20.2506C21.079 20.25 21.7506 19.5784 21.7506 18.75V5.25C21.7506 4.42157 21.079 3.75 20.2506 3.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(RectangleSolid);
export default ForwardRef;
