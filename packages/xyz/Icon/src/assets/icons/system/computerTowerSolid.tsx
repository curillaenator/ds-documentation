import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ComputerTowerSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18 2.25H6C5.60231 2.25045 5.22105 2.40864 4.93984 2.68984C4.65864 2.97105 4.50045 3.35231 4.5 3.75V20.25C4.50045 20.6477 4.65864 21.029 4.93984 21.3102C5.22105 21.5914 5.60231 21.7495 6 21.75H18C18.3977 21.7495 18.779 21.5914 19.0602 21.3102C19.3414 21.029 19.4995 20.6477 19.5 20.25V3.75C19.4995 3.35231 19.3414 2.97105 19.0602 2.68984C18.779 2.40864 18.3977 2.25045 18 2.25ZM12 18C11.7775 18 11.56 17.934 11.375 17.8104C11.19 17.6868 11.0458 17.5111 10.9606 17.3055C10.8755 17.1 10.8532 16.8738 10.8966 16.6555C10.94 16.4373 11.0472 16.2368 11.2045 16.0795C11.3618 15.9222 11.5623 15.815 11.7805 15.7716C11.9988 15.7282 12.225 15.7505 12.4305 15.8356C12.6361 15.9208 12.8118 16.065 12.9354 16.25C13.059 16.435 13.125 16.6525 13.125 16.875C13.1247 17.1733 13.006 17.4592 12.7951 17.6701C12.5842 17.881 12.2983 17.9997 12 18ZM15 10.5H9C8.80109 10.5 8.61032 10.421 8.46967 10.2803C8.32902 10.1397 8.25 9.94891 8.25 9.75C8.25 9.55109 8.32902 9.36032 8.46967 9.21967C8.61032 9.07902 8.80109 9 9 9H15C15.1989 9 15.3897 9.07902 15.5303 9.21967C15.671 9.36032 15.75 9.55109 15.75 9.75C15.75 9.94891 15.671 10.1397 15.5303 10.2803C15.3897 10.421 15.1989 10.5 15 10.5ZM15 7.5H9C8.80109 7.5 8.61032 7.42098 8.46967 7.28033C8.32902 7.13968 8.25 6.94891 8.25 6.75C8.25 6.55109 8.32902 6.36032 8.46967 6.21967C8.61032 6.07902 8.80109 6 9 6H15C15.1989 6 15.3897 6.07902 15.5303 6.21967C15.671 6.36032 15.75 6.55109 15.75 6.75C15.75 6.94891 15.671 7.13968 15.5303 7.28033C15.3897 7.42098 15.1989 7.5 15 7.5Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ComputerTowerSolid);
export default ForwardRef;
