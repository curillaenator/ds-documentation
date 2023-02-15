import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ArcLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.63579 13.886H2.63579M2.63579 13.886V7.88599M2.63579 13.886L5.63577 10.886C6.89444 9.62737 8.49809 8.7702 10.2439 8.42294C11.9897 8.07567 13.7993 8.2539 15.4439 8.93509C17.0884 9.61628 18.494 10.7698 19.483 12.2499C20.4719 13.7299 20.9997 15.47 20.9997 17.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ArcLeft);
export default ForwardRef;
