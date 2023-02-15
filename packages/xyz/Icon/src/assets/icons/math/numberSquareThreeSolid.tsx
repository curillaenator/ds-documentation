import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberSquareThreeSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 3H4.5C4.10231 3.00045 3.72105 3.15864 3.43984 3.43984C3.15864 3.72105 3.00045 4.10231 3 4.5V19.5C3.00045 19.8977 3.15864 20.279 3.43984 20.5602C3.72105 20.8414 4.10231 20.9995 4.5 21H19.5C19.8977 20.9995 20.279 20.8414 20.5602 20.5602C20.8414 20.279 20.9995 19.8977 21 19.5V4.5C20.9995 4.10231 20.8414 3.72105 20.5602 3.43984C20.279 3.15864 19.8977 3.00045 19.5 3ZM14.0116 16.6366C13.6982 16.9499 13.3262 17.1985 12.9168 17.3681C12.5073 17.5377 12.0685 17.625 11.6253 17.625C11.1821 17.625 10.7433 17.5377 10.3339 17.3681C9.92443 17.1985 9.55241 16.9499 9.23904 16.6366C9.09839 16.4959 9.01938 16.3051 9.01939 16.1062C9.0194 15.9073 9.09843 15.7165 9.23909 15.5759C9.37975 15.4352 9.57052 15.3562 9.76944 15.3562C9.96836 15.3562 10.1591 15.4353 10.2998 15.5759C10.5178 15.7939 10.7862 15.9547 11.0812 16.0442C11.3762 16.1336 11.6887 16.1489 11.9911 16.0888C12.2934 16.0286 12.5763 15.8948 12.8146 15.6992C13.0529 15.5036 13.2393 15.2523 13.3572 14.9675C13.4752 14.6827 13.5211 14.3732 13.4909 14.0664C13.4607 13.7596 13.3553 13.465 13.184 13.2086C13.0127 12.9523 12.7809 12.7422 12.509 12.5968C12.2372 12.4515 11.9336 12.3754 11.6254 12.3754C11.4882 12.3754 11.3536 12.3378 11.2363 12.2666C11.119 12.1955 11.0235 12.0935 10.9601 11.9718C10.8968 11.8502 10.868 11.7134 10.8769 11.5765C10.8859 11.4397 10.9322 11.3078 11.0109 11.1954L12.8093 8.625H9.75C9.55109 8.625 9.36032 8.54598 9.21967 8.40533C9.07902 8.26468 9 8.07391 9 7.875C9 7.67609 9.07902 7.48532 9.21967 7.34467C9.36032 7.20402 9.55109 7.125 9.75 7.125H14.2495C14.3866 7.12499 14.5212 7.16261 14.6385 7.23377C14.7558 7.30493 14.8513 7.40689 14.9147 7.52857C14.978 7.65024 15.0068 7.78697 14.9979 7.92386C14.9889 8.06076 14.9426 8.19258 14.864 8.30498L12.8937 11.1209C13.41 11.3306 13.8664 11.6647 14.2222 12.0936C14.5779 12.5224 14.822 13.0327 14.9327 13.5788C15.0434 14.1249 15.0172 14.6899 14.8565 15.2234C14.6958 15.757 14.4055 16.2424 14.0116 16.6366Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberSquareThreeSolid);
export default ForwardRef;