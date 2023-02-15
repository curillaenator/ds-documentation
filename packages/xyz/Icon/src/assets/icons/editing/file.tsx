import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const File = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.2503 3H5.24996C5.05106 3 4.8603 3.07903 4.71965 3.21968C4.57901 3.36033 4.5 3.55109 4.5 3.75V20.25C4.5 20.4489 4.57901 20.6397 4.71965 20.7803C4.8603 20.921 5.05106 21 5.24996 21H18.75C18.9489 21 19.1397 20.921 19.2803 20.7803C19.421 20.6397 19.5 20.4489 19.5 20.25V8.25M14.2503 3L19.5 8.25M14.2503 3L14.25 8.25H19.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(File);
export default ForwardRef;
