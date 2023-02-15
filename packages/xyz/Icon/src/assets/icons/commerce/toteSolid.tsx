import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ToteSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M22.0296 6.4996C21.8889 6.3425 21.7166 6.21682 21.524 6.13074C21.3315 6.04466 21.1229 6.00011 20.912 6H16.4363C16.2592 4.95148 15.7165 3.99956 14.9044 3.3131C14.0923 2.62664 13.0633 2.25 12 2.25C10.9366 2.25 9.90759 2.62664 9.09549 3.3131C8.28339 3.99956 7.74068 4.95148 7.56363 6H3.08793C2.87698 6 2.66839 6.0445 2.4758 6.13059C2.28321 6.21668 2.11095 6.34242 1.97025 6.49961C1.82956 6.6568 1.7236 6.84189 1.6593 7.04281C1.595 7.24373 1.5738 7.45595 1.59709 7.66562L2.93037 19.6657C2.97082 20.0327 3.14535 20.3718 3.42048 20.6181C3.69561 20.8643 4.05198 21.0003 4.42122 21H19.5787C19.9479 21.0003 20.3043 20.8643 20.5794 20.6181C20.8546 20.3718 21.0291 20.0326 21.0695 19.6656L22.4028 7.66562C22.426 7.45595 22.4047 7.24376 22.3404 7.04285C22.2761 6.84195 22.1702 6.65685 22.0296 6.4996ZM8.99922 9.75C8.99922 9.94891 8.9202 10.1397 8.77955 10.2803C8.6389 10.421 8.44813 10.5 8.24922 10.5C8.05031 10.5 7.85954 10.421 7.71889 10.2803C7.57824 10.1397 7.49922 9.94891 7.49922 9.75V8.25C7.49922 8.05109 7.57824 7.86032 7.71889 7.71967C7.85954 7.57902 8.05031 7.5 8.24922 7.5C8.44813 7.5 8.6389 7.57902 8.77955 7.71967C8.9202 7.86032 8.99922 8.05109 8.99922 8.25V9.75ZM9.09489 6C9.26124 5.35601 9.63686 4.78555 10.1627 4.37828C10.6886 3.971 11.3348 3.75 12 3.75C12.6651 3.75 13.3113 3.971 13.8372 4.37828C14.363 4.78555 14.7387 5.35601 14.905 6H9.09489ZM16.4992 9.75C16.4992 9.94891 16.4202 10.1397 16.2795 10.2803C16.1389 10.421 15.9481 10.5 15.7492 10.5C15.5503 10.5 15.3595 10.421 15.2189 10.2803C15.0782 10.1397 14.9992 9.94891 14.9992 9.75V8.25C14.9992 8.05109 15.0782 7.86032 15.2189 7.71967C15.3595 7.57902 15.5503 7.5 15.7492 7.5C15.9481 7.5 16.1389 7.57902 16.2795 7.71967C16.4202 7.86032 16.4992 8.05109 16.4992 8.25V9.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ToteSolid);
export default ForwardRef;
