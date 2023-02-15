import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ShieldSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5003 3H4.50025C4.10258 3.00052 3.72135 3.15872 3.44016 3.43991C3.15896 3.7211 3.00076 4.10233 3.00024 4.5V9.99976C3.00024 18.3867 10.1084 21.1677 11.5344 21.6401C11.8365 21.7427 12.164 21.7427 12.4661 21.6401C13.8914 21.1677 21.0003 18.3875 21.0003 9.99976V4.5C20.9998 4.10233 20.8416 3.7211 20.5604 3.43991C20.2792 3.15872 19.898 3.00052 19.5003 3Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ShieldSolid);
export default ForwardRef;
