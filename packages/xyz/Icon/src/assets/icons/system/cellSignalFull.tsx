import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CellSignalFull = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15 5.99989V20.2499M11.25 9.74989V20.2499M7.49996 13.4999V20.2499M18.7499 4.06055V19.4999C18.7499 19.6988 18.6709 19.8896 18.5302 20.0302C18.3896 20.1709 18.1988 20.2499 17.9999 20.2499H2.56055C2.41221 20.2499 2.26721 20.2059 2.14387 20.1235C2.02053 20.0411 1.9244 19.9239 1.86764 19.7869C1.81087 19.6499 1.79602 19.4991 1.82496 19.3536C1.8539 19.2081 1.92533 19.0745 2.03022 18.9696L17.4696 3.53022C17.5744 3.42533 17.7081 3.3539 17.8536 3.32496C17.9991 3.29602 18.1499 3.31087 18.2869 3.36764C18.4239 3.4244 18.5411 3.52053 18.6235 3.64387C18.7059 3.76721 18.7499 3.91221 18.7499 4.06055Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CellSignalFull);
export default ForwardRef;