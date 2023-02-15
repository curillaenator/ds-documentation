import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Translate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.7489 20.25L16.4988 9.75L11.2488 20.25M12.7489 17.25H20.2489M8.24886 3V5.25M2.24884 5.25H14.2488M11.2488 5.25C11.2488 7.63695 10.3006 9.92613 8.6128 11.614C6.92497 13.3018 4.63579 14.25 2.24884 14.25M5.76159 8.25015C6.38306 10.0042 7.53276 11.5226 9.05252 12.5965C10.5723 13.6703 12.3875 14.2469 14.2483 14.2469'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Translate);
export default ForwardRef;
