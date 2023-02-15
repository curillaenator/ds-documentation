import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const AlignCenterHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 2.9994V5.24938M12 18.7494V20.9994M12 10.4994V13.4994M6.75 5.25H17.25C17.6642 5.25 18 5.58579 18 6V9.75C18 10.1642 17.6642 10.5 17.25 10.5H6.75C6.33579 10.5 6 10.1642 6 9.75V6C6 5.58579 6.33579 5.25 6.75 5.25ZM4.5 13.5H19.5C19.9142 13.5 20.25 13.8358 20.25 14.25V18C20.25 18.4142 19.9142 18.75 19.5 18.75H4.5C4.08579 18.75 3.75 18.4142 3.75 18V14.25C3.75 13.8358 4.08579 13.5 4.5 13.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(AlignCenterHorizontal);
export default ForwardRef;
