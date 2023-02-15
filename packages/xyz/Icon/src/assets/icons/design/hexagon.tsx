import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Hexagon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.625 16.4374V7.56261C20.625 7.4298 20.5897 7.29936 20.5228 7.18465C20.4559 7.06993 20.3597 6.97504 20.244 6.90969L12.369 2.4586C12.2565 2.39497 12.1293 2.36153 12 2.36153C11.8707 2.36153 11.7435 2.39497 11.631 2.4586L3.75596 6.90969C3.64033 6.97504 3.54414 7.06993 3.4772 7.18465C3.41027 7.29936 3.375 7.4298 3.375 7.56261V16.4374C3.375 16.5702 3.41027 16.7007 3.4772 16.8154C3.54414 16.9301 3.64033 17.025 3.75596 17.0903L11.631 21.5414C11.7435 21.6051 11.8707 21.6385 12 21.6385C12.1293 21.6385 12.2565 21.6051 12.369 21.5414L20.244 17.0903C20.3597 17.025 20.4559 16.9301 20.5228 16.8154C20.5897 16.7007 20.625 16.5702 20.625 16.4374V16.4374Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Hexagon);
export default ForwardRef;
