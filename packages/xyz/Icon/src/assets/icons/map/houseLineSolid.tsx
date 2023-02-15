import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HouseLineSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M22.4973 19.4996H20.9973V10.8314C20.9971 10.6224 20.9533 10.4158 20.8688 10.2247C20.7843 10.0336 20.6608 9.86223 20.5064 9.7215L13.0058 2.90258C12.7303 2.65029 12.3702 2.51036 11.9967 2.51038C11.6231 2.51039 11.2631 2.65035 10.9877 2.90267L3.48824 9.7215C3.33377 9.86221 3.21033 10.0336 3.1258 10.2247C3.04128 10.4158 2.99753 10.6224 2.99734 10.8314V19.4996H1.49734C1.29843 19.4996 1.10767 19.5786 0.967014 19.7193C0.826362 19.8599 0.747345 20.0507 0.747345 20.2496C0.747345 20.4485 0.826362 20.6393 0.967014 20.78C1.10767 20.9206 1.29843 20.9996 1.49734 20.9996H22.4973C22.6962 20.9996 22.8869 20.9206 23.0276 20.78C23.1682 20.6393 23.2473 20.4485 23.2473 20.2496C23.2473 20.0507 23.1682 19.8599 23.0276 19.7193C22.8869 19.5786 22.6962 19.4996 22.4973 19.4996H22.4973ZM14.2467 19.4988H13.4967V19.4996H10.4968V19.4988H9.74676V14.9988C9.74676 14.7999 9.82578 14.6092 9.96643 14.4685C10.1071 14.3279 10.2978 14.2488 10.4968 14.2488H13.4967C13.6957 14.2488 13.8864 14.3279 14.0271 14.4685C14.1677 14.6092 14.2467 14.7999 14.2467 14.9988V19.4988Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(HouseLineSolid);
export default ForwardRef;
