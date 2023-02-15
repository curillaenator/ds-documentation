import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const GlobeStand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.8943 15.8932C17.0658 17.7217 14.5859 18.7489 12 18.7489M12 18.7489C9.41414 18.7489 6.93419 17.7217 5.10571 15.8932C3.27723 14.0647 2.25 11.5848 2.25 8.99891C2.25 6.41305 3.27723 3.93309 5.10571 2.10461M12 18.7489V21.7493M9 21.7493H15M18.75 8.99929C18.75 12.7272 15.7279 15.7493 12 15.7493C8.27208 15.7493 5.25 12.7272 5.25 8.99929C5.25 5.27136 8.27208 2.24929 12 2.24929C15.7279 2.24929 18.75 5.27136 18.75 8.99929Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(GlobeStand);
export default ForwardRef;
