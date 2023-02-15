import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Youtube = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15 11.9998L10.5 8.99984V14.9998L15 11.9998Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.25 11.9995C2.25 14.7891 2.5382 16.4258 2.75729 17.267C2.81585 17.4967 2.92832 17.7092 3.08537 17.8868C3.24241 18.0644 3.43952 18.2021 3.66037 18.2883C6.79883 19.4944 12 19.4613 12 19.4613C12 19.4613 17.2011 19.4944 20.3396 18.2883C20.5604 18.2021 20.7576 18.0645 20.9146 17.8868C21.0717 17.7092 21.1841 17.4967 21.2427 17.267C21.4618 16.4258 21.75 14.7891 21.75 11.9995C21.75 9.2099 21.4618 7.57319 21.2427 6.73199C21.1841 6.50225 21.0717 6.28976 20.9146 6.11215C20.7576 5.93453 20.5605 5.7969 20.3396 5.71064C17.2012 4.50457 12 4.53769 12 4.53769C12 4.53769 6.79888 4.50457 3.66039 5.71063C3.43955 5.79688 3.24244 5.93452 3.08539 6.11213C2.92834 6.28975 2.81588 6.50223 2.75731 6.73197C2.53821 7.57317 2.25 9.2099 2.25 11.9995Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Youtube);
export default ForwardRef;
