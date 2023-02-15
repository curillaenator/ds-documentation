import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Aperture = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M12 21L8.56165 11.3722M12 3L15.4385 12.6277M4.20571 7.5L14.2628 9.33606M4.20571 16.4994L10.8243 8.70769M19.7942 16.502L9.73711 14.666M19.7943 7.5L13.1757 15.2917'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Aperture);
export default ForwardRef;
