import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Wheelchair = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.98946 5.625C10.025 5.625 10.8645 4.78553 10.8645 3.75C10.8645 2.71447 10.025 1.875 8.98946 1.875C7.95393 1.875 7.11447 2.71447 7.11447 3.75C7.11447 4.78553 7.95393 5.625 8.98946 5.625ZM8.98946 5.625L8.98947 12.375H17.2395L20.2395 18.375L22.4895 17.625M15.728 15.375C15.6548 16.5435 15.2414 17.665 14.5388 18.6014C13.8361 19.5378 12.8748 20.2482 11.7734 20.645C10.672 21.0418 9.47849 21.1078 8.34006 20.8347C7.20162 20.5616 6.16794 19.9614 5.36638 19.1081C4.56482 18.2548 4.03041 17.1857 3.82898 16.0324C3.62755 14.8792 3.76792 13.6921 4.23277 12.6177C4.69763 11.5432 5.46667 10.6282 6.44514 9.98535C7.42362 9.34254 8.56877 9.00002 9.7395 9H14.9895'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Wheelchair);
export default ForwardRef;
