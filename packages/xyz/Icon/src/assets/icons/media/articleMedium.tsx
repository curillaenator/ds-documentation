import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ArticleMedium = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M2.25439 5.25012H3.75439M3.75439 5.25012L3.75443 12.7501M3.75439 5.25012L7.50443 11.2501L11.2544 5.25012M11.2544 5.25012H12.7544M11.2544 5.25012L11.2544 12.7501M2.25439 12.7501H4.50439M10.5044 12.7501H12.7544M15.7544 9.75012H22.5044M15.7544 12.7501H22.5044M6.75439 15.7501H22.5044M6.75439 18.7501H22.5044'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ArticleMedium);
export default ForwardRef;
