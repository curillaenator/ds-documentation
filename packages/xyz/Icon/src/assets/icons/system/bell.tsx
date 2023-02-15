import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Bell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9 17.9999V18.7499C9 19.5456 9.31607 20.3086 9.87868 20.8712C10.4413 21.4338 11.2044 21.7499 12 21.7499C12.7956 21.7499 13.5587 21.4338 14.1213 20.8712C14.6839 20.3086 15 19.5456 15 18.7499V17.9999M5.26892 9.74994C5.26768 8.86045 5.4425 7.97951 5.78331 7.1579C6.12412 6.33628 6.62417 5.59025 7.25465 4.9628C7.88513 4.33535 8.63356 3.83889 9.45681 3.50204C10.28 3.16519 11.1618 2.99461 12.0513 3.00013C15.7628 3.02772 18.7316 6.11275 18.7316 9.83468V10.4999C18.7316 13.8577 19.4341 15.8061 20.0528 16.871C20.1195 16.9848 20.1549 17.1142 20.1556 17.246C20.1563 17.3779 20.1223 17.5076 20.0568 17.6221C19.9914 17.7366 19.8969 17.8318 19.783 17.8982C19.669 17.9645 19.5395 17.9996 19.4077 17.9999H4.5921C4.46021 17.9996 4.33075 17.9645 4.21677 17.8981C4.10278 17.8318 4.00831 17.7366 3.94289 17.622C3.87747 17.5075 3.8434 17.3778 3.84413 17.2459C3.84486 17.114 3.88035 16.9846 3.94704 16.8709C4.5661 15.8059 5.26891 13.8575 5.26891 10.4999L5.26892 9.74994Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Bell);
export default ForwardRef;
