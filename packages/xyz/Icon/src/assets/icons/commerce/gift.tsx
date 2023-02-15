import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Gift = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 12V18.75C19.5 18.9489 19.421 19.1397 19.2803 19.2803C19.1397 19.421 18.9489 19.5 18.75 19.5H5.25C5.05109 19.5 4.86032 19.421 4.71967 19.2803C4.57902 19.1397 4.5 18.9489 4.5 18.75V12M12 7.49997V19.5M12 7.49997C12 7.49997 15.182 7.49965 16.2426 6.43899C16.6642 6.01696 16.9009 5.44479 16.9007 4.84828C16.9006 4.25177 16.6635 3.67974 16.2417 3.25794C15.8199 2.83615 15.2479 2.59911 14.6514 2.59894C14.0549 2.59877 13.4827 2.83548 13.0607 3.25704C12 4.31769 12 7.49997 12 7.49997ZM12 7.49997C12 7.49997 8.81791 7.49965 7.75725 6.43899C7.33569 6.01696 7.09898 5.44479 7.09915 4.84828C7.09932 4.25177 7.33636 3.67974 7.75816 3.25794C8.17996 2.83615 8.75199 2.59911 9.3485 2.59894C9.94502 2.59877 10.5172 2.83548 10.9392 3.25704C11.9999 4.31769 12 7.49997 12 7.49997ZM3.75 7.49997H20.25C20.6642 7.49997 21 7.83576 21 8.24997V11.25C21 11.6642 20.6642 12 20.25 12H3.75C3.33579 12 3 11.6642 3 11.25V8.24997C3 7.83576 3.33579 7.49997 3.75 7.49997Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Gift);
export default ForwardRef;