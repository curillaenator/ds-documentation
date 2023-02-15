import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PlanetSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.9297 10.8749C21.0889 12.1417 20.9768 13.4279 20.6008 14.6481C20.2249 15.8682 19.5937 16.9945 18.7492 17.9521C17.9046 18.9096 16.8661 19.6766 15.7025 20.2021C14.5388 20.7276 13.2767 20.9996 12 21C10.037 21.002 8.1278 20.3588 6.56616 19.1695C8.86775 18.5926 11.5763 17.4407 14.25 15.8971C16.9258 14.3522 19.2792 12.5809 20.9297 10.8749ZM23.0418 5.62501C22.5291 4.73708 21.1371 3.89741 17.4333 4.83014C16.0988 3.81728 14.5081 3.19721 12.8402 3.0398C11.1723 2.88239 9.49358 3.19389 7.9932 3.93921C6.49283 4.68454 5.23041 5.83405 4.3482 7.25825C3.46598 8.68244 2.99903 10.3247 2.99995 12C2.99994 12.3759 3.02336 12.7515 3.07008 13.1245C0.414091 15.8633 0.445722 17.4875 0.958143 18.375C1.3044 18.9748 2.07142 19.5739 3.75316 19.5739C4.55794 19.5603 5.35882 19.4587 6.14149 19.2708C6.28129 19.2395 6.42311 19.2054 6.56616 19.1695C6.0804 18.8004 5.63307 18.3833 5.23095 17.9245C3.48202 18.2356 2.48259 18.0154 2.25718 17.625C2.11647 17.3813 2.19548 16.9233 2.47389 16.3684C2.75256 15.8434 3.09043 15.3522 3.48088 14.9041C3.86162 16.0155 4.45615 17.0415 5.23095 17.9245C5.41662 17.8915 5.61067 17.8524 5.81309 17.8072C8.05806 17.3036 10.788 16.1638 13.5 14.5981C16.2119 13.0324 18.5639 11.238 20.1226 9.54566C20.2646 9.39139 20.3968 9.24143 20.519 9.09577C20.1382 7.98445 19.5437 6.95837 18.7689 6.07538C19.3538 5.96071 19.95 5.9134 20.5457 5.93436C21.1657 5.97062 21.602 6.1312 21.7427 6.37501C21.9679 6.76498 21.6598 7.73901 20.519 9.09577C20.7164 9.6732 20.854 10.2694 20.9297 10.8749C21.0309 10.7703 21.1301 10.6659 21.2259 10.5619C23.5965 7.98798 23.5219 6.45649 23.0418 5.62501Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PlanetSolid);
export default ForwardRef;
