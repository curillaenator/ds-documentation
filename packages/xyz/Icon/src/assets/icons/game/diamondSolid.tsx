import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DiamondSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M22.1251 13.0605L13.0607 22.1249C12.7792 22.4058 12.3977 22.5635 12 22.5635C11.6024 22.5635 11.2209 22.4058 10.9394 22.1249L1.875 13.0605C1.59412 12.779 1.43637 12.3976 1.43637 11.9999C1.43637 11.6022 1.59412 11.2208 1.875 10.9393L10.9394 1.87491C11.2209 1.59403 11.6024 1.43628 12 1.43628C12.3977 1.43628 12.7792 1.59403 13.0607 1.87491L22.1251 10.9393C22.406 11.2208 22.5637 11.6022 22.5637 11.9999C22.5637 12.3976 22.406 12.779 22.1251 13.0605Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(DiamondSolid);
export default ForwardRef;
