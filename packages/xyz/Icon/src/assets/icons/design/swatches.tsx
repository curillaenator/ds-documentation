import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Swatches = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.0888 11.7041L17.9291 9.2144C18.116 9.14637 18.3223 9.15537 18.5026 9.23944C18.6829 9.3235 18.8224 9.47574 18.8904 9.66265L20.686 14.596C20.7197 14.6886 20.7348 14.7869 20.7305 14.8853C20.7262 14.9837 20.7026 15.0803 20.661 15.1695C20.6193 15.2588 20.5605 15.339 20.4879 15.4055C20.4153 15.4721 20.3303 15.5236 20.2377 15.5573L7.90428 20.0463M20.625 15.237V19.4995C20.625 19.6984 20.5459 19.8892 20.4053 20.0298C20.2646 20.1705 20.0739 20.2495 19.875 20.2495H6.74996M6.71952 16.8H6.72072M3.43776 16.2227L5.70531 3.36275C5.73985 3.16686 5.8508 2.99271 6.01374 2.87862C6.17668 2.76453 6.37827 2.71984 6.57416 2.75438L11.7444 3.66603C11.9403 3.70057 12.1144 3.81152 12.2285 3.97446C12.3426 4.13739 12.3873 4.33898 12.3528 4.53487L10.0736 17.4605C9.92017 18.3308 9.4315 19.1061 8.71259 19.62C7.99367 20.134 7.10188 20.3454 6.22877 20.2089C4.35914 19.916 3.10914 18.0864 3.43776 16.2227Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Swatches);
export default ForwardRef;