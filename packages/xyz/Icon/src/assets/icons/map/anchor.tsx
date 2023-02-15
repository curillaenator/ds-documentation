import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Anchor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 21.75V6.75M12 21.75C12 20.7554 11.6049 19.8016 10.9017 19.0983C10.1984 18.3951 9.24456 18 8.25 18C7.05653 18 5.91193 17.5259 5.06802 16.682C4.22411 15.8381 3.75 14.6935 3.75 13.5M12 21.75C12 20.7554 12.3951 19.8016 13.0983 19.0983C13.8016 18.3951 14.7554 18 15.75 18C16.9435 18 18.0881 17.5259 18.932 16.682C19.7759 15.8381 20.25 14.6935 20.25 13.5M12 6.75C13.0355 6.75 13.875 5.91053 13.875 4.875C13.875 3.83947 13.0355 3 12 3C10.9645 3 10.125 3.83947 10.125 4.875C10.125 5.91053 10.9645 6.75 12 6.75ZM8.25 10.5H15.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Anchor);
export default ForwardRef;
