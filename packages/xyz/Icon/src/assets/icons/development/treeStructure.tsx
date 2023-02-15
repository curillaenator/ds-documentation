import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TreeStructure = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M7.5 12H11.25M15 17.25H13.5C12.9033 17.25 12.331 17.0129 11.909 16.591C11.4871 16.169 11.25 15.5967 11.25 15V9C11.25 8.40326 11.4871 7.83097 11.909 7.40901C12.331 6.98705 12.9033 6.75 13.5 6.75H15M3 9.375H6.75C7.16421 9.375 7.5 9.71079 7.5 10.125V13.875C7.5 14.2892 7.16421 14.625 6.75 14.625H3C2.58579 14.625 2.25 14.2892 2.25 13.875V10.125C2.25 9.71079 2.58579 9.375 3 9.375ZM15.75 3.75H20.25C20.6642 3.75 21 4.08579 21 4.5V9C21 9.41421 20.6642 9.75 20.25 9.75H15.75C15.3358 9.75 15 9.41421 15 9V4.5C15 4.08579 15.3358 3.75 15.75 3.75ZM15.75 14.25H20.25C20.6642 14.25 21 14.5858 21 15V19.5C21 19.9142 20.6642 20.25 20.25 20.25H15.75C15.3358 20.25 15 19.9142 15 19.5V15C15 14.5858 15.3358 14.25 15.75 14.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TreeStructure);
export default ForwardRef;
