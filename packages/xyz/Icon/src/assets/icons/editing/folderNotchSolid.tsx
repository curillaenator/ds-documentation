import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FolderNotchSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2495 6.74976H12.249L9.64846 4.79932C9.3891 4.6056 9.07424 4.50057 8.75052 4.49976H3.74957C3.35186 4.50015 2.97056 4.65831 2.68934 4.93953C2.40813 5.22075 2.24997 5.60205 2.24957 5.99976V18.7498C2.24997 19.1475 2.40813 19.5288 2.68934 19.81C2.97056 20.0912 3.35186 20.2494 3.74957 20.2498H20.2495C20.6472 20.2494 21.0285 20.0912 21.3097 19.81C21.5909 19.5288 21.7491 19.1475 21.7495 18.7498V8.24976C21.7491 7.85205 21.5909 7.47075 21.3097 7.18953C21.0285 6.90831 20.6472 6.75015 20.2495 6.74976ZM3.74957 5.99976H8.75052L10.7498 7.49966L8.74905 8.99976H3.74957V5.99976Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(FolderNotchSolid);
export default ForwardRef;
