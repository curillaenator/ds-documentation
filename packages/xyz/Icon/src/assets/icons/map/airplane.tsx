import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Airplane = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 20.25L8.25 21.75V18.75L9.75 17.25V14.25L2.25 15.75V12.75L9.75 9L9.76055 4.5C9.76055 3.90326 9.9976 3.33097 10.4196 2.90901C10.8415 2.48705 11.4138 2.25 12.0106 2.25C12.6073 2.25 13.1796 2.48705 13.6015 2.90901C14.0235 3.33097 14.2606 3.90326 14.2606 4.5L14.2711 9L21.7711 12.75V15.75L14.2711 14.25V17.25L15.75 18.75V21.75L12 20.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Airplane);
export default ForwardRef;