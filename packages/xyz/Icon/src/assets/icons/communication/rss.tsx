import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Rss = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.5 13.5C6.0913 13.5 7.61742 14.1321 8.74264 15.2574C9.86786 16.3826 10.5 17.9087 10.5 19.5M4.5 9C7.28477 9 9.95549 10.1062 11.9246 12.0754C13.8938 14.0445 15 16.7152 15 19.5M4.5 4.5C6.46983 4.5 8.42037 4.88799 10.2403 5.64181C12.0601 6.39563 13.7137 7.50052 15.1066 8.8934C16.4995 10.2863 17.6044 11.9399 18.3582 13.7597C19.112 15.5796 19.5 17.5302 19.5 19.5M4.8 19.2H4.8012'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Rss);
export default ForwardRef;
