import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChatText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.00006 10.5H15.0001M9.00006 13.5H15.0001M7.31112 18.876L4.23267 21.4639C4.12334 21.5558 3.99005 21.6146 3.84846 21.6333C3.70687 21.652 3.56287 21.63 3.4334 21.5697C3.30393 21.5094 3.19437 21.4133 3.11761 21.2929C3.04084 21.1725 3.00006 21.0326 3.00006 20.8898V6.00006C3.00006 5.80115 3.07908 5.61038 3.21973 5.46973C3.36038 5.32908 3.55115 5.25006 3.75006 5.25006H20.2501C20.449 5.25006 20.6397 5.32908 20.7804 5.46973C20.921 5.61038 21.0001 5.80115 21.0001 6.00006V18.0001C21.0001 18.199 20.921 18.3897 20.7804 18.5304C20.6397 18.671 20.449 18.7501 20.2501 18.7501H7.65671L7.31112 18.876Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ChatText);
export default ForwardRef;
