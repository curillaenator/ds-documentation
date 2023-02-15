import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PinterestSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.7502 12C21.7498 13.5104 21.3986 15.0001 20.7243 16.3517C20.05 17.7032 19.0709 18.8797 17.8643 19.7883C16.6577 20.6969 15.2565 21.3128 13.7713 21.5874C12.286 21.8621 10.7573 21.788 9.30552 21.371L10.2258 17.6899C10.9859 18.1516 11.861 18.3892 12.7502 18.375C16.0586 18.375 18.7502 15.5152 18.7502 12C18.7496 11.0046 18.5288 10.0217 18.1037 9.12171C17.6787 8.22168 17.0598 7.4268 16.2915 6.794C15.5232 6.1612 14.6244 5.70615 13.6596 5.46145C12.6948 5.21675 11.6878 5.18846 10.7108 5.37859C9.73377 5.56873 8.81088 5.97258 8.00824 6.56124C7.20561 7.14989 6.54309 7.90877 6.06815 8.78351C5.59322 9.65825 5.31761 10.6272 5.26109 11.621C5.20456 12.6147 5.36851 13.6087 5.74119 14.5316C5.81583 14.716 5.96066 14.8632 6.14381 14.9408C6.32697 15.0184 6.53345 15.02 6.71783 14.9454C6.90221 14.8707 7.04938 14.7259 7.12698 14.5428C7.20458 14.3596 7.20624 14.1531 7.1316 13.9687C6.84131 13.2507 6.71345 12.4774 6.75719 11.7042C6.80093 10.9309 7.01518 10.1769 7.38459 9.49622C7.754 8.81552 8.26942 8.22497 8.8939 7.7669C9.51838 7.30882 10.2365 6.99456 10.9967 6.84665C11.7569 6.69874 12.5404 6.72083 13.2911 6.91134C14.0418 7.10185 14.741 7.45607 15.3387 7.94861C15.9364 8.44114 16.4177 9.05979 16.7482 9.76023C17.0787 10.4607 17.2501 11.2255 17.2502 12C17.2502 14.6881 15.2315 16.875 12.7502 16.875C11.7667 16.875 11.0832 16.5318 10.6173 16.1238L11.9778 10.6819C12.0261 10.4889 11.9957 10.2847 11.8933 10.1141C11.791 9.94356 11.6251 9.82063 11.4321 9.77238C11.2391 9.72414 11.0349 9.75453 10.8643 9.85686C10.6938 9.9592 10.5708 10.1251 10.5226 10.3181L7.8919 20.8408C6.30669 20.1041 4.94871 18.9548 3.96014 17.5131C2.97157 16.0715 2.38877 14.3906 2.27277 12.6464C2.15678 10.9022 2.51185 9.15897 3.3008 7.59912C4.08976 6.03927 5.28358 4.72022 6.75726 3.7801C8.23095 2.83997 9.93029 2.31335 11.6773 2.25537C13.4244 2.19738 15.1549 2.61018 16.6877 3.45053C18.2205 4.29087 19.4991 5.52786 20.3898 7.03197C21.2804 8.53608 21.7503 10.252 21.7502 12Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PinterestSolid);
export default ForwardRef;