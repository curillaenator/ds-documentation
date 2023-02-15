import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CellSignalSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.49956 3.75088L19.4996 20.2509L2.56055 20.2498C2.41221 20.2498 2.26721 20.2058 2.14387 20.1234C2.02053 20.041 1.9244 19.9238 1.86764 19.7868C1.81087 19.6497 1.79602 19.4989 1.82496 19.3535C1.8539 19.208 1.92533 19.0743 2.03022 18.9694L10.5707 10.429M12.6944 8.30537L17.4696 3.53022C17.5745 3.42533 17.7081 3.3539 17.8536 3.32496C17.9991 3.29602 18.1499 3.31087 18.2869 3.36764C18.424 3.4244 18.5411 3.52053 18.6235 3.64387C18.7059 3.76721 18.7499 3.91221 18.7499 4.06055V14.9664'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CellSignalSlash);
export default ForwardRef;
