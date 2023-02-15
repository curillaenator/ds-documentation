import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ThumbsDownSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M22.2831 14.7209L21.1581 5.7209C21.0893 5.17704 20.8247 4.6769 20.4137 4.31412C20.0027 3.95133 19.4736 3.75078 18.9254 3.75H2.99963C2.60194 3.75045 2.22067 3.90864 1.93947 4.18984C1.65826 4.47105 1.50008 4.85231 1.49963 5.25V13.5C1.50008 13.8977 1.65826 14.279 1.93947 14.5602C2.22067 14.8414 2.60194 14.9995 2.99963 15H7.03609L10.5788 22.0854C10.6411 22.21 10.7368 22.3148 10.8553 22.388C10.9738 22.4612 11.1103 22.5 11.2496 22.5C12.2438 22.4989 13.197 22.1034 13.9 21.4004C14.603 20.6974 14.9985 19.7442 14.9996 18.75V17.25H20.0504C20.3694 17.25 20.6848 17.1822 20.9756 17.051C21.2665 16.9198 21.5261 16.7282 21.7372 16.4891C21.9483 16.2499 22.1062 15.9686 22.2003 15.6637C22.2944 15.3589 22.3227 15.0375 22.2831 14.7209ZM6.74963 13.5H2.99963V5.25H6.74963V13.5Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ThumbsDownSolid);
export default ForwardRef;
