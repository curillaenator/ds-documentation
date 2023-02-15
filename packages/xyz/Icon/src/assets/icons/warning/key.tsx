import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Key = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.8 7.19998H16.8012M8.73455 11.5155C8.15639 10.0734 8.09388 8.47593 8.55759 6.99307C9.0213 5.51022 9.98277 4.23294 11.2795 3.37715C12.5762 2.52136 14.1287 2.13954 15.6744 2.29624C17.2202 2.45293 18.6644 3.13853 19.763 4.23714C20.8616 5.33575 21.5472 6.77999 21.7039 8.32574C21.8606 9.87149 21.4788 11.4239 20.623 12.7207C19.7672 14.0174 18.4899 14.9789 17.0071 15.4426C15.5242 15.9063 13.9267 15.8438 12.4846 15.2656L11.2502 16.4999H9.00021V18.7499H6.75021V20.9999H3.00021V17.2499L8.73455 11.5155Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Key);
export default ForwardRef;
