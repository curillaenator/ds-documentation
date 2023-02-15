import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FolderNotchPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 7.5H20.25C20.4489 7.5 20.6397 7.57902 20.7803 7.71967C20.921 7.86032 21 8.05109 21 8.25V18.75C21 18.9489 20.921 19.1397 20.7803 19.2803C20.6397 19.421 20.4489 19.5 20.25 19.5H3.75C3.55127 19.4994 3.36084 19.4202 3.22031 19.2797C3.07979 19.1392 3.00058 18.9487 3 18.75V9.75M12 7.5L9.2 5.4C9.07018 5.30263 8.91228 5.25 8.75 5.25H3.75C3.55109 5.25 3.36032 5.32902 3.21967 5.46967C3.07902 5.61032 3 5.80109 3 6V9.75M12 7.5L9.2 9.6C9.07018 9.69737 8.91228 9.75 8.75 9.75H3M9.74978 13.875H14.2499M11.9998 11.625V16.125'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FolderNotchPlus);
export default ForwardRef;
