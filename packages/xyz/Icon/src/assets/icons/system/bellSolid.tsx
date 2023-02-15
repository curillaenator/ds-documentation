import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BellSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.7013 16.4943C20.1449 15.5366 19.4816 13.7192 19.4816 10.5V9.83469C19.4816 5.68296 16.1509 2.28058 12.057 2.25019C12.0378 2.25009 12.0189 2.25 11.9997 2.25C10.0132 2.25258 8.10901 3.0442 6.7061 4.45072C5.30319 5.85723 4.51646 7.76344 4.51897 9.75V10.5C4.51897 13.719 3.85531 15.5363 3.29867 16.494C3.16571 16.7217 3.09516 16.9805 3.09413 17.2443C3.0931 17.508 3.16163 17.7673 3.2928 17.9961C3.42398 18.2249 3.61317 18.4151 3.84129 18.5475C4.06941 18.6798 4.32839 18.7497 4.59213 18.75H8.24993C8.24993 19.7446 8.64502 20.6984 9.34828 21.4017C10.0515 22.1049 11.0054 22.5 11.9999 22.5C12.9945 22.5 13.9483 22.1049 14.6516 21.4017C15.3548 20.6984 15.7499 19.7446 15.7499 18.75H19.4077C19.6714 18.7497 19.9304 18.6798 20.1585 18.5475C20.3866 18.4152 20.5757 18.2251 20.7069 17.9963C20.8381 17.7675 20.9067 17.5083 20.9057 17.2446C20.9047 16.9809 20.8342 16.7221 20.7013 16.4943ZM11.9999 21C11.4034 20.9993 10.8315 20.7621 10.4097 20.3402C9.98789 19.9184 9.75062 19.3465 9.74993 18.75H14.2499C14.2493 19.3465 14.012 19.9184 13.5902 20.3402C13.1684 20.7621 12.5965 20.9993 11.9999 21Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(BellSolid);
export default ForwardRef;
