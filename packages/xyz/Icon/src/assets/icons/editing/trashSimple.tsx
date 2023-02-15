import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TrashSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2498 5.25L3.74976 5.25001M8.25001 2.25H15.75M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6.00001C5.8011 20.25 5.61033 20.171 5.46968 20.0303C5.32903 19.8897 5.25001 19.6989 5.25001 19.5V5.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TrashSimple);
export default ForwardRef;
