import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const IdentificationCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.25 10.5H18M14.25 13.5H18M8.63423 13.5C9.87687 13.5 10.8842 12.4926 10.8842 11.25C10.8842 10.0074 9.87687 9 8.63423 9C7.39159 9 6.38423 10.0074 6.38423 11.25C6.38423 12.4926 7.39159 13.5 8.63423 13.5ZM8.63423 13.5C7.96908 13.5 7.32286 13.721 6.79697 14.1283C6.27108 14.5355 5.89539 15.106 5.72893 15.75M8.63423 13.5C9.29938 13.5 9.94576 13.7209 10.4717 14.1282C10.9976 14.5354 11.3733 15.1058 11.5398 15.7498M3.75 4.5H20.25C20.6642 4.5 21 4.83579 21 5.25V18.75C21 19.1642 20.6642 19.5 20.25 19.5H3.75C3.33579 19.5 3 19.1642 3 18.75V5.25C3 4.83579 3.33579 4.5 3.75 4.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(IdentificationCard);
export default ForwardRef;
