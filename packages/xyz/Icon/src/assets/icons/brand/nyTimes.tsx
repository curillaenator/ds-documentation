import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NyTimes = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.2 13.8H16.2012M19.2725 15.3148C18.9326 16.6786 18.2163 17.9195 17.2054 18.896C16.1944 19.8724 14.9294 20.5452 13.5546 20.8375C12.1797 21.1299 10.7505 21.0301 9.42962 20.5495C8.10879 20.0689 6.94957 19.2268 6.08412 18.1193C5.21867 17.0118 4.68182 15.6834 4.53476 14.2856C4.38771 12.8877 4.63636 11.4767 5.25239 10.2133C5.86842 8.94998 6.82702 7.88512 8.01892 7.14017C9.21082 6.39522 10.588 6.00015 11.9936 6M6.30456 8.61249C5.63397 8.54625 5.01454 8.22467 4.57451 7.71434C4.13447 7.20401 3.90753 6.544 3.94068 5.87097C3.97383 5.19794 4.26452 4.56343 4.75257 4.0988C5.24062 3.63418 5.88866 3.37503 6.5625 3.375L17.4375 8.625C18.1337 8.625 18.8014 8.34844 19.2937 7.85616C19.7859 7.36387 20.0625 6.69619 20.0625 6C20.0625 5.30381 19.7859 4.63613 19.2937 4.14384C18.8014 3.65156 18.1337 3.375 17.4375 3.375M4.55533 14.467L11.9936 10.5V21M8.99363 12.1V20.376'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(NyTimes);
export default ForwardRef;