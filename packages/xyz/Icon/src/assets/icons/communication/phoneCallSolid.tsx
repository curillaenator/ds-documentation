import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PhoneCallSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.8098 14.8524L16.4188 12.9706C16.1895 12.8719 15.9392 12.8321 15.6907 12.855C15.4421 12.8778 15.2032 12.9625 14.9958 13.1013L12.648 14.6663C11.2131 13.9684 10.0518 12.8122 9.34753 11.3804L10.9072 8.99728C11.043 8.79041 11.1253 8.55312 11.1469 8.30663C11.1685 8.06014 11.1287 7.81214 11.031 7.58481L9.1474 3.19C9.01918 2.89168 8.79778 2.64292 8.51635 2.48096C8.23492 2.31901 7.9086 2.25257 7.58624 2.2916C6.31956 2.45446 5.15548 3.0729 4.31148 4.03138C3.46749 4.98986 3.00129 6.22283 3 7.49994C3 14.9439 9.05603 20.9999 16.5 20.9999C17.7771 20.9986 19.0101 20.5324 19.9686 19.6884C20.9271 18.8444 21.5455 17.6803 21.7083 16.4136C21.7473 16.0913 21.6808 15.765 21.5188 15.4836C21.3568 15.2021 21.1081 14.9807 20.8098 14.8524Z'
      fill='currentColor'
    />
    <path
      d='M14.752 4.47482C15.8962 4.78248 16.9394 5.38543 17.7772 6.22326C18.615 7.06108 19.2179 8.10437 19.5256 9.24859C19.5773 9.44038 19.7029 9.60383 19.875 9.70308C20.047 9.80232 20.2514 9.82926 20.4433 9.77798C20.6352 9.72669 20.7989 9.60138 20.8985 9.42952C20.9982 9.25767 21.0255 9.05333 20.9746 8.86132C20.5985 7.46259 19.8615 6.18725 18.8374 5.16307C17.8132 4.13888 16.5379 3.40182 15.1392 3.02571C14.9472 2.97483 14.7429 3.0022 14.571 3.10181C14.3992 3.20142 14.2739 3.36514 14.2226 3.55703C14.1713 3.74893 14.1983 3.95334 14.2975 4.1254C14.3967 4.29746 14.5602 4.42313 14.752 4.47482Z'
      fill='currentColor'
    />
    <path
      d='M13.9752 7.37303C14.6108 7.54396 15.1903 7.8789 15.6558 8.34432C16.1212 8.80974 16.4562 9.38928 16.6271 10.0249C16.6788 10.2167 16.8044 10.3801 16.9765 10.4794C17.1486 10.5786 17.353 10.6056 17.5449 10.5543C17.7367 10.503 17.9005 10.3777 18.0001 10.2058C18.0997 10.034 18.1271 9.82964 18.0762 9.63764C17.8368 8.74751 17.3678 7.9359 16.716 7.28413C16.0642 6.63235 15.2526 6.1633 14.3624 5.92396C14.1704 5.87309 13.9661 5.90045 13.7942 6.00006C13.6224 6.09967 13.4971 6.26338 13.4458 6.45528C13.3945 6.64717 13.4214 6.85157 13.5207 7.02363C13.6199 7.19568 13.7834 7.32134 13.9752 7.37303Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PhoneCallSolid);
export default ForwardRef;