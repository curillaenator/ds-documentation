import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DownRightSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.6009 18.4474C18.6085 18.4372 18.6164 18.4272 18.6236 18.4165C18.6308 18.4056 18.6372 18.3943 18.6438 18.3831C18.6497 18.3733 18.6559 18.3637 18.6613 18.3536C18.6673 18.3424 18.6724 18.3308 18.6778 18.3193C18.6829 18.3085 18.6882 18.298 18.6928 18.287C18.6974 18.276 18.7011 18.2648 18.705 18.2536C18.7093 18.2417 18.7139 18.2299 18.7176 18.2177C18.721 18.2065 18.7234 18.1952 18.7263 18.1839C18.7294 18.1715 18.7329 18.1592 18.7354 18.1465C18.738 18.1336 18.7395 18.1205 18.7414 18.1074C18.743 18.0962 18.7451 18.0852 18.7462 18.0739C18.7486 18.05 18.7498 18.0261 18.7499 18.0021L18.75 18V8.25002C18.75 8.0511 18.6709 7.86034 18.5303 7.71969C18.3896 7.57904 18.1989 7.50002 18 7.50002C17.801 7.50002 17.6103 7.57904 17.4696 7.71969C17.329 7.86034 17.25 8.0511 17.25 8.25002V16.1893L6.53028 5.46965C6.38961 5.329 6.19884 5.24999 5.99992 5.25C5.80101 5.25001 5.61024 5.32904 5.46959 5.4697C5.32894 5.61036 5.24993 5.80113 5.24994 6.00005C5.24995 6.19897 5.32898 6.38973 5.46964 6.53038L16.1893 17.25H8.24996C8.05104 17.25 7.86028 17.329 7.71963 17.4697C7.57897 17.6103 7.49996 17.8011 7.49996 18C7.49996 18.1989 7.57897 18.3897 7.71963 18.5303C7.86028 18.671 8.05104 18.75 8.24996 18.75H18C18.0247 18.75 18.0493 18.7487 18.074 18.7463C18.0851 18.7452 18.096 18.7431 18.1071 18.7415C18.1202 18.7396 18.1334 18.7381 18.1465 18.7355C18.1591 18.733 18.1713 18.7295 18.1837 18.7264C18.1951 18.7236 18.2065 18.721 18.2177 18.7177C18.2298 18.714 18.2415 18.7095 18.2533 18.7052C18.2645 18.7012 18.2759 18.6975 18.287 18.6929C18.2979 18.6883 18.3084 18.683 18.3192 18.6779C18.3306 18.6725 18.3423 18.6674 18.3535 18.6614C18.3636 18.6559 18.3732 18.6498 18.383 18.644C18.3942 18.6373 18.4056 18.631 18.4165 18.6236C18.427 18.6165 18.437 18.6087 18.4472 18.6011C18.4566 18.594 18.4663 18.5874 18.4755 18.5799C18.4922 18.5662 18.5081 18.5516 18.5235 18.5365C18.5257 18.5343 18.5281 18.5325 18.5303 18.5304C18.5322 18.5285 18.5338 18.5264 18.5356 18.5245C18.551 18.5088 18.5659 18.4925 18.5799 18.4755C18.5874 18.4664 18.5939 18.4568 18.6009 18.4474Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(DownRightSolid);
export default ForwardRef;