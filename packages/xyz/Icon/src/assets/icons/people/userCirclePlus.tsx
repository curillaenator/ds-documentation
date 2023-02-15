import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UserCirclePlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17895 14.0711 7.50002 12 7.50002C9.92893 7.50002 8.25 9.17895 8.25 11.25C8.25 13.3211 9.92893 15 12 15ZM12 15C10.7538 15 9.53192 15.3449 8.46963 15.9964C7.40734 16.6479 6.54605 17.5806 5.9811 18.6913M12 15C13.2462 15 14.4679 15.3448 15.5302 15.9963C16.5925 16.6478 17.4538 17.5806 18.0188 18.6913M16.5 5.25002H21M18.75 3.00002V7.50002M20.8885 10.5804C21.1864 12.456 20.8828 14.3776 20.0213 16.07C19.1597 17.7623 17.7844 19.1384 16.0925 20.0009C14.4007 20.8635 12.4791 21.1681 10.6034 20.8713C8.72776 20.5744 6.99423 19.6912 5.65141 18.3484C4.30859 17.0056 3.42544 15.2721 3.12858 13.3964C2.83172 11.5207 3.13639 9.59917 3.99892 7.90731C4.86144 6.21546 6.23753 4.84015 7.92987 3.97858C9.62222 3.11701 11.5439 2.81342 13.4194 3.11134'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(UserCirclePlus);
export default ForwardRef;