import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UserPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 5.25H21M18.75 3V7.5M2.90509 20.2491C3.82718 18.6531 5.15304 17.3278 6.74948 16.4064C8.34592 15.485 10.1567 15 12 15C13.8432 15 15.654 15.4851 17.2504 16.4065C18.8469 17.3279 20.1727 18.6533 21.0948 20.2493M17.6297 11.0796C17.2287 12.1625 16.5235 13.1066 15.5989 13.7984C14.6743 14.4902 13.5696 14.9004 12.4176 14.9796C11.2655 15.0588 10.1151 14.8037 9.10452 14.245C8.09393 13.6862 7.26616 12.8476 6.72065 11.8298C6.17514 10.812 5.93509 9.65831 6.02934 8.5074C6.12359 7.35648 6.54814 6.25726 7.25197 5.34177C7.9558 4.42629 8.90898 3.73348 9.99701 3.34659C11.085 2.9597 12.2616 2.89518 13.3854 3.16077'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(UserPlus);
export default ForwardRef;
