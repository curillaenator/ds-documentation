import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChatsSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.75 9.00006C21.7495 8.60238 21.5914 8.22111 21.3102 7.9399C21.029 7.6587 20.6477 7.50052 20.25 7.50006H17.25V4.50006C17.2495 4.10238 17.0914 3.72111 16.8102 3.4399C16.529 3.1587 16.1477 3.00052 15.75 3.00006H3.75C3.35231 3.00052 2.97105 3.1587 2.68984 3.4399C2.40864 3.72111 2.25045 4.10238 2.25 4.50006V16.5001C2.25 16.6417 2.29008 16.7804 2.36561 16.9001C2.44115 17.0199 2.54905 17.1159 2.67683 17.1769C2.80461 17.2379 2.94705 17.2615 3.08768 17.2449C3.22831 17.2284 3.36138 17.1723 3.4715 17.0833L6.75 14.4329L6.75009 17.2501C6.75055 17.6477 6.90873 18.029 7.18994 18.3102C7.47114 18.5914 7.85241 18.7496 8.25009 18.7501H17.024L20.5286 21.5833C20.6387 21.6723 20.7718 21.7284 20.9124 21.7449C21.053 21.7615 21.1955 21.7379 21.3233 21.6769C21.451 21.6159 21.5589 21.5199 21.6345 21.4001C21.71 21.2804 21.7501 21.1417 21.7501 21.0001L21.75 9.00006ZM17.7607 17.4168C17.6272 17.3089 17.4608 17.2501 17.2892 17.2501H8.25009L8.25 14.2501H15.75C16.1477 14.2496 16.529 14.0914 16.8102 13.8102C17.0914 13.529 17.2495 13.1477 17.25 12.7501V9.00006H20.25L20.2501 19.4293L17.7607 17.4168Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ChatsSolid);
export default ForwardRef;