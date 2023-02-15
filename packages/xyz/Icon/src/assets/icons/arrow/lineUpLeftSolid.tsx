import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LineUpLeftSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 16.5C16.4015 16.5001 16.3039 16.4808 16.2129 16.4431C16.1219 16.4054 16.0392 16.3501 15.9696 16.2803L6.75 7.06066V14.625C6.75 14.8239 6.67098 15.0147 6.53033 15.1553C6.38968 15.296 6.19891 15.375 6 15.375C5.80109 15.375 5.61032 15.296 5.46967 15.1553C5.32902 15.0147 5.25 14.8239 5.25 14.625V5.25C5.25 5.2253 5.25133 5.20061 5.25375 5.176C5.2548 5.16489 5.25691 5.1541 5.25846 5.14314C5.26039 5.12989 5.26194 5.1166 5.26455 5.10344C5.26703 5.09092 5.27046 5.07879 5.27353 5.06651C5.27641 5.05507 5.27893 5.04357 5.28236 5.03225C5.28602 5.02016 5.29055 5.00848 5.29481 4.99665C5.29884 4.98541 5.30255 4.97409 5.30713 4.96302C5.3117 4.95196 5.3171 4.94136 5.32219 4.93058C5.32754 4.91916 5.33262 4.90765 5.33862 4.89645C5.34411 4.88613 5.35043 4.87634 5.35643 4.86631C5.36297 4.85535 5.36915 4.84426 5.37629 4.83358C5.38375 4.82244 5.39204 4.81197 5.40005 4.80126C5.40674 4.79239 5.41287 4.78327 5.42001 4.77463C5.45139 4.73638 5.48645 4.7013 5.5247 4.66992C5.53299 4.66314 5.54168 4.65726 5.55015 4.65089C5.56123 4.64255 5.57212 4.63397 5.58371 4.62625C5.59401 4.61934 5.60472 4.61337 5.61529 4.60703C5.62573 4.60079 5.63589 4.59427 5.64665 4.58853C5.65741 4.58277 5.66853 4.57789 5.67952 4.57269C5.69069 4.56738 5.70172 4.56181 5.71321 4.55705C5.72378 4.55268 5.73458 4.54917 5.7453 4.5453C5.75766 4.54083 5.76988 4.53611 5.78252 4.53229C5.79318 4.52907 5.80398 4.52674 5.8147 4.52401C5.82765 4.52072 5.84047 4.51711 5.8537 4.5145C5.86587 4.51208 5.87823 4.51069 5.8905 4.50888C5.9024 4.50713 5.91417 4.50491 5.92625 4.50372C5.94799 4.50158 5.96983 4.50066 5.99171 4.50042C5.99451 4.50039 5.99721 4.5 6 4.5H15.375C15.5739 4.5 15.7647 4.57902 15.9053 4.71967C16.046 4.86032 16.125 5.05109 16.125 5.25C16.125 5.44891 16.046 5.63968 15.9053 5.78033C15.7647 5.92098 15.5739 6 15.375 6H7.81064L17.0304 15.2197C17.1353 15.3246 17.2067 15.4582 17.2356 15.6037C17.2646 15.7492 17.2497 15.9 17.1929 16.037C17.1362 16.1741 17.04 16.2912 16.9167 16.3736C16.7933 16.456 16.6483 16.5 16.5 16.5ZM3 20.2496C3 20.4485 3.07902 20.6393 3.21967 20.78C3.36032 20.9206 3.55109 20.9996 3.75 20.9996H20.25C20.4489 20.9996 20.6397 20.9206 20.7803 20.78C20.921 20.6393 21 20.4486 21 20.2496C21 20.0507 20.921 19.86 20.7803 19.7193C20.6397 19.5787 20.4489 19.4996 20.25 19.4996H3.75C3.55109 19.4996 3.36032 19.5787 3.21967 19.7193C3.07902 19.86 3 20.0507 3 20.2496Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(LineUpLeftSolid);
export default ForwardRef;