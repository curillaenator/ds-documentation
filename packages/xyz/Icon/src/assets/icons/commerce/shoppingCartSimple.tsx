import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ShoppingCartSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.01428 6.75H20.8357L18.3608 15.4121C18.2713 15.7255 18.0821 16.0012 17.8218 16.1975C17.5616 16.3938 17.2445 16.5 16.9185 16.5H7.93144C7.60548 16.5 7.28838 16.3938 7.02815 16.1975C6.76791 16.0012 6.5787 15.7255 6.48916 15.4121L3.09826 3.54396C3.05349 3.38725 2.95888 3.24939 2.82877 3.15124C2.69865 3.05309 2.5401 3 2.37712 3H0.799988M7.60975 20.1609H7.61095M17.2098 20.1609H17.211'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ShoppingCartSimple);
export default ForwardRef;
