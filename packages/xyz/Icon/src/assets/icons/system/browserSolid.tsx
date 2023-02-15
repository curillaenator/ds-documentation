import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BrowserSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2501 3.75H3.75068C3.353 3.75046 2.97174 3.90865 2.69055 4.18985C2.40935 4.47106 2.25118 4.85232 2.25073 5.25V8.98549C2.25064 8.99039 2.25 8.9951 2.25 9C2.25 9.0049 2.25064 9.00961 2.25073 9.01451V18.75C2.25118 19.1477 2.40935 19.5289 2.69055 19.8101C2.97174 20.0914 3.353 20.2495 3.75068 20.25H20.2501C20.6477 20.2495 21.029 20.0914 21.3102 19.8101C21.5914 19.5289 21.7496 19.1477 21.75 18.75V5.25C21.7496 4.85232 21.5914 4.47106 21.3102 4.18985C21.029 3.90865 20.6477 3.75046 20.2501 3.75ZM20.2501 5.25L20.2502 8.25H3.75068V5.25H20.2501Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(BrowserSolid);
export default ForwardRef;
