import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UmbrellaSimpleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M22.0713 13.0163C21.9308 13.1686 21.7603 13.2902 21.5705 13.3734C21.3808 13.4567 21.1759 13.4998 20.9687 13.5H12.75V18.75C12.75 19.1479 12.9081 19.5294 13.1894 19.8107C13.4707 20.092 13.8522 20.25 14.25 20.25C14.6479 20.25 15.0294 20.092 15.3107 19.8107C15.592 19.5294 15.75 19.1479 15.75 18.75C15.75 18.5511 15.829 18.3604 15.9697 18.2197C16.1103 18.0791 16.3011 18 16.5 18C16.6989 18 16.8897 18.0791 17.0304 18.2197C17.171 18.3604 17.25 18.5511 17.25 18.75C17.25 19.5457 16.934 20.3087 16.3713 20.8714C15.8087 21.434 15.0457 21.75 14.25 21.75C13.4544 21.75 12.6913 21.434 12.1287 20.8714C11.5661 20.3087 11.25 19.5457 11.25 18.75V13.5H3.03138C2.82361 13.4998 2.61814 13.4565 2.42797 13.3728C2.23779 13.2891 2.06705 13.1669 1.92653 13.0138C1.78602 12.8608 1.67878 12.6803 1.61161 12.4836C1.54444 12.287 1.51878 12.0786 1.53628 11.8716C1.75673 9.24811 2.95463 6.80315 4.89263 5.02118C6.83062 3.23921 9.3673 2.25024 12 2.25024C14.6328 2.25024 17.1694 3.23921 19.1074 5.02118C21.0454 6.80315 22.2433 9.24811 22.4638 11.8716C22.4808 12.0791 22.4547 12.288 22.3872 12.485C22.3196 12.6819 22.2121 12.8628 22.0713 13.0163Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(UmbrellaSimpleSolid);
export default ForwardRef;