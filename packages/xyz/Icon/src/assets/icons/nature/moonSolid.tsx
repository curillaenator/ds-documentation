import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MoonSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.0288 14.0898C20.9998 13.9956 20.9525 13.908 20.8896 13.832C20.8267 13.7561 20.7494 13.6933 20.6622 13.6473C20.575 13.6012 20.4796 13.5728 20.3814 13.5636C20.2832 13.5545 20.1842 13.5648 20.09 13.5939C18.7478 13.9629 17.3317 13.9696 15.986 13.6133C14.6404 13.2571 13.4131 12.5506 12.4292 11.5659C11.4453 10.5812 10.7399 9.3533 10.3848 8.00731C10.0297 6.66133 10.0376 5.24529 10.4077 3.90335C10.4466 3.7736 10.4496 3.63573 10.4165 3.50439C10.3833 3.37305 10.3152 3.25313 10.2194 3.15737C10.1236 3.0616 10.0037 2.99356 9.87234 2.96047C9.74098 2.92738 9.60312 2.93047 9.47338 2.96942C7.89679 3.41083 6.46326 4.25736 5.3154 5.4248C4.16755 6.59224 3.34539 8.03989 2.93072 9.62372C2.51606 11.2076 2.52333 12.8724 2.95183 14.4525C3.38033 16.0327 4.21511 17.4731 5.37312 18.6304C6.53113 19.7878 7.97201 20.6218 9.5524 21.0494C11.1328 21.477 12.7976 21.4833 14.3812 21.0678C15.9648 20.6522 17.412 19.8292 18.5788 18.6807C19.7456 17.5322 20.5913 16.0982 21.0318 14.5214C21.0731 14.3803 21.0721 14.2303 21.0288 14.0898Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MoonSolid);
export default ForwardRef;