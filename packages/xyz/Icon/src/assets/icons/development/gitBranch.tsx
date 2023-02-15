import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const GitBranch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6.375 15V14.25C6.37501 13.6533 6.61206 13.081 7.03401 12.6591C7.45596 12.2372 8.02824 12.0001 8.62495 12.0001L15.375 12C15.9718 12 16.544 11.7629 16.966 11.341C17.3879 10.919 17.625 10.3468 17.625 9.75005V9.00004M6.375 15V9.00004M6.375 15C4.92525 15 3.75 16.1753 3.75 17.625C3.75 19.0748 4.92525 20.25 6.375 20.25C7.82475 20.25 9 19.0748 9 17.625C9 16.1753 7.82475 15 6.375 15ZM17.625 9.00004C19.0747 9.00004 20.25 7.82457 20.25 6.37482C20.25 4.92507 19.0747 3.74982 17.625 3.74982C16.1753 3.74982 15 4.92507 15 6.37482C15 7.82457 16.1753 9.00004 17.625 9.00004ZM6.375 9.00004C7.82475 9.00004 9 7.82457 9 6.37482C9 4.92507 7.82475 3.74982 6.375 3.74982C4.92525 3.74982 3.75 4.92507 3.75 6.37482C3.75 7.82457 4.92525 9.00004 6.375 9.00004Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(GitBranch);
export default ForwardRef;
