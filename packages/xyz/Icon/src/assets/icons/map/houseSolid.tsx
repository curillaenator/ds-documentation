import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HouseSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.509 9.72152L13.0084 2.90254C12.7329 2.65026 12.3729 2.51035 11.9993 2.51038C11.6257 2.5104 11.2657 2.65036 10.9903 2.90267L3.49091 9.72148C3.33641 9.86218 3.21294 10.0336 3.1284 10.2247C3.04386 10.4158 3.0001 10.6224 2.99992 10.8314V19.4653C2.99562 19.8423 3.12935 20.2078 3.37592 20.493C3.51638 20.6526 3.68936 20.7804 3.88324 20.8678C4.07713 20.9552 4.28745 21.0001 4.5001 20.9995H8.99662C9.19553 20.9995 9.3863 20.9205 9.52695 20.7799C9.6676 20.6392 9.74662 20.4484 9.74662 20.2495V15.7489C9.74662 15.5499 9.82564 15.3592 9.96629 15.2185C10.1069 15.0779 10.2977 14.9989 10.4966 14.9989H13.4966C13.6955 14.9989 13.8863 15.0779 14.0269 15.2185C14.1676 15.3592 14.2466 15.5499 14.2466 15.7489V20.2495C14.2466 20.4484 14.3256 20.6392 14.4663 20.7799C14.6069 20.9205 14.7977 20.9995 14.9966 20.9995H19.502C19.7484 21.0028 19.9916 20.9429 20.2083 20.8256C20.4475 20.6964 20.6474 20.505 20.7868 20.2716C20.9261 20.0381 20.9998 19.7714 20.9999 19.4995V10.8314C20.9997 10.6225 20.956 10.4158 20.8714 10.2247C20.7869 10.0336 20.6635 9.86225 20.509 9.72152Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(HouseSolid);
export default ForwardRef;
