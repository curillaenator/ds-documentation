import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const StorefrontSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.749 8.98117C21.7488 8.97 21.7481 8.95888 21.7473 8.9477C21.7462 8.93049 21.7444 8.91351 21.7421 8.89663C21.7407 8.88696 21.7394 8.87733 21.7376 8.86768C21.7341 8.84786 21.7296 8.82841 21.7245 8.80916C21.7232 8.80412 21.7226 8.79898 21.7212 8.79396L20.3766 4.08788C20.2861 3.775 20.0966 3.49989 19.8366 3.30376C19.5766 3.10763 19.26 3.00106 18.9343 3H5.0657C4.74 3.00106 4.42341 3.10764 4.16338 3.30378C3.90335 3.49991 3.71388 3.77504 3.62338 4.08792L2.27884 8.79396C2.2774 8.79898 2.27678 8.80412 2.27545 8.80916C2.27037 8.82841 2.26591 8.84786 2.26236 8.86768C2.26064 8.87733 2.25929 8.88696 2.25794 8.89663C2.25561 8.9135 2.25385 8.93049 2.25266 8.9477C2.25185 8.95888 2.25124 8.97 2.25096 8.98117C2.2508 8.98749 2.25 8.99364 2.25 9V10.5C2.25005 11.0819 2.38562 11.6557 2.64599 12.1761C2.90635 12.6965 3.28434 13.149 3.75 13.4979V19.5C3.75045 19.8977 3.90864 20.279 4.18984 20.5602C4.47105 20.8414 4.85231 20.9995 5.25 21H18.75C19.1477 20.9995 19.529 20.8414 19.8102 20.5602C20.0914 20.279 20.2495 19.8977 20.25 19.5V13.4979C20.7157 13.149 21.0937 12.6965 21.354 12.1761C21.6144 11.6557 21.75 11.0819 21.75 10.5V9C21.75 8.99364 21.7492 8.98749 21.749 8.98117ZM3.75 9.75H8.25V10.5C8.25025 10.8871 8.15057 11.2677 7.9606 11.605C7.77062 11.9422 7.4968 12.2248 7.16563 12.4252C6.83445 12.6256 6.45715 12.7371 6.07024 12.749C5.68332 12.7608 5.29991 12.6725 4.9571 12.4928C4.90505 12.4524 4.8479 12.419 4.78713 12.3936C4.46934 12.1902 4.2078 11.9102 4.02656 11.5793C3.84533 11.2484 3.75022 10.8773 3.75 10.5V9.75ZM14.25 10.5C14.25 11.0967 14.0129 11.669 13.591 12.091C13.169 12.5129 12.5967 12.75 12 12.75C11.4033 12.75 10.831 12.5129 10.409 12.091C9.98705 11.669 9.75 11.0967 9.75 10.5V9.75H14.25V10.5ZM19.2124 12.3939C19.152 12.4192 19.0952 12.4523 19.0435 12.4925C18.7007 12.6724 18.3172 12.7607 17.9302 12.749C17.5433 12.7372 17.1659 12.6257 16.8347 12.4253C16.5034 12.2249 16.2295 11.9424 16.0395 11.6051C15.8495 11.2678 15.7497 10.8871 15.75 10.5V9.75H20.25V10.5C20.2498 10.8774 20.1546 11.2486 19.9733 11.5796C19.792 11.9106 19.5303 12.1906 19.2124 12.3939Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(StorefrontSolid);
export default ForwardRef;
