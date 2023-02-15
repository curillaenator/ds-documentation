import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const AirplaneInFlight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6.74998 20.25H20.25M2.50794 7.5H4.12491L5.99991 9.75H8.99991L7.82897 6.23717C7.79139 6.12443 7.78114 6.00437 7.79906 5.88689C7.81698 5.76941 7.86256 5.65787 7.93205 5.56147C8.00154 5.46506 8.09294 5.38655 8.19872 5.33239C8.3045 5.27824 8.42164 5.25 8.54048 5.25H10.1249L14.2499 9.75H19.4999C20.2956 9.75 21.0586 10.0661 21.6212 10.6287C22.1838 11.1913 22.4999 11.9544 22.4999 12.75V15H5.98201C5.33683 15 4.70884 14.792 4.19121 14.4069C3.67359 14.0218 3.29392 13.48 3.10853 12.862L1.78956 8.46551C1.75597 8.35352 1.74902 8.23523 1.76927 8.12008C1.78953 8.00493 1.83642 7.8961 1.90622 7.8023C1.97601 7.7085 2.06677 7.63231 2.17124 7.57982C2.27572 7.52734 2.39102 7.5 2.50794 7.5Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(AirplaneInFlight);
export default ForwardRef;
