import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BellZSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.7013 16.4943C20.1449 15.5366 19.4816 13.7192 19.4816 10.5V9.83478C19.4816 5.68305 16.1509 2.28058 12.057 2.25019C12.0379 2.25009 12.0189 2.25 11.9998 2.25C10.0132 2.25258 8.10902 3.0442 6.70611 4.45072C5.3032 5.85723 4.51647 7.76344 4.51899 9.75V10.5C4.51899 13.719 3.85532 15.5363 3.29868 16.494C3.16572 16.7217 3.09517 16.9805 3.09414 17.2443C3.09311 17.508 3.16164 17.7673 3.29282 17.9961C3.424 18.2249 3.61318 18.4151 3.8413 18.5475C4.06942 18.6798 4.32841 18.7497 4.59214 18.75H8.24995C8.24995 19.7446 8.64504 20.6984 9.3483 21.4017C10.0516 22.1049 11.0054 22.5 11.9999 22.5C12.9945 22.5 13.9483 22.1049 14.6516 21.4017C15.3549 20.6984 15.7499 19.7446 15.7499 18.75H19.4078C19.6715 18.7497 19.9304 18.6798 20.1585 18.5475C20.3866 18.4152 20.5758 18.2251 20.7069 17.9963C20.8381 17.7675 20.9067 17.5083 20.9057 17.2446C20.9047 16.9809 20.8342 16.7221 20.7013 16.4943ZM11.9999 21C11.4034 20.9993 10.8315 20.7621 10.4097 20.3402C9.9879 19.9184 9.75063 19.3465 9.74995 18.75H14.2499C14.2493 19.3465 14.012 19.9184 13.5902 20.3402C13.1684 20.7621 12.5965 20.9993 11.9999 21ZM13.8749 14.25H10.1249C9.98239 14.25 9.84279 14.2094 9.72249 14.1329C9.60219 14.0564 9.50619 13.9473 9.44572 13.8182C9.38526 13.6891 9.36284 13.5454 9.3811 13.404C9.39935 13.2626 9.45753 13.1294 9.54881 13.0199L12.2737 9.75H10.1249C9.92603 9.75 9.73527 9.67099 9.59462 9.53033C9.45396 9.38968 9.37495 9.19892 9.37495 9C9.37495 8.80109 9.45396 8.61033 9.59462 8.46968C9.73527 8.32902 9.92603 8.25 10.1249 8.25H13.8749C14.0175 8.24999 14.1571 8.2906 14.2774 8.36708C14.3977 8.44357 14.4937 8.55276 14.5542 8.68185C14.6146 8.81095 14.6371 8.9546 14.6188 9.09598C14.6005 9.23736 14.5424 9.37061 14.4511 9.48011L11.7262 12.75H13.8749C14.0739 12.75 14.2646 12.829 14.4053 12.9697C14.5459 13.1103 14.6249 13.3011 14.6249 13.5C14.6249 13.6989 14.5459 13.8897 14.4053 14.0303C14.2646 14.171 14.0739 14.25 13.8749 14.25Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(BellZSolid);
export default ForwardRef;