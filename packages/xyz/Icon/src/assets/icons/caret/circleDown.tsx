import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CircleDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.9696 11.4102C16.2652 11.0818 16.2386 10.5759 15.9102 10.2804C15.5818 9.9848 15.0759 10.0114 14.7804 10.3398L15.9696 11.4102ZM12 14.625L11.4054 15.1602C11.5571 15.3287 11.7732 15.425 12 15.425C12.2268 15.425 12.4429 15.3287 12.5946 15.1602L12 14.625ZM9.21964 10.3398C8.92407 10.0114 8.41824 9.9848 8.08983 10.2804C7.76142 10.5759 7.7348 11.0818 8.03036 11.4102L9.21964 10.3398ZM20.2 12C20.2 16.5287 16.5287 20.2 12 20.2V21.8C17.4124 21.8 21.8 17.4124 21.8 12H20.2ZM12 20.2C7.47127 20.2 3.8 16.5287 3.8 12H2.2C2.2 17.4124 6.58761 21.8 12 21.8V20.2ZM3.8 12C3.8 7.47127 7.47127 3.8 12 3.8V2.2C6.58761 2.2 2.2 6.58761 2.2 12H3.8ZM12 3.8C16.5287 3.8 20.2 7.47127 20.2 12H21.8C21.8 6.58761 17.4124 2.2 12 2.2V3.8ZM14.7804 10.3398L11.4054 14.0898L12.5946 15.1602L15.9696 11.4102L14.7804 10.3398ZM12.5946 14.0898L9.21964 10.3398L8.03036 11.4102L11.4054 15.1602L12.5946 14.0898Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CircleDown);
export default ForwardRef;