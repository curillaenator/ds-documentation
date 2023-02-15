import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DownSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.2803 12.9696C19.1397 12.829 18.9489 12.75 18.75 12.75C18.5511 12.75 18.3604 12.829 18.2197 12.9696L12.75 18.4394V3.75C12.75 3.55109 12.671 3.36032 12.5303 3.21967C12.3897 3.07902 12.1989 3 12 3C11.8011 3 11.6103 3.07902 11.4697 3.21967C11.329 3.36032 11.25 3.55109 11.25 3.75V18.4394L5.78034 12.9696C5.63967 12.829 5.4489 12.75 5.24998 12.75C5.05107 12.75 4.8603 12.829 4.71965 12.9697C4.579 13.1103 4.49999 13.3011 4.5 13.5C4.50001 13.6989 4.57904 13.8897 4.7197 14.0304L11.4697 20.7804C11.4721 20.7828 11.4748 20.7848 11.4773 20.7872C11.4925 20.802 11.5081 20.8164 11.5245 20.8299C11.5336 20.8374 11.5434 20.844 11.5528 20.851C11.5629 20.8586 11.5729 20.8665 11.5835 20.8736C11.5944 20.8809 11.6057 20.8873 11.617 20.8939C11.6268 20.8998 11.6363 20.9059 11.6464 20.9114C11.6577 20.9174 11.6693 20.9225 11.6808 20.9279C11.6915 20.933 11.7021 20.9383 11.713 20.9429C11.7241 20.9475 11.7354 20.9512 11.7467 20.9552C11.7585 20.9594 11.7702 20.964 11.7823 20.9676C11.7935 20.971 11.8049 20.9735 11.8163 20.9764C11.8286 20.9795 11.8409 20.983 11.8535 20.9855C11.8666 20.9881 11.8798 20.9896 11.8929 20.9915C11.904 20.9931 11.9148 20.9952 11.926 20.9963C11.9506 20.9987 11.9753 21 12 21C12.0247 21 12.0494 20.9987 12.074 20.9963C12.0852 20.9952 12.0961 20.9931 12.1071 20.9915C12.1203 20.9896 12.1335 20.9881 12.1465 20.9855C12.1591 20.983 12.1714 20.9795 12.1838 20.9764C12.1951 20.9735 12.2065 20.971 12.2177 20.9676C12.2298 20.964 12.2415 20.9594 12.2533 20.9552C12.2646 20.9512 12.276 20.9475 12.287 20.9429C12.298 20.9383 12.3085 20.933 12.3192 20.9279C12.3307 20.9225 12.3423 20.9174 12.3536 20.9114C12.3637 20.9059 12.3733 20.8998 12.3831 20.8939C12.3943 20.8873 12.4056 20.8809 12.4165 20.8736C12.4271 20.8665 12.4371 20.8586 12.4473 20.851C12.4567 20.844 12.4664 20.8374 12.4755 20.8299C12.4922 20.8162 12.5081 20.8016 12.5236 20.7865C12.5258 20.7843 12.5282 20.7825 12.5303 20.7804L19.2803 14.0304C19.35 13.9607 19.4052 13.878 19.4429 13.787C19.4806 13.696 19.5 13.5985 19.5 13.5C19.5 13.4015 19.4806 13.304 19.4429 13.213C19.4052 13.122 19.35 13.0393 19.2803 12.9696Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(DownSolid);
export default ForwardRef;