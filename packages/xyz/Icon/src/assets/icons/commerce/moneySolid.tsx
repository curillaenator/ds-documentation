import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MoneySolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.75 5.25H2.25C1.85231 5.25045 1.47105 5.40864 1.18984 5.68984C0.908636 5.97105 0.750455 6.35231 0.75 6.75V17.25C0.750455 17.6477 0.908636 18.029 1.18984 18.3102C1.47105 18.5914 1.85231 18.7495 2.25 18.75H21.75C22.1477 18.7495 22.529 18.5914 22.8102 18.3102C23.0914 18.029 23.2495 17.6477 23.25 17.25V6.75C23.2495 6.35231 23.0914 5.97105 22.8102 5.68984C22.529 5.40864 22.1477 5.25045 21.75 5.25ZM7.02745 17.25L2.25 13.1551V10.8449L7.02745 6.75H16.9725L21.7504 10.8452L21.7506 13.1546L16.9725 17.25H7.02745ZM15.75 12C15.75 12.7417 15.5301 13.4667 15.118 14.0834C14.706 14.7001 14.1203 15.1807 13.4351 15.4645C12.7498 15.7484 11.9958 15.8226 11.2684 15.6779C10.541 15.5333 9.8728 15.1761 9.34835 14.6517C8.8239 14.1272 8.46675 13.459 8.32205 12.7316C8.17736 12.0042 8.25162 11.2502 8.53545 10.5649C8.81928 9.87971 9.29993 9.29404 9.91661 8.88199C10.5333 8.46993 11.2583 8.25 12 8.25C12.9942 8.25114 13.9474 8.64659 14.6504 9.34961C15.3534 10.0526 15.7489 11.0058 15.75 12Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MoneySolid);
export default ForwardRef;
