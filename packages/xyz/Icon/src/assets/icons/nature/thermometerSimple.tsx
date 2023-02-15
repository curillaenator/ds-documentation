import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ThermometerSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 15.75C10.9645 15.75 10.125 16.5895 10.125 17.625C10.125 18.6605 10.9645 19.5 12 19.5C13.0355 19.5 13.875 18.6605 13.875 17.625C13.875 16.5895 13.0355 15.75 12 15.75ZM12 15.75V8.25M9 13.7836V4.5C9 3.70435 9.31607 2.94129 9.87868 2.37868C10.4413 1.81607 11.2044 1.5 12 1.5C12.7956 1.5 13.5587 1.81607 14.1213 2.37868C14.6839 2.94129 15 3.70435 15 4.5V13.7836C15.8 14.4084 16.3857 15.2664 16.6741 16.2396C16.9625 17.2128 16.9399 18.2517 16.6095 19.2115C16.2791 20.1713 15.6574 21.004 14.8311 21.5934C14.0048 22.1829 13.015 22.4997 12 22.4997C10.985 22.4997 9.99525 22.1829 9.16891 21.5934C8.34258 21.004 7.72086 20.1713 7.39047 19.2115C7.06008 18.2517 7.03752 17.2128 7.32592 16.2396C7.61432 15.2664 8.20004 14.4084 9 13.7836Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ThermometerSimple);
export default ForwardRef;