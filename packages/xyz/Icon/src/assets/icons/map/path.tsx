import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Path = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 18.75C16.5 19.9926 17.5074 21 18.75 21C19.9926 21 21 19.9926 21 18.75C21 17.5074 19.9926 16.5 18.75 16.5C17.5074 16.5 16.5 17.5074 16.5 18.75ZM16.5 18.75H6.75C5.75544 18.75 4.80161 18.3549 4.09835 17.6517C3.39509 16.9484 3 15.9946 3 15C3 14.0054 3.39509 13.0516 4.09835 12.3483C4.80161 11.6451 5.75544 11.25 6.75 11.25H15.75C16.5457 11.25 17.3087 10.9339 17.8713 10.3713C18.4339 9.80871 18.75 9.04565 18.75 8.25C18.75 7.45435 18.4339 6.69129 17.8713 6.12868C17.3087 5.56607 16.5457 5.25 15.75 5.25H6.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Path);
export default ForwardRef;
