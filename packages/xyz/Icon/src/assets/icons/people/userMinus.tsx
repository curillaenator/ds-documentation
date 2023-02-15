import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UserMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 5.25002H21M2.90509 20.2491C3.82718 18.6531 5.15304 17.3278 6.74948 16.4064C8.34592 15.485 10.1567 15 12 15C13.8432 15 15.654 15.4851 17.2504 16.4065C18.8469 17.328 20.1727 18.6533 21.0948 20.2493M17.9999 9.00001C17.9985 10.2444 17.6098 11.4575 16.8877 12.471C16.1657 13.4845 15.146 14.2481 13.9703 14.6558C12.7946 15.0636 11.5212 15.0952 10.3267 14.7464C9.13215 14.3977 8.07583 13.6857 7.30427 12.7094C6.53272 11.733 6.0842 10.5407 6.02096 9.29794C5.95772 8.05515 6.28289 6.82349 6.95134 5.77388C7.6198 4.72426 8.5984 3.90874 9.75133 3.44049C10.9043 2.97224 12.1744 2.87448 13.3854 3.16077'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(UserMinus);
export default ForwardRef;
