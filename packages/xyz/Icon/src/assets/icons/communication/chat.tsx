import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Chat = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.25172 18.926L4.23268 21.4639C4.12336 21.5558 3.99006 21.6146 3.84847 21.6333C3.70688 21.652 3.56289 21.63 3.43342 21.5697C3.30395 21.5094 3.19439 21.4133 3.11762 21.2929C3.04085 21.1725 3.00007 21.0326 3.00007 20.8898V6.00006C3.00007 5.80115 3.07909 5.61038 3.21974 5.46973C3.36039 5.32908 3.55116 5.25006 3.75007 5.25006H20.2501C20.449 5.25006 20.6398 5.32908 20.7804 5.46973C20.9211 5.61038 21.0001 5.80115 21.0001 6.00006V18.0001C21.0001 18.199 20.9211 18.3897 20.7804 18.5304C20.6398 18.671 20.449 18.7501 20.2501 18.7501H7.73433C7.55777 18.7501 7.38687 18.8124 7.25172 18.926Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Chat);
export default ForwardRef;
