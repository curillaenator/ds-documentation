import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CloudSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15 3.75C13.4678 3.75126 11.9662 4.17869 10.663 4.9845C9.35979 5.79031 8.30642 6.94272 7.62067 8.3129L7.62017 8.31285C7.0459 9.45703 6.74751 10.7198 6.74891 12C6.74891 12.1989 6.66989 12.3897 6.52924 12.5303C6.38858 12.671 6.19782 12.75 5.99891 12.75C5.79999 12.75 5.60923 12.671 5.46858 12.5303C5.32792 12.3897 5.24891 12.1989 5.24891 12C5.24773 10.7313 5.49553 9.47462 5.97828 8.30132C4.46663 8.4972 3.08622 9.26115 2.11746 10.438C1.1487 11.6148 0.664239 13.1163 0.762482 14.6374C0.860726 16.1586 1.53431 17.5853 2.64641 18.6277C3.7585 19.6702 5.22571 20.2502 6.75001 20.25H15C17.188 20.25 19.2865 19.3808 20.8336 17.8336C22.3808 16.2865 23.25 14.188 23.25 12C23.25 9.81196 22.3808 7.71354 20.8336 6.16637C19.2865 4.61919 17.188 3.75 15 3.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CloudSolid);
export default ForwardRef;