import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SuitcaseSimpleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2501 6H16.4995V5.25C16.4988 4.65348 16.2615 4.08159 15.8397 3.65978C15.418 3.23797 14.8461 3.00069 14.2495 3H9.74972C9.1532 3.00069 8.58132 3.23797 8.15952 3.65978C7.73773 4.08159 7.50047 4.65348 7.4998 5.25V6H3.75068C3.353 6.00046 2.97174 6.15865 2.69055 6.43985C2.40935 6.72106 2.25118 7.10232 2.25073 7.5V14.9855C2.25064 14.9904 2.25 14.9951 2.25 15C2.25 15.0049 2.25064 15.0096 2.25073 15.0145V19.5C2.25118 19.8977 2.40935 20.2789 2.69055 20.5601C2.97174 20.8414 3.353 20.9995 3.75068 21H20.2501C20.6477 20.9995 21.029 20.8414 21.3102 20.5601C21.5914 20.2789 21.7496 19.8977 21.75 19.5V7.5C21.7496 7.10232 21.5914 6.72106 21.3102 6.43985C21.029 6.15865 20.6477 6.00046 20.2501 6ZM8.99975 5.25C8.99997 5.05116 9.07906 4.86053 9.21965 4.71993C9.36025 4.57932 9.55088 4.50023 9.74972 4.5H14.2495C14.4484 4.50023 14.639 4.57932 14.7796 4.71993C14.9202 4.86053 14.9993 5.05116 14.9995 5.25V6H8.99975V5.25ZM20.2501 7.5L20.2506 14.25H3.75068V7.5H20.2501Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(SuitcaseSimpleSolid);
export default ForwardRef;