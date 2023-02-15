import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PencilCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 21V18M16.5 19.7963V16.5L12 6.75L7.5 16.5V19.7966M12 18C12 17.4033 12.2371 16.831 12.659 16.409C13.081 15.9871 13.6533 15.75 14.25 15.75C14.8467 15.75 15.419 15.9871 15.841 16.409C16.2629 16.831 16.5 17.4033 16.5 18M12 18C12 17.4033 11.7629 16.831 11.341 16.409C10.919 15.9871 10.3467 15.75 9.75 15.75C9.15326 15.75 8.58097 15.9871 8.15901 16.409C7.73705 16.831 7.5 17.4033 7.5 18M9.577 12H14.4232'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(PencilCircle);
export default ForwardRef;
