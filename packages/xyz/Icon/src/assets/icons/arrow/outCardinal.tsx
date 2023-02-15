import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const OutCardinal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.6516 19.0986L12 21.7503M12 21.7503L9.34834 19.0986M12 21.7503L12 15M9.34834 4.90163L12 2.25M12 2.25L14.6516 4.90163M12 2.25L12 9M4.90163 14.6519L2.25 12.0003M2.25 12.0003L4.90163 9.34871M2.25 12.0003L9 12M19.0983 9.34871L21.75 12.0003M21.75 12.0003L19.0983 14.6519M21.75 12.0003L15 12'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(OutCardinal);
export default ForwardRef;
