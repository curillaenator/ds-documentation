import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TextBolder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6.00008 11.2498H14.2501C15.2446 11.2498 16.1985 11.6449 16.9017 12.3482C17.605 13.0515 18.0001 14.0053 18.0001 14.9998C18.0001 15.9944 17.605 16.9482 16.9017 17.6515C16.1985 18.3548 15.2446 18.7498 14.2501 18.7498L5.99953 18.7494V4.49939L13.1251 4.49985C14.0202 4.49985 14.8786 4.85543 15.5116 5.48836C16.1445 6.1213 16.5001 6.97974 16.5001 7.87485C16.5001 8.76995 16.1445 9.6284 15.5116 10.2613C14.8786 10.8943 14.0202 11.2498 13.1251 11.2498'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TextBolder);
export default ForwardRef;
