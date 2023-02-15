import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MegaphoneSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.25 14.5938V18.0002C17.25 18.1991 17.171 18.3899 17.0303 18.5305C16.8897 18.6712 16.6989 18.7502 16.5 18.7502H13.5C13.3011 18.7502 13.1103 18.6712 12.9697 18.5305C12.829 18.3899 12.75 18.1991 12.75 18.0002V6.59403M2.99951 4.74976V17.7498C2.99951 17.8662 3.02662 17.981 3.07869 18.0852C3.13076 18.1893 3.20636 18.2799 3.29951 18.3498C3.39266 18.4196 3.50079 18.4668 3.61535 18.4877C3.7299 18.5085 3.84774 18.5024 3.95951 18.4698L20.4595 13.6573C20.6153 13.6118 20.7521 13.5171 20.8495 13.3873C20.9469 13.2574 20.9995 13.0995 20.9995 12.9373V9.56226C20.9995 9.39998 20.9469 9.24208 20.8495 9.11226C20.7521 8.98243 20.6153 8.88769 20.4595 8.84226L3.95951 4.02976C3.84774 3.99715 3.7299 3.99103 3.61535 4.01185C3.50079 4.03268 3.39266 4.0799 3.29951 4.14976C3.20636 4.21962 3.13076 4.3102 3.07869 4.41435C3.02662 4.51849 2.99951 4.63332 2.99951 4.74976Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(MegaphoneSimple);
export default ForwardRef;