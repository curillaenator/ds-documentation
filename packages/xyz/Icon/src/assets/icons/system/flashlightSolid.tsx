import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FlashlightSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.2504 1.5H6.75037C6.35268 1.50045 5.97141 1.65864 5.69021 1.93984C5.409 2.22105 5.25082 2.60231 5.25037 3V7.24997C5.25104 7.57443 5.35624 7.89005 5.55038 8.15002L7.50037 10.75V21C7.50082 21.3977 7.659 21.779 7.94021 22.0602C8.22141 22.3414 8.60268 22.4995 9.00037 22.5H15.0004C15.3981 22.4995 15.7793 22.3414 16.0605 22.0602C16.3417 21.779 16.4999 21.3977 16.5004 21L16.5003 10.7499L18.4505 8.14993C18.6446 7.88994 18.7497 7.57438 18.7504 7.24997V3C18.7499 2.60232 18.5917 2.22105 18.3105 1.93984C18.0293 1.65864 17.6481 1.50046 17.2504 1.5ZM12.7504 14.25C12.7504 14.4489 12.6713 14.6397 12.5307 14.7803C12.39 14.921 12.1993 15 12.0004 15C11.8015 15 11.6107 14.921 11.47 14.7803C11.3294 14.6397 11.2504 14.4489 11.2504 14.25V11.25C11.2504 11.0511 11.3294 10.8603 11.47 10.7197C11.6107 10.579 11.8015 10.5 12.0004 10.5C12.1993 10.5 12.39 10.579 12.5307 10.7197C12.6713 10.8603 12.7504 11.0511 12.7504 11.25V14.25ZM6.74995 5.25L6.74945 3H17.2504L17.2504 5.25H6.74995Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(FlashlightSolid);
export default ForwardRef;