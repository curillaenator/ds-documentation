import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PaperclipHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.31241 13.5H17.8124C18.2102 13.5 18.5918 13.3419 18.8731 13.0606C19.1544 12.7793 19.3124 12.3978 19.3124 12C19.3124 11.6022 19.1544 11.2206 18.8731 10.9393C18.5918 10.658 18.2102 10.5 17.8124 10.5H4.31241C2.6963 10.5 1.38618 11.8431 1.38618 13.5C1.38618 15.1569 2.6963 16.5 4.31241 16.5H17.9994C19.1928 16.5 20.3374 16.0259 21.1813 15.182C22.0253 14.3381 22.4994 13.1935 22.4994 12C22.4994 10.8065 22.0253 9.66193 21.1813 8.81802C20.3374 7.97411 19.1928 7.5 17.9994 7.5H7.49936'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(PaperclipHorizontal);
export default ForwardRef;
