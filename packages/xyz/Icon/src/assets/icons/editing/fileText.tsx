import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FileText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.2501 3H5.24939C5.05048 3 4.85971 3.07902 4.71906 3.21967C4.57841 3.36032 4.49939 3.55109 4.49939 3.75V20.25C4.49939 20.4489 4.57841 20.6397 4.71906 20.7803C4.85971 20.921 5.05048 21 5.24939 21H18.7501C18.8486 21 18.9461 20.9806 19.0371 20.9429C19.1281 20.9052 19.2108 20.85 19.2805 20.7803C19.3501 20.7107 19.4053 20.628 19.443 20.537C19.4807 20.446 19.5001 20.3485 19.5001 20.25V8.25M14.2501 3L19.5001 8.25M14.2501 3L14.25 8.25H19.5001M8.99997 12.75H15M8.99997 15.75H15'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FileText);
export default ForwardRef;
