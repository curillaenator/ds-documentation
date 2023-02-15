import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChatTeardropText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.37493 10.4992H14.9999M9.37493 13.4992H14.9999M12.375 20.2492H4.46875C4.27813 20.2492 4.09531 20.1735 3.96052 20.0387C3.82573 19.9039 3.75 19.7211 3.75 19.5305V11.6242C3.75 10.4915 3.97309 9.36998 4.40654 8.32355C4.83998 7.27712 5.4753 6.32631 6.2762 5.5254C7.0771 4.7245 8.02791 4.08919 9.07435 3.65574C10.1208 3.2223 11.2423 2.99921 12.375 2.99921C13.5076 2.99921 14.6292 3.2223 15.6756 3.65575C16.7221 4.08919 17.6729 4.7245 18.4738 5.52541C19.2747 6.32632 19.91 7.27713 20.3435 8.32356C20.7769 9.36999 21 10.4916 21 11.6242C21 13.9117 20.0913 16.1055 18.4738 17.723C16.8563 19.3405 14.6625 20.2492 12.375 20.2492Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ChatTeardropText);
export default ForwardRef;
