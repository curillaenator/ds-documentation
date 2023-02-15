import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DeviceMobileCameraSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 1.5H7.5C6.90347 1.50068 6.33157 1.73795 5.90976 2.15976C5.48795 2.58157 5.25068 3.15347 5.25 3.75V20.25C5.25068 20.8465 5.48795 21.4184 5.90976 21.8402C6.33157 22.262 6.90347 22.4993 7.5 22.5H16.5C17.0965 22.4993 17.6684 22.262 18.0902 21.8402C18.512 21.4184 18.7493 20.8465 18.75 20.25V3.75C18.7493 3.15347 18.512 2.58157 18.0902 2.15976C17.6684 1.73795 17.0965 1.50068 16.5 1.5ZM12 6.75C11.7775 6.75 11.56 6.68402 11.375 6.5604C11.19 6.43679 11.0458 6.26109 10.9606 6.05552C10.8755 5.84995 10.8532 5.62375 10.8966 5.40552C10.94 5.18729 11.0472 4.98684 11.2045 4.8295C11.3618 4.67217 11.5623 4.56502 11.7805 4.52162C11.9988 4.47821 12.225 4.50049 12.4305 4.58564C12.6361 4.67078 12.8118 4.81498 12.9354 4.99998C13.059 5.18499 13.125 5.4025 13.125 5.625C13.125 5.92337 13.0065 6.20952 12.7955 6.4205C12.5845 6.63147 12.2984 6.75 12 6.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(DeviceMobileCameraSolid);
export default ForwardRef;