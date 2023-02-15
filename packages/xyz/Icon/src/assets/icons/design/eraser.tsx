import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Eraser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.58284 9.33335L14.9468 15.6972M20.2501 20.2342H6.75658L3.27955 16.7572C3.14026 16.6179 3.02977 16.4526 2.95439 16.2706C2.87901 16.0886 2.84021 15.8935 2.84021 15.6966C2.84021 15.4996 2.87901 15.3045 2.95439 15.1225C3.02977 14.9405 3.14026 14.7752 3.27955 14.6359L13.8862 4.02929C14.1675 3.74799 14.549 3.58995 14.9468 3.58995C15.3446 3.58995 15.7262 3.74799 16.0075 4.02929L20.2501 8.27193C20.3894 8.41122 20.4999 8.57658 20.5753 8.75857C20.6507 8.94056 20.6895 9.13561 20.6895 9.33259C20.6895 9.52957 20.6507 9.72463 20.5753 9.90662C20.4999 10.0886 20.3894 10.254 20.2501 10.3933L10.4091 20.2342'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Eraser);
export default ForwardRef;
