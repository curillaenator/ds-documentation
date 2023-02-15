import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FadersHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.7499 16.1243L3.74988 16.1243M20.2499 16.1243L15.7499 16.1243M6.74988 7.87424L3.74988 7.87416M20.2499 7.87416L9.74988 7.87424M9.74988 5.62427V10.1243M15.7499 18.3743V13.8743'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FadersHorizontal);
export default ForwardRef;
