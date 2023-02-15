import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const AlignBottomSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.0005 20.2505C21.0005 20.4495 20.9215 20.6402 20.7808 20.7809C20.6402 20.9215 20.4494 21.0005 20.2505 21.0005H3.75043C3.55152 21.0005 3.36075 20.9215 3.2201 20.7809C3.07945 20.6402 3.00043 20.4495 3.00043 20.2505C3.00043 20.0516 3.07945 19.8609 3.2201 19.7202C3.36075 19.5796 3.55152 19.5005 3.75043 19.5005H20.2505C20.4494 19.5006 20.6402 19.5796 20.7808 19.7202C20.9215 19.8609 21.0005 20.0516 21.0005 20.2505ZM14.25 18H18C18.3977 17.9995 18.779 17.8414 19.0602 17.5602C19.3414 17.279 19.4996 16.8977 19.5001 16.5V7.5C19.4996 7.10231 19.3414 6.72105 19.0602 6.43984C18.779 6.15864 18.3977 6.00045 18 6H14.25C13.8523 6.00045 13.4711 6.15864 13.1899 6.43984C12.9087 6.72105 12.7505 7.10231 12.75 7.5V16.5C12.7505 16.8977 12.9087 17.279 13.1899 17.5602C13.4711 17.8414 13.8523 17.9995 14.25 18ZM5.99998 18H9.75C10.1477 17.9995 10.529 17.8414 10.8102 17.5602C11.0914 17.279 11.2496 16.8977 11.25 16.5V3.75C11.2496 3.35231 11.0914 2.97105 10.8102 2.68984C10.529 2.40864 10.1477 2.25045 9.75 2.25H5.99998C5.6023 2.25045 5.22103 2.40864 4.93982 2.68984C4.65861 2.97105 4.50043 3.35231 4.49998 3.75V16.5C4.50043 16.8977 4.65861 17.279 4.93982 17.5602C5.22103 17.8414 5.6023 17.9995 5.99998 18Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(AlignBottomSolid);
export default ForwardRef;
