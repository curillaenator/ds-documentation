import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const GitMerge = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6.3748 15C4.92506 15 3.74982 16.1753 3.74982 17.625C3.74982 19.0747 4.92506 20.25 6.3748 20.25C7.82454 20.25 8.99978 19.0747 8.99978 17.625C8.99978 16.1753 7.82454 15 6.3748 15ZM6.3748 15V9M6.3748 9C7.82454 9 8.99978 7.82475 8.99978 6.375C8.99978 4.92525 7.82454 3.75 6.3748 3.75C4.92506 3.75 3.74982 4.92525 3.74982 6.375C3.74982 7.82475 4.92506 9 6.3748 9ZM6.3748 9L8.77554 11.8808C9.19786 12.3876 9.72644 12.7953 10.3238 13.0752C10.9212 13.355 11.5729 13.5 12.2325 13.5H15.0001M20.25 13.125C20.25 14.5747 19.0747 15.75 17.625 15.75C16.1753 15.75 15 14.5747 15 13.125C15 11.6753 16.1753 10.5 17.625 10.5C19.0747 10.5 20.25 11.6753 20.25 13.125Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(GitMerge);
export default ForwardRef;
