import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const GitDiff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.3751 15C16.9254 15 15.7501 16.1753 15.7501 17.625C15.7501 19.0747 16.9254 20.25 18.3751 20.25C19.8249 20.25 21.0001 19.0747 21.0001 17.625C21.0001 16.1753 19.8249 15 18.3751 15ZM18.3751 15L18.3751 11.2389C18.375 10.0454 17.9009 8.90093 17.0571 8.05706L13.5 4.5M13.5 4.5V8.25M13.5 4.5H17.25M5.625 9C7.07475 9 8.25 7.82475 8.25 6.375C8.25 4.92525 7.07475 3.75 5.625 3.75C4.17525 3.75 3 4.92525 3 6.375C3 7.82475 4.17525 9 5.625 9ZM5.625 9L5.62515 12.7611C5.6252 13.9546 6.0993 15.0991 6.94317 15.9429L10.5002 19.5M10.5002 19.5L10.5001 15.75M10.5002 19.5H6.75015'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(GitDiff);
export default ForwardRef;
