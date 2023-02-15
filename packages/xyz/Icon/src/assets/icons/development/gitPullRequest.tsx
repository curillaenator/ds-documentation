import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const GitPullRequest = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6.375 15C4.92525 15 3.75 16.1753 3.75 17.625C3.75 19.0747 4.92525 20.25 6.375 20.25C7.82475 20.25 9 19.0747 9 17.625C9 16.1753 7.82475 15 6.375 15ZM6.375 15V9M6.375 9C7.82475 9 9 7.82475 9 6.375C9 4.92525 7.82475 3.75 6.375 3.75C4.92525 3.75 3.75 4.92525 3.75 6.375C3.75 7.82475 4.92525 9 6.375 9ZM17.6251 15C16.1754 15 15.0001 16.1753 15.0001 17.625C15.0001 19.0747 16.1754 20.25 17.6251 20.25C19.0749 20.25 20.2501 19.0747 20.2501 17.625C20.2501 16.1753 19.0749 15 17.6251 15ZM17.6251 15L17.6251 11.2389C17.625 10.0454 17.1509 8.90093 16.3071 8.05706L12.75 4.5M12.75 4.5V8.25M12.75 4.5H16.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(GitPullRequest);
export default ForwardRef;
