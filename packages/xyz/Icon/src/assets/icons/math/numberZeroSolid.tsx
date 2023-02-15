import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberZeroSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 22.5C9.58502 22.5 7.59448 21.3214 6.24371 19.0917C5.11926 17.2358 4.5 14.7172 4.5 12C4.5 9.28259 5.11926 6.76395 6.24371 4.90803C7.59448 2.67848 9.58502 1.5 12 1.5C14.415 1.5 16.4055 2.67848 17.7563 4.90803C18.8807 6.76395 19.5 9.28259 19.5 12C19.5 14.7172 18.8807 17.2358 17.7563 19.0917C16.4055 21.3214 14.415 22.5 12 22.5ZM12 3C7.85522 3 6 7.52022 6 12C6 16.4798 7.85522 21 12 21C16.1448 21 18 16.4798 18 12C18 7.52022 16.1448 3 12 3Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberZeroSolid);
export default ForwardRef;
