import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DribbbleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.08718 3.06977C9.59755 2.40741 11.2514 2.13955 12.8937 2.29132C14.5359 2.44309 16.1126 3.00951 17.4761 3.93746C16.3487 5.46625 14.9294 6.75627 13.3001 7.73287C11.9309 5.81013 10.15 4.21707 8.08718 3.06977ZM11.9605 8.44066C10.5474 6.51196 8.67456 4.96716 6.51229 3.94675C4.62351 5.2353 3.24556 7.14456 2.61763 9.34309C3.7248 9.61362 4.86045 9.75017 6.00019 9.74982C8.05849 9.75179 10.0925 9.30503 11.9605 8.44066ZM21.7312 11.4086C21.5802 8.91574 20.4762 6.57648 18.6478 4.87523C17.4174 6.53001 15.8764 7.92922 14.1108 8.99469C14.6249 9.88511 15.0501 10.8239 15.3804 11.7976C17.4489 11.2376 19.6099 11.1052 21.7312 11.4086V11.4086ZM15.794 13.2396C16.0718 14.4217 16.2118 15.6319 16.2112 16.8462C16.2102 18.2647 16.0184 19.6767 15.6408 21.0441C17.2978 20.374 18.7393 19.2624 19.8084 17.8301C20.8776 16.3977 21.5335 14.6997 21.7047 12.9205C19.7338 12.6131 17.7204 12.7218 15.794 13.2396H15.794ZM13.9527 12.2595C13.6506 11.3731 13.2614 10.5188 12.791 9.70899C10.6718 10.7259 8.35077 11.2526 6.00019 11.2498C4.76121 11.2502 3.52652 11.1043 2.32178 10.815C2.12561 12.4178 2.33099 14.0441 2.91944 15.5478C3.50789 17.0514 4.46094 18.3852 5.69284 19.429C7.50758 16.1343 10.4355 13.5929 13.9527 12.2595ZM6.91741 20.3175C9.00865 21.5971 11.5054 22.0414 13.9097 21.5616C14.4395 20.0459 14.7104 18.4518 14.7112 16.8462C14.7112 15.7907 14.5938 14.7385 14.3612 13.709C11.1702 14.9519 8.52956 17.2962 6.91741 20.3175Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(DribbbleSolid);
export default ForwardRef;