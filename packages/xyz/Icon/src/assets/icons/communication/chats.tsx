import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Chats = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.50006 13.5001V17.2501C7.50006 17.449 7.57908 17.6397 7.71973 17.7804C7.86038 17.921 8.05115 18.0001 8.25006 18.0001H17.2892L21.0001 21.0001V9.00006C21.0001 8.80115 20.921 8.61038 20.7804 8.46973C20.6397 8.32908 20.449 8.25006 20.2501 8.25006H16.5001M6.71096 13.5001L3.00006 16.5001V4.50006C3.00006 4.30115 3.07908 4.11038 3.21973 3.96973C3.36038 3.82908 3.55115 3.75006 3.75006 3.75006H15.7501C15.949 3.75006 16.1397 3.82908 16.2804 3.96973C16.421 4.11038 16.5001 4.30115 16.5001 4.50006V12.7501C16.5001 12.949 16.421 13.1397 16.2804 13.2804C16.1397 13.421 15.949 13.5001 15.7501 13.5001H6.71096Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Chats);
export default ForwardRef;
