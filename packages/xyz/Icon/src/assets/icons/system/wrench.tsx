import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Wrench = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.3431 3.4749L13.4091 7.40883L13.9395 10.0605L16.5911 10.5908L20.525 6.65689C21.012 7.80629 21.1288 9.07874 20.8586 10.2974C20.5884 11.5161 19.9449 12.6202 19.0178 13.4561C18.0907 14.292 16.926 14.818 15.6859 14.9609C14.4459 15.1039 13.1921 14.8566 12.0991 14.2536L6.84112 20.3408C6.41908 20.7624 5.84691 20.9991 5.2504 20.9989C4.65388 20.9987 4.08185 20.7617 3.66005 20.3399C3.23825 19.9181 3.00121 19.3461 3.00104 18.7496C3.00087 18.153 3.23758 17.5809 3.65914 17.1588L9.74646 11.9008C9.14345 10.8078 8.89609 9.55411 9.03903 8.31404C9.18198 7.07396 9.70799 5.9093 10.5438 4.98217C11.3797 4.05505 12.4838 3.41159 13.7025 3.14137C14.9212 2.87114 16.1937 2.98798 17.3431 3.4749Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Wrench);
export default ForwardRef;
