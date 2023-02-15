import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const OutLineVerticalSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12ZM9.53036 5.03037L11.25 3.31066V9C11.25 9.19891 11.329 9.38968 11.4697 9.53033C11.6103 9.67098 11.8011 9.75 12 9.75C12.1989 9.75 12.3897 9.67098 12.5303 9.53033C12.671 9.38968 12.75 9.19891 12.75 9V3.31066L14.4696 5.03037C14.5393 5.10001 14.622 5.15526 14.713 5.19296C14.804 5.23065 14.9015 5.25005 15 5.25005C15.0985 5.25005 15.196 5.23065 15.287 5.19296C15.378 5.15526 15.4607 5.10001 15.5304 5.03037C15.6 4.96072 15.6553 4.87803 15.693 4.78703C15.7306 4.69603 15.75 4.5985 15.75 4.5C15.75 4.4015 15.7306 4.30397 15.693 4.21297C15.6553 4.12197 15.6 4.03928 15.5304 3.96963L12.5304 0.969635C12.5254 0.964645 12.5199 0.960388 12.5148 0.955582C12.502 0.943496 12.4893 0.931412 12.4757 0.920242C12.4659 0.912208 12.4556 0.905182 12.4455 0.89772C12.4359 0.890579 12.4266 0.883141 12.4167 0.87648C12.4056 0.869064 12.3941 0.86261 12.3827 0.855855C12.373 0.850064 12.3636 0.843976 12.3536 0.838643C12.3425 0.832715 12.3311 0.827675 12.3197 0.822347C12.3088 0.817174 12.2981 0.811727 12.2868 0.807081C12.2763 0.802709 12.2655 0.799206 12.2548 0.795338C12.2423 0.790853 12.2301 0.786114 12.2173 0.78227C12.2071 0.779157 12.1967 0.776914 12.1863 0.774281C12.1729 0.770872 12.1598 0.767164 12.1462 0.764463C12.1348 0.762219 12.1233 0.760938 12.1118 0.759244C12.0991 0.757321 12.0865 0.754964 12.0735 0.753705C12.0546 0.751852 12.0356 0.751256 12.0166 0.750821C12.011 0.75071 12.0056 0.75 12 0.75C11.9944 0.75 11.989 0.75071 11.9834 0.750824C11.9644 0.751259 11.9454 0.751855 11.9265 0.753708C11.9135 0.754967 11.9009 0.757324 11.8882 0.759247C11.8767 0.760941 11.8652 0.762222 11.8538 0.764466C11.8402 0.767167 11.8271 0.770874 11.8137 0.774284C11.8033 0.776917 11.7929 0.779159 11.7827 0.782273C11.7699 0.786116 11.7577 0.790855 11.7452 0.795341C11.7345 0.799209 11.7237 0.802712 11.7132 0.807083C11.702 0.81173 11.6912 0.817177 11.6803 0.82235C11.6689 0.827682 11.6575 0.832718 11.6464 0.838646C11.6364 0.843979 11.627 0.850067 11.6173 0.855858C11.6059 0.862608 11.5944 0.869064 11.5833 0.876483C11.5734 0.883144 11.5641 0.890582 11.5545 0.897723C11.5444 0.905184 11.5341 0.912211 11.5243 0.920245C11.5107 0.931415 11.498 0.943495 11.4852 0.955584C11.4801 0.960391 11.4746 0.964648 11.4696 0.969638L8.46964 3.96964C8.32897 4.1103 8.24995 4.30108 8.24995 4.5C8.24995 4.69893 8.32897 4.88971 8.46964 5.03037C8.6103 5.17103 8.80107 5.25005 9 5.25005C9.19893 5.25005 9.3897 5.17103 9.53037 5.03037L9.53036 5.03037ZM14.4696 18.9696L12.75 20.6893V15C12.75 14.8011 12.671 14.6103 12.5303 14.4697C12.3897 14.329 12.1989 14.25 12 14.25C11.8011 14.25 11.6103 14.329 11.4697 14.4697C11.329 14.6103 11.25 14.8011 11.25 15V20.6893L9.53036 18.9696C9.3897 18.829 9.19893 18.75 9 18.75C8.80107 18.75 8.6103 18.829 8.46964 18.9696C8.32897 19.1103 8.24995 19.3011 8.24995 19.5C8.24995 19.6989 8.32897 19.8897 8.46964 20.0304L11.4696 23.0304C11.4747 23.0354 11.4803 23.0398 11.4855 23.0447C11.4982 23.0566 11.5108 23.0687 11.5243 23.0797C11.5343 23.0879 11.5448 23.0951 11.5551 23.1027C11.5644 23.1097 11.5735 23.117 11.5833 23.1235C11.5947 23.1311 11.6065 23.1378 11.6183 23.1447C11.6276 23.1503 11.6367 23.1561 11.6462 23.1613C11.6579 23.1675 11.6698 23.1728 11.6817 23.1784C11.6921 23.1832 11.7022 23.1884 11.7128 23.1928C11.7242 23.1975 11.7358 23.2013 11.7473 23.2054C11.7589 23.2096 11.7703 23.214 11.7822 23.2176C11.7936 23.2211 11.8052 23.2236 11.8167 23.2265C11.8289 23.2296 11.841 23.233 11.8534 23.2355C11.8666 23.2381 11.88 23.2396 11.8932 23.2415C11.9042 23.2431 11.9149 23.2452 11.926 23.2462C11.9506 23.2487 11.9753 23.25 12 23.25C12.0247 23.25 12.0494 23.2487 12.074 23.2462C12.0851 23.2452 12.0958 23.2431 12.1067 23.2415C12.12 23.2396 12.1334 23.2381 12.1466 23.2355C12.159 23.233 12.1711 23.2296 12.1833 23.2265C12.1948 23.2236 12.2064 23.2211 12.2178 23.2176C12.2297 23.214 12.2411 23.2096 12.2527 23.2054C12.2642 23.2013 12.2758 23.1975 12.2872 23.1928C12.2978 23.1884 12.3079 23.1832 12.3183 23.1784C12.3302 23.1728 12.3421 23.1675 12.3538 23.1613C12.3633 23.1561 12.3724 23.1503 12.3817 23.1447C12.3935 23.1378 12.4053 23.1311 12.4167 23.1235C12.4264 23.117 12.4356 23.1097 12.4449 23.1027C12.4552 23.0951 12.4657 23.0879 12.4757 23.0797C12.4892 23.0687 12.5018 23.0566 12.5145 23.0447C12.5197 23.0398 12.5253 23.0354 12.5304 23.0304L15.5304 20.0304C15.671 19.8897 15.75 19.6989 15.75 19.5C15.75 19.3011 15.671 19.1103 15.5304 18.9696C15.3897 18.829 15.1989 18.75 15 18.75C14.8011 18.75 14.6103 18.829 14.4696 18.9696H14.4696Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(OutLineVerticalSolid);
export default ForwardRef;