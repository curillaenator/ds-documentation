import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MapPinSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.9994 1.49963C9.81212 1.50223 7.71521 2.37226 6.16859 3.91887C4.62198 5.46548 3.75195 7.56239 3.74936 9.74963C3.74936 16.8087 11.2494 22.1407 11.5687 22.3641C11.695 22.4523 11.8453 22.4996 11.9994 22.4996C12.1534 22.4996 12.3037 22.4523 12.43 22.3641C12.7494 22.1407 20.2494 16.8087 20.2494 9.74963C20.2468 7.56239 19.3767 5.46548 17.8301 3.91887C16.2835 2.37226 14.1866 1.50223 11.9994 1.49963ZM11.9999 6.74991C12.5933 6.74991 13.1733 6.92585 13.6666 7.2555C14.16 7.58514 14.5445 8.05368 14.7715 8.60186C14.9986 9.15003 15.058 9.75323 14.9423 10.3352C14.8265 10.9171 14.5408 11.4517 14.1212 11.8712C13.7017 12.2908 13.1671 12.5765 12.5852 12.6923C12.0032 12.808 11.4 12.7486 10.8519 12.5215C10.3037 12.2945 9.83514 11.91 9.5055 11.4166C9.17586 10.9233 8.99991 10.3432 8.99991 9.74991C8.9999 9.35594 9.07749 8.96582 9.22825 8.60184C9.37901 8.23786 9.59999 7.90714 9.87856 7.62856C10.1571 7.34998 10.4879 7.129 10.8518 6.97824C11.2158 6.82748 11.6059 6.74989 11.9999 6.74991Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MapPinSolid);
export default ForwardRef;