import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TagChevronSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M22.0973 12.8314L18.0972 18.8314C17.9605 19.037 17.7749 19.2056 17.5571 19.3222C17.3394 19.4387 17.0962 19.4995 16.8492 19.4993H2.25056C2.11481 19.4993 1.98161 19.4624 1.86515 19.3927C1.7487 19.3229 1.65336 19.2229 1.58931 19.1032C1.52525 18.9835 1.49488 18.8487 1.50144 18.7131C1.508 18.5775 1.55124 18.4462 1.62654 18.3333L5.84914 12.0001L1.62649 5.66528C1.5512 5.55233 1.50797 5.42106 1.50142 5.28547C1.49487 5.14988 1.52525 5.01505 1.5893 4.89537C1.65336 4.77568 1.7487 4.67562 1.86516 4.60587C1.98161 4.53611 2.11481 4.49927 2.25056 4.49927H16.8492C17.0962 4.499 17.3394 4.55986 17.5572 4.67641C17.7749 4.79296 17.9605 4.96158 18.0972 5.16724L22.0973 11.1672C22.262 11.4135 22.35 11.7031 22.35 11.9993C22.35 12.2956 22.262 12.5852 22.0973 12.8314Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(TagChevronSolid);
export default ForwardRef;