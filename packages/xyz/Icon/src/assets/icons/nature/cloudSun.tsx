import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CloudSun = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.24991 13.875C8.24991 12.6141 8.62379 11.3816 9.32429 10.3332C10.0248 9.28485 11.0204 8.46775 12.1853 7.98525C13.3502 7.50274 14.632 7.37649 15.8686 7.62247C17.1052 7.86845 18.2411 8.47561 19.1327 9.36717C20.0243 10.2587 20.6314 11.3946 20.8774 12.6313C21.1234 13.8679 20.9971 15.1497 20.5146 16.3146C20.0321 17.4795 19.215 18.4751 18.1667 19.1756C17.1183 19.8761 15.8858 20.25 14.6249 20.25H7.12491C6.52598 20.2495 5.93434 20.1186 5.39112 19.8663C4.84789 19.6141 4.36611 19.2466 3.97926 18.7893C3.59241 18.3321 3.30977 17.7961 3.15098 17.2186C2.9922 16.6411 2.96107 16.0359 3.05977 15.4452C3.15848 14.8545 3.38464 14.2923 3.72254 13.7978C4.06044 13.3033 4.50197 12.8883 5.01645 12.5816C5.53093 12.275 6.10601 12.084 6.70173 12.0221C7.29745 11.9602 7.89952 12.0287 8.46608 12.2229M7.4686 5.31811L7.07789 3.10229M4.56436 7.16806L2.72126 5.87748M3.81842 10.5293L1.6026 10.92M10.8298 6.06445L12.1203 4.22136M4.84156 12.6899C4.41935 12.2005 4.10751 11.6259 3.92726 11.0052C3.747 10.3844 3.70256 9.73215 3.79696 9.09271C3.89136 8.45327 4.12239 7.84167 4.47432 7.29951C4.82625 6.75734 5.29082 6.29734 5.83645 5.9508C6.38207 5.60426 6.99593 5.37931 7.63628 5.29125C8.27662 5.20318 8.92842 5.25408 9.54733 5.44047C10.1662 5.62687 10.7377 5.94438 11.223 6.37142C11.7082 6.79845 12.0957 7.32499 12.3592 7.91521'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CloudSun);
export default ForwardRef;
