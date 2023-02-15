import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CircleDashed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.30511 9.67014C3.71266 8.14339 4.51679 6.7516 5.63594 5.63598M5.63489 18.3648C4.51644 17.2485 3.71317 15.8562 3.30658 14.3291M14.3297 20.6946C12.8038 21.105 11.1964 21.1045 9.67067 20.6931M20.6945 14.3294C20.287 15.8562 19.4829 17.248 18.3637 18.3636M18.3639 5.63488C19.4823 6.75119 20.2856 8.14349 20.6922 9.67049M9.67037 3.30496C11.1963 2.8945 12.8037 2.895 14.3294 3.30641'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CircleDashed);
export default ForwardRef;
