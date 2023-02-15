import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TrophySolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.75 6H19.5V5.25C19.4995 4.85231 19.3413 4.47105 19.0601 4.18984C18.7789 3.90864 18.3976 3.75045 17.9999 3.75H5.9999C5.60221 3.75045 5.22094 3.90864 4.93974 4.18984C4.65853 4.47105 4.50035 4.85231 4.49989 5.25V6H2.23798C1.8403 6.00045 1.45903 6.15864 1.17782 6.43984C0.896613 6.72105 0.738431 7.10231 0.737976 7.5V9C0.739113 9.99421 1.13457 10.9474 1.83759 11.6504C2.5406 12.3534 3.49377 12.7489 4.48799 12.75H4.86711C5.77111 15.5566 8.25549 17.6575 11.2499 17.9609V20.25H8.99991C8.801 20.25 8.61023 20.329 8.46958 20.4697C8.32893 20.6103 8.24991 20.8011 8.24991 21C8.24991 21.1989 8.32893 21.3897 8.46958 21.5303C8.61023 21.671 8.801 21.75 8.99991 21.75H14.9999C15.1988 21.75 15.3896 21.671 15.5303 21.5303C15.6709 21.3897 15.7499 21.1989 15.7499 21C15.7499 20.8011 15.6709 20.6103 15.5303 20.4697C15.3896 20.329 15.1988 20.25 14.9999 20.25H12.7499V17.9631C14.2105 17.8154 15.5958 17.2429 16.7346 16.3164C17.8733 15.3899 18.7156 14.15 19.1573 12.75H19.5C20.4942 12.7489 21.4473 12.3534 22.1504 11.6504C22.8534 10.9474 23.2488 9.99421 23.25 9V7.5C23.2495 7.10231 23.0913 6.72105 22.8101 6.43984C22.5289 6.15864 22.1477 6.00045 21.75 6ZM4.48799 11.25C3.89146 11.2493 3.31956 11.012 2.89775 10.5902C2.47594 10.1684 2.23866 9.59653 2.23798 9V7.5H4.49989V10.4152C4.50029 10.6941 4.51591 10.9728 4.54667 11.25H4.48799ZM21.75 9C21.7493 9.59653 21.512 10.1684 21.0902 10.5902C20.6684 11.012 20.0965 11.2493 19.5 11.25H19.4632C19.4876 11.0024 19.4998 10.7524 19.5 10.5V7.5H21.75V9Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(TrophySolid);
export default ForwardRef;