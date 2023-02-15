import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CameraSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 5.25H16.9008L15.6235 3.33398C15.555 3.23125 15.4622 3.14701 15.3533 3.08875C15.2445 3.03048 15.1229 3 14.9995 3H8.99945C8.87598 3 8.75442 3.03048 8.64556 3.08875C8.5367 3.14701 8.44391 3.23125 8.37543 3.33398L7.09808 5.25H4.5C3.90347 5.25068 3.33157 5.48795 2.90976 5.90976C2.48795 6.33157 2.25068 6.90347 2.25 7.5V18C2.25068 18.5965 2.48795 19.1684 2.90976 19.5902C3.33157 20.012 3.90347 20.2493 4.5 20.25H19.5C20.0965 20.2493 20.6684 20.012 21.0902 19.5902C21.512 19.1684 21.7493 18.5965 21.75 18V7.5C21.7493 6.90347 21.512 6.33157 21.0902 5.90976C20.6684 5.48795 20.0965 5.25068 19.5 5.25ZM15.375 12.375C15.375 13.0425 15.1771 13.695 14.8062 14.25C14.4354 14.8051 13.9083 15.2376 13.2916 15.4931C12.6749 15.7485 11.9963 15.8154 11.3416 15.6852C10.6869 15.5549 10.0855 15.2335 9.61351 14.7615C9.14151 14.2895 8.82007 13.6881 8.68985 13.0334C8.55962 12.3787 8.62646 11.7001 8.88191 11.0834C9.13735 10.4667 9.56993 9.93964 10.125 9.56879C10.68 9.19794 11.3325 9 12 9C12.8948 9.001 13.7527 9.3569 14.3854 9.98962C15.0181 10.6223 15.374 11.4802 15.375 12.375Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CameraSolid);
export default ForwardRef;