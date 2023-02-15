import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BarbellSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M23.25 11.25H22.5V8.25C22.4995 7.85231 22.3414 7.47105 22.0602 7.18984C21.779 6.90864 21.3977 6.75045 21 6.75H19.5V6C19.4995 5.60231 19.3414 5.22105 19.0602 4.93984C18.779 4.65864 18.3977 4.50045 18 4.5H15.75C15.3523 4.50045 14.971 4.65864 14.6898 4.93984C14.4086 5.22105 14.2505 5.60231 14.25 6V11.25H9.75V6C9.74955 5.60231 9.59136 5.22105 9.31016 4.93984C9.02895 4.65864 8.64769 4.50045 8.25 4.5H6C5.60231 4.50045 5.22105 4.65864 4.93984 4.93984C4.65864 5.22105 4.50045 5.60231 4.5 6V6.75H3C2.60231 6.75045 2.22105 6.90864 1.93984 7.18984C1.65864 7.47105 1.50045 7.85231 1.5 8.25V11.25H0.75C0.551088 11.25 0.360322 11.329 0.21967 11.4697C0.0790176 11.6103 0 11.8011 0 12C0 12.1989 0.0790176 12.3897 0.21967 12.5303C0.360322 12.671 0.551088 12.75 0.75 12.75H1.5V15.75C1.50045 16.1477 1.65864 16.529 1.93984 16.8102C2.22105 17.0914 2.60231 17.2495 3 17.25H4.5V18C4.50045 18.3977 4.65864 18.779 4.93984 19.0602C5.22105 19.3414 5.60231 19.4995 6 19.5H8.25C8.64769 19.4995 9.02895 19.3414 9.31016 19.0602C9.59136 18.779 9.74955 18.3977 9.75 18V12.75H14.25V18C14.2505 18.3977 14.4086 18.779 14.6898 19.0602C14.971 19.3414 15.3523 19.4995 15.75 19.5H18C18.3977 19.4995 18.779 19.3414 19.0602 19.0602C19.3414 18.779 19.4995 18.3977 19.5 18V17.25H21C21.3977 17.2495 21.779 17.0914 22.0602 16.8102C22.3414 16.529 22.4995 16.1477 22.5 15.75V12.75H23.25C23.4489 12.75 23.6397 12.671 23.7803 12.5303C23.921 12.3897 24 12.1989 24 12C24 11.8011 23.921 11.6103 23.7803 11.4697C23.6397 11.329 23.4489 11.25 23.25 11.25ZM3 15.75V8.25H4.5V15.75H3ZM21 15.75H19.5V8.25H21V15.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(BarbellSolid);
export default ForwardRef;