import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BagSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 6H16.4363C16.2593 4.95148 15.7166 3.99956 14.9045 3.3131C14.0924 2.62664 13.0634 2.25 12 2.25C10.9366 2.25 9.90764 2.62664 9.09554 3.3131C8.28344 3.99956 7.74073 4.95148 7.56367 6H3.75C3.35231 6.00045 2.97105 6.15863 2.68984 6.43984C2.40864 6.72105 2.25045 7.10231 2.25 7.5V19.5C2.25045 19.8977 2.40864 20.2789 2.68984 20.5602C2.97105 20.8414 3.35231 20.9995 3.75 21H20.25C20.6477 20.9995 21.029 20.8414 21.3102 20.5602C21.5914 20.2789 21.7495 19.8977 21.75 19.5V7.5C21.7495 7.10231 21.5914 6.72105 21.3102 6.43984C21.029 6.15863 20.6477 6.00045 20.25 6ZM8.99927 9.75C8.99927 9.94891 8.92025 10.1397 8.7796 10.2803C8.63895 10.421 8.44818 10.5 8.24927 10.5C8.05036 10.5 7.85959 10.421 7.71894 10.2803C7.57829 10.1397 7.49927 9.94891 7.49927 9.75V8.25C7.49927 8.05109 7.57829 7.86032 7.71894 7.71967C7.85959 7.57902 8.05036 7.5 8.24927 7.5C8.44818 7.5 8.63895 7.57902 8.7796 7.71967C8.92025 7.86032 8.99927 8.05109 8.99927 8.25V9.75ZM9.09494 6C9.26129 5.35601 9.63691 4.78555 10.1628 4.37828C10.6886 3.971 11.3349 3.75 12 3.75C12.6651 3.75 13.3114 3.971 13.8372 4.37828C14.3631 4.78555 14.7387 5.35601 14.9051 6H9.09494ZM16.4993 9.75C16.4993 9.94891 16.4203 10.1397 16.2796 10.2803C16.1389 10.421 15.9482 10.5 15.7493 10.5C15.5504 10.5 15.3596 10.421 15.2189 10.2803C15.0783 10.1397 14.9993 9.94891 14.9993 9.75V8.25C14.9993 8.05109 15.0783 7.86032 15.2189 7.71967C15.3596 7.57902 15.5504 7.5 15.7493 7.5C15.9482 7.5 16.1389 7.57902 16.2796 7.71967C16.4203 7.86032 16.4993 8.05109 16.4993 8.25V9.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(BagSolid);
export default ForwardRef;
