import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Phosphor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M6.375 3L12.5625 15.375M6.375 3H12.5625M6.375 3V15.375M12.5625 15.375V3M12.5625 15.375H6.375M12.5625 15.375V21.5625C10.9215 21.5625 9.34766 20.9106 8.18728 19.7502C7.0269 18.5898 6.375 17.016 6.375 15.375M12.5625 15.375H13.3125C14.9535 15.375 16.5273 14.7231 17.6877 13.5627C18.8481 12.4023 19.5 10.8285 19.5 9.1875C19.5 7.54647 18.8481 5.97266 17.6877 4.81228C16.5273 3.6519 14.9535 3 13.3125 3H12.5625'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Phosphor);
export default ForwardRef;
