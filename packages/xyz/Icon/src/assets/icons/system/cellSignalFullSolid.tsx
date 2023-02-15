import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CellSignalFullSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.5741 2.67457C18.3001 2.56043 17.9984 2.5304 17.7073 2.5883C17.4161 2.64621 17.1488 2.78942 16.9394 2.99972L1.50019 18.439C1.29037 18.6488 1.14748 18.9161 1.08958 19.207C1.03167 19.498 1.06136 19.7996 1.17488 20.0737C1.28841 20.3478 1.48067 20.5821 1.72735 20.7469C1.97403 20.9118 2.26405 20.9997 2.56073 20.9997H18.0001C18.3978 20.9993 18.7791 20.8411 19.0603 20.5599C19.3415 20.2787 19.4996 19.8974 19.5001 19.4997V4.06035C19.5007 3.76355 19.4129 3.47329 19.2481 3.22651C19.0832 2.97973 18.8486 2.7876 18.5741 2.67457Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CellSignalFullSolid);
export default ForwardRef;
