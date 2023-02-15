import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BendRightDownSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.2804 15.9696C19.1397 15.829 18.9489 15.75 18.75 15.75C18.5511 15.75 18.3603 15.829 18.2196 15.9696L15 19.1893V12C14.9971 9.41504 13.9689 6.93679 12.1411 5.10894C10.3132 3.28109 7.83496 2.25293 5.25 2.25C5.05109 2.25 4.86032 2.32902 4.71967 2.46967C4.57902 2.61032 4.5 2.80109 4.5 3C4.5 3.19891 4.57902 3.38968 4.71967 3.53033C4.86032 3.67098 5.05109 3.75 5.25 3.75C7.43728 3.75247 9.53426 4.62246 11.0809 6.1691C12.6275 7.71574 13.4975 9.81272 13.5 12V19.1893L10.2804 15.9696C10.1397 15.829 9.94893 15.7499 9.75 15.75C9.55107 15.75 9.3603 15.829 9.21963 15.9696C9.07897 16.1103 8.99995 16.3011 8.99995 16.5C8.99995 16.6989 9.07897 16.8897 9.21963 17.0304L13.7196 21.5304C13.7247 21.5354 13.7303 21.5398 13.7355 21.5447C13.7482 21.5566 13.7608 21.5687 13.7743 21.5797C13.7842 21.5879 13.7948 21.5951 13.8051 21.6027C13.8144 21.6097 13.8235 21.617 13.8333 21.6235C13.8447 21.6311 13.8565 21.6378 13.8682 21.6447C13.8776 21.6503 13.8867 21.6561 13.8962 21.6613C13.9079 21.6675 13.9198 21.6728 13.9317 21.6784C13.9421 21.6832 13.9522 21.6884 13.9628 21.6928C13.9742 21.6975 13.9858 21.7013 13.9973 21.7054C14.0089 21.7096 14.0203 21.714 14.0322 21.7176C14.0436 21.7211 14.0552 21.7236 14.0667 21.7265C14.0789 21.7296 14.091 21.733 14.1034 21.7355C14.1166 21.7381 14.13 21.7396 14.1432 21.7415C14.1542 21.7431 14.1649 21.7452 14.176 21.7462C14.2006 21.7487 14.2253 21.75 14.25 21.75C14.2747 21.75 14.2994 21.7487 14.324 21.7462C14.3351 21.7452 14.3458 21.7431 14.3567 21.7415C14.37 21.7396 14.3834 21.7381 14.3966 21.7355C14.409 21.733 14.4211 21.7296 14.4333 21.7265C14.4448 21.7236 14.4564 21.7211 14.4678 21.7176C14.4797 21.714 14.4911 21.7096 14.5027 21.7054C14.5142 21.7013 14.5258 21.6975 14.5372 21.6928C14.5478 21.6884 14.5579 21.6832 14.5683 21.6784C14.5802 21.6728 14.5921 21.6675 14.6038 21.6613C14.6133 21.6561 14.6224 21.6503 14.6317 21.6447C14.6435 21.6378 14.6553 21.6311 14.6667 21.6235C14.6764 21.617 14.6856 21.6097 14.6949 21.6027C14.7052 21.5951 14.7157 21.5879 14.7257 21.5797C14.7392 21.5687 14.7518 21.5566 14.7645 21.5447C14.7697 21.5398 14.7753 21.5354 14.7804 21.5304L19.2804 17.0304C19.421 16.8897 19.5 16.6989 19.5 16.5C19.5 16.3011 19.421 16.1103 19.2804 15.9696Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(BendRightDownSolid);
export default ForwardRef;
