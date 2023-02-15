import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberNineSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 2.25C11.1343 2.24989 10.2788 2.43714 9.49221 2.79889C8.70566 3.16063 8.00671 3.68831 7.44335 4.34569C6.88 5.00307 6.46557 5.77458 6.22854 6.60724C5.9915 7.43991 5.93747 8.31401 6.07015 9.16953C6.20283 10.0251 6.51908 10.8417 6.99719 11.5635C7.47529 12.2852 8.10393 12.895 8.83994 13.3508C9.57595 13.8067 10.4019 14.0979 11.2611 14.2044C12.1202 14.3109 12.9923 14.2303 13.8173 13.9679L9.83334 20.6144C9.78258 20.6989 9.74897 20.7926 9.73443 20.89C9.71989 20.9875 9.72471 21.0869 9.7486 21.1825C9.7725 21.2781 9.815 21.3681 9.87368 21.4472C9.93237 21.5264 10.0061 21.5933 10.0906 21.6439C10.1751 21.6946 10.2688 21.7281 10.3663 21.7425C10.4638 21.757 10.5632 21.7521 10.6588 21.7281C10.7544 21.7041 10.8443 21.6615 10.9234 21.6027C11.0025 21.5439 11.0693 21.4702 11.1198 21.3856L17.1271 11.3637C17.1298 11.3592 17.1324 11.3548 17.1351 11.3503L17.1891 11.2601C17.199 11.2438 17.2073 11.2269 17.2158 11.2101C17.7347 10.2979 18.0052 9.26532 17.9999 8.21576C17.9947 7.1662 17.7141 6.13639 17.1861 5.2293C16.6581 4.32222 15.9012 3.56963 14.9911 3.0468C14.081 2.52397 13.0496 2.24922 12 2.25ZM15.8608 10.5588L15.8394 10.5945C15.2129 11.6286 14.2018 12.3719 13.028 12.6615C11.8541 12.9511 10.6133 12.7632 9.57776 12.1391C8.54224 11.515 7.79656 10.5056 7.50431 9.33238C7.21207 8.15917 7.39713 6.91793 8.01889 5.88099C8.64065 4.84405 9.64834 4.09607 10.8209 3.80116C11.9934 3.50625 13.2351 3.68849 14.2734 4.30789C15.3118 4.92729 16.0621 5.93328 16.3596 7.10515C16.6572 8.27703 16.4778 9.51909 15.8608 10.5588Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberNineSolid);
export default ForwardRef;
