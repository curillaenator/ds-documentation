import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const AirplaneTilt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.6443 7.53761L16.4895 10.4999L19.4895 18.7499L17.2395 20.9999L12.7575 14.4394L10.4895 16.4999V18.7499L8.2395 20.9999L6.90896 17.0761L2.9895 15.7499L5.2395 13.4999H7.4895L9.7395 11.2499L2.9895 6.74992L5.2395 4.49992L13.4895 7.49992L16.4624 4.35563L16.3985 4.40893C16.6074 4.19962 16.8554 4.03353 17.1285 3.92015C17.4016 3.80677 17.6943 3.74833 17.99 3.74817C18.2857 3.74801 18.5785 3.80613 18.8517 3.9192C19.1249 4.03228 19.3732 4.1981 19.5822 4.40718C19.7913 4.61626 19.9571 4.8645 20.0702 5.1377C20.1833 5.41091 20.2414 5.70372 20.2413 5.99941C20.2411 6.29509 20.1827 6.58784 20.0693 6.86092C19.9559 7.134 19.7898 7.38206 19.5805 7.59091L19.6443 7.53761Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(AirplaneTilt);
export default ForwardRef;
