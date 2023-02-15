import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const WhatsappSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.0001 2.25C10.3066 2.25046 8.64242 2.69187 7.17135 3.5308C5.70027 4.36973 4.473 5.57726 3.61033 7.03453C2.74765 8.49181 2.27931 10.1486 2.25139 11.8418C2.22347 13.5351 2.63693 15.2064 3.45109 16.6913L2.64983 19.4959C2.57631 19.7531 2.57293 20.0253 2.64002 20.2842C2.7071 20.5432 2.84223 20.7795 3.03138 20.9687C3.22053 21.1578 3.45683 21.293 3.71578 21.3601C3.97474 21.4272 4.24693 21.4238 4.50414 21.3503L7.30877 20.549C8.6121 21.2642 10.0617 21.6718 11.5468 21.7409C13.0318 21.8099 14.513 21.5384 15.877 20.9472C17.2411 20.356 18.4519 19.4607 19.4168 18.3297C20.3818 17.1988 21.0754 15.8622 21.4446 14.4221C21.8138 12.9821 21.8488 11.4766 21.547 10.0209C21.2451 8.56524 20.6144 7.19784 19.7031 6.02329C18.7917 4.84873 17.6238 3.89812 16.2888 3.24414C14.9537 2.59015 13.4867 2.2501 12.0001 2.25ZM14.2617 18C14.259 18.0022 14.2539 18 14.2499 18C13.1655 18 12.0918 17.7862 11.0901 17.3709C10.0884 16.9556 9.17845 16.3468 8.41222 15.5795C7.646 14.8122 7.03856 13.9013 6.62465 12.8991C6.21074 11.8968 5.99848 10.8228 6.00002 9.73838C6.00344 8.84539 6.36048 7.99013 6.99301 7.35978C7.62554 6.72943 8.48203 6.37534 9.37502 6.375C9.62108 6.37531 9.86272 6.4405 10.0756 6.564C10.2884 6.68749 10.4649 6.86493 10.5873 7.07841L11.6833 8.99662C11.8153 9.22801 11.8834 9.49037 11.8806 9.75677C11.8778 10.0232 11.8041 10.284 11.6672 10.5125L11.0005 11.6236C11.3302 12.1953 11.8048 12.6699 12.3764 12.9996L13.4875 12.3329C13.716 12.196 13.9769 12.1223 14.2433 12.1194C14.5097 12.1166 14.772 12.1847 15.0035 12.3167L16.9215 13.4128C17.135 13.5351 17.3125 13.7116 17.436 13.9244C17.5595 14.1373 17.6247 14.3789 17.625 14.625C17.6247 15.518 17.2706 16.3744 16.6403 17.007C16.0099 17.6395 15.1547 17.9965 14.2617 18Z'
      fill='currentColor'
    />
    <path
      d='M12.7922 14.4992C12.6885 14.5615 12.5713 14.5978 12.4505 14.6049C12.3298 14.612 12.2091 14.5898 12.0988 14.5402C10.9258 14.0132 9.98679 13.0742 9.4598 11.9012C9.41018 11.7909 9.38799 11.6702 9.39512 11.5495C9.40224 11.4287 9.43847 11.3115 9.50072 11.2077L10.3809 9.74069L9.31533 7.87585C8.83021 7.89107 8.36991 8.09391 8.03132 8.44166C7.69274 8.78942 7.50227 9.25497 7.50002 9.74032C7.49876 10.6276 7.67243 11.5063 8.01108 12.3264C8.34974 13.1464 8.84674 13.8917 9.47366 14.5195C10.1006 15.1473 10.8451 15.6454 11.6647 15.9852C12.4843 16.325 13.3628 16.4999 14.25 16.4999H14.2596C14.745 16.4977 15.2105 16.3072 15.5583 15.9686C15.9061 15.63 16.1089 15.1697 16.1241 14.6846L14.2593 13.619L12.7922 14.4992Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(WhatsappSolid);
export default ForwardRef;
