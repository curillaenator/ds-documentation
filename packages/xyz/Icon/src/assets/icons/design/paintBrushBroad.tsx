import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PaintBrushBroad = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M10.5 14.25L9.75 19.5C9.75 20.0967 9.98705 20.669 10.409 21.091C10.831 21.5129 11.4033 21.75 12 21.75C12.5967 21.75 13.169 21.5129 13.591 21.091C14.0129 20.669 14.25 20.0967 14.25 19.5L13.5 14.25M3.75 10.5H20.25M15.75 3V6.75M6.75 3H19.5C19.6989 3 19.8897 3.07902 20.0303 3.21967C20.171 3.36032 20.25 3.55109 20.25 3.75V13.5C20.25 13.6989 20.171 13.8897 20.0303 14.0303C19.8897 14.171 19.6989 14.25 19.5 14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V6C3.75 5.20435 4.06607 4.44129 4.62868 3.87868C5.19129 3.31607 5.95435 3 6.75 3Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(PaintBrushBroad);
export default ForwardRef;
