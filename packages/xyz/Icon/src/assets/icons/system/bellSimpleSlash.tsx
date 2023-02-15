import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BellSimpleSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.5 3.75007L19.5 20.2501M9 20.9979H15M8.67209 3.87937C9.70058 3.29149 10.8668 2.98735 12.0514 2.99808C15.7629 3.02567 18.7316 6.1107 18.7316 9.83262V10.4979C18.7316 13.0004 19.1218 14.7201 19.5768 15.8747M17.4527 17.9978H4.5921C4.46021 17.9975 4.33075 17.9624 4.21677 17.896C4.10278 17.8297 4.00831 17.7344 3.94289 17.6199C3.87747 17.5054 3.8434 17.3757 3.84413 17.2438C3.84486 17.1119 3.88035 16.9825 3.94704 16.8687C4.5661 15.8038 5.26891 13.8553 5.26891 10.4978V9.74777C5.26657 8.37641 5.6831 7.03704 6.46278 5.90889'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BellSimpleSlash);
export default ForwardRef;
