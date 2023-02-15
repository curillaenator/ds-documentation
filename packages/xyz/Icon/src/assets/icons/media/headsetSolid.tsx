import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HeadsetSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.8865 12V19.5C21.8854 20.4942 21.4899 21.4474 20.7869 22.1504C20.0839 22.8534 19.1307 23.2489 18.1365 23.25H12.75C12.5511 23.25 12.3603 23.171 12.2197 23.0303C12.079 22.8897 12 22.6989 12 22.5C12 22.3011 12.079 22.1103 12.2197 21.9697C12.3603 21.829 12.5511 21.75 12.75 21.75H18.1365C18.733 21.7493 19.3049 21.5121 19.7267 21.0902C20.1486 20.6684 20.3858 20.0965 20.3865 19.5V19.371C20.1457 19.4565 19.892 19.5001 19.6365 19.5H18.1365C17.54 19.4993 16.9681 19.2621 16.5463 18.8402C16.1245 18.4184 15.8872 17.8465 15.8865 17.25V13.5C15.8872 12.9035 16.1245 12.3316 16.5463 11.9098C16.9681 11.488 17.54 11.2507 18.1365 11.25H20.3532C20.1647 9.18955 19.2091 7.27509 17.6756 5.88603C16.1421 4.49696 14.1428 3.73468 12.0738 3.75024C12.0699 3.75028 12.0665 3.75028 12.0626 3.75024C9.99365 3.73474 7.99435 4.49705 6.46092 5.8861C4.92749 7.27516 3.97183 9.18958 3.78333 11.25H6C6.59653 11.2507 7.16843 11.488 7.59024 11.9098C8.01205 12.3316 8.24932 12.9035 8.25 13.5V17.25C8.24932 17.8465 8.01205 18.4184 7.59024 18.8402C7.16843 19.2621 6.59653 19.4993 6 19.5H4.5C3.90347 19.4993 3.33157 19.2621 2.90976 18.8402C2.48795 18.4184 2.25068 17.8465 2.25 17.25V12C2.25 10.7139 2.50446 9.44046 2.99872 8.2531C3.49297 7.06573 4.21727 5.98789 5.12987 5.08165C6.04247 4.1754 7.12536 3.45867 8.31615 2.97273C9.50694 2.48679 10.7821 2.24124 12.0682 2.25024C12.0911 2.2501 12.1143 2.25001 12.1371 2.25001C14.7229 2.25018 17.2027 3.27749 19.031 5.10595C20.8594 6.93441 21.8865 9.41426 21.8865 12Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(HeadsetSolid);
export default ForwardRef;