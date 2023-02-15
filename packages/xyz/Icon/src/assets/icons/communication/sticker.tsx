import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Sticker = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.75 20.25H8.25C7.05653 20.25 5.91193 19.7759 5.06802 18.932C4.22411 18.0881 3.75 16.9435 3.75 15.75V8.25C3.75 7.05653 4.22411 5.91193 5.06802 5.06802C5.91193 4.22411 7.05653 3.75 8.25 3.75H15.75C16.9435 3.75 18.0881 4.22411 18.932 5.06802C19.7759 5.91193 20.25 7.05653 20.25 8.25V12.75M12.75 20.25C15 19.5 19.5 15 20.25 12.75M12.75 20.25V17.25C12.75 16.0565 13.2241 14.9119 14.068 14.068C14.9119 13.2241 16.0565 12.75 17.25 12.75H20.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Sticker);
export default ForwardRef;
