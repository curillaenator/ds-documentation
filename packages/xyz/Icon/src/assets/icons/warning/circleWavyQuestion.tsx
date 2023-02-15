import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CircleWavyQuestion = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 16.8H12.0012M11.9999 13.5004V12.7505C12.5191 12.7505 13.0266 12.5965 13.4582 12.3081C13.8899 12.0196 14.2264 11.6097 14.425 11.13C14.6237 10.6504 14.6757 10.1226 14.5744 9.61338C14.4731 9.10418 14.2231 8.63646 13.856 8.26935C13.4889 7.90224 13.0212 7.65224 12.512 7.55095C12.0028 7.44967 11.475 7.50165 10.9954 7.70033C10.5157 7.89901 10.1057 8.23545 9.81731 8.66713C9.52888 9.0988 9.37493 9.60631 9.37493 10.1255M5.10571 18.8943C4.24283 18.0314 4.81514 16.2198 4.37595 15.1584C3.92066 14.058 2.25 13.1723 2.25 12C2.25 10.8276 3.92067 9.942 4.37595 8.84164C4.81515 7.78015 4.24283 5.96858 5.10571 5.10571C5.96858 4.24283 7.78016 4.81514 8.84165 4.37595C9.94203 3.92066 10.8277 2.25 12 2.25C13.1724 2.25 14.058 3.92067 15.1584 4.37595C16.2199 4.81515 18.0314 4.24283 18.8943 5.10571C19.7572 5.96858 19.1849 7.78016 19.6241 8.84165C20.0793 9.94203 21.75 10.8277 21.75 12C21.75 13.1724 20.0793 14.058 19.624 15.1584C19.1849 16.2199 19.7572 18.0314 18.8943 18.8943C18.0314 19.7572 16.2198 19.1849 15.1584 19.6241C14.058 20.0793 13.1723 21.75 12 21.75C10.8276 21.75 9.942 20.0793 8.84164 19.624C7.78015 19.1849 5.96858 19.7572 5.10571 18.8943Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(CircleWavyQuestion);
export default ForwardRef;
