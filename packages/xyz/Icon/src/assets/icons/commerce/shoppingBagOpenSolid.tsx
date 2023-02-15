import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ShoppingBagOpenSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 3.75H3.75C3.35231 3.75045 2.97105 3.90864 2.68984 4.18984C2.40864 4.47105 2.25045 4.85231 2.25 5.25V18.75C2.25045 19.1477 2.40864 19.529 2.68984 19.8102C2.97105 20.0914 3.35231 20.2495 3.75 20.25H20.25C20.6477 20.2495 21.029 20.0914 21.3102 19.8102C21.5914 19.529 21.7495 19.1477 21.75 18.75V5.25C21.7495 4.85231 21.5914 4.47105 21.3102 4.18984C21.029 3.90864 20.6477 3.75045 20.25 3.75ZM12 15C10.8069 14.9987 9.66312 14.5241 8.8195 13.6805C7.97588 12.8369 7.50134 11.6931 7.5 10.5C7.5 10.3011 7.57902 10.1103 7.71967 9.96967C7.86032 9.82902 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.82902 8.78033 9.96967C8.92098 10.1103 9 10.3011 9 10.5C9 11.2956 9.31607 12.0587 9.87868 12.6213C10.4413 13.1839 11.2044 13.5 12 13.5C12.7956 13.5 13.5587 13.1839 14.1213 12.6213C14.6839 12.0587 15 11.2956 15 10.5C15 10.3011 15.079 10.1103 15.2197 9.96967C15.3603 9.82902 15.5511 9.75 15.75 9.75C15.9489 9.75 16.1397 9.82902 16.2803 9.96967C16.421 10.1103 16.5 10.3011 16.5 10.5C16.4987 11.6931 16.0241 12.8369 15.1805 13.6805C14.3369 14.5241 13.1931 14.9987 12 15ZM3.75 6.75V5.25H20.25L20.2501 6.75H3.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ShoppingBagOpenSolid);
export default ForwardRef;