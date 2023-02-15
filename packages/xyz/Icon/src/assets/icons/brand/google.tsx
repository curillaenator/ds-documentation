import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Google = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 12H20.25C20.25 13.9087 19.5882 15.7583 18.3773 17.2338C17.1665 18.7092 15.4815 19.7191 13.6095 20.0915C11.7375 20.4639 9.79429 20.1756 8.11098 19.2759C6.42767 18.3761 5.10842 16.9205 4.378 15.1572C3.64758 13.3938 3.55118 11.4317 4.10524 9.60517C4.6593 7.77867 5.82954 6.2008 7.41655 5.14039C9.00356 4.07998 10.9092 3.60266 12.8086 3.78974C14.7081 3.97682 16.484 4.81674 17.8336 6.16638'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Google);
export default ForwardRef;