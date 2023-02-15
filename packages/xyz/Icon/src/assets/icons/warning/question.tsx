import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Question = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.0001 13.5005V12.7505C12.5193 12.7505 13.0268 12.5965 13.4585 12.3081C13.8902 12.0196 14.2267 11.6097 14.4254 11.13C14.624 10.6504 14.676 10.1226 14.5747 9.61339C14.4734 9.10419 14.2234 8.63647 13.8563 8.26936C13.4892 7.90225 13.0215 7.65225 12.5123 7.55096C12.0031 7.44968 11.4752 7.50166 10.9956 7.70034C10.5159 7.89902 10.1059 8.23547 9.8175 8.66714C9.52906 9.09881 9.37511 9.60632 9.37511 10.1255M12 16.51V16.5M21.0001 12C21.0001 16.9706 16.9707 21 12.0001 21C7.02956 21 3.00012 16.9706 3.00012 12C3.00012 7.02944 7.02956 3 12.0001 3C16.9707 3 21.0001 7.02944 21.0001 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Question);
export default ForwardRef;
