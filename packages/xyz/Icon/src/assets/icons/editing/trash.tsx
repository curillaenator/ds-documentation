import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Trash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2498 5.25L3.74976 5.25001M9.75001 9.75V15.75M14.25 9.75V15.75M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6.00001C5.8011 20.25 5.61033 20.171 5.46968 20.0303C5.32903 19.8897 5.25001 19.6989 5.25001 19.5V5.25M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75001C9.35219 2.25 8.97066 2.40804 8.68935 2.68934C8.40805 2.97064 8.25001 3.35218 8.25001 3.75V5.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Trash);
export default ForwardRef;
