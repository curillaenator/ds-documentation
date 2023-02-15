import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FirstAidSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.75 9.75V14.25C21.7495 14.6477 21.5914 15.029 21.3102 15.3102C21.029 15.5914 20.6477 15.7495 20.25 15.75H15.75V20.25C15.7495 20.6477 15.5914 21.029 15.3102 21.3102C15.029 21.5914 14.6477 21.7495 14.25 21.75H9.75C9.35231 21.7495 8.97105 21.5914 8.68984 21.3102C8.40864 21.029 8.25045 20.6477 8.25 20.25V15.75H3.75C3.35231 15.7495 2.97105 15.5914 2.68984 15.3102C2.40864 15.029 2.25045 14.6477 2.25 14.25V9.75C2.25045 9.35231 2.40864 8.97105 2.68984 8.68984C2.97105 8.40864 3.35231 8.25045 3.75 8.25H8.25V3.75C8.25045 3.35231 8.40864 2.97105 8.68984 2.68984C8.97105 2.40864 9.35231 2.25045 9.75 2.25H14.25C14.6477 2.25045 15.029 2.40864 15.3102 2.68984C15.5914 2.97105 15.7495 3.35231 15.75 3.75V8.25H20.25C20.6477 8.25045 21.029 8.40864 21.3102 8.68984C21.5914 8.97105 21.7495 9.35231 21.75 9.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(FirstAidSolid);
export default ForwardRef;