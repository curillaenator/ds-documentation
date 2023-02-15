import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChatCenteredDotsSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2502 3.75H3.75015C3.35247 3.75045 2.9712 3.90864 2.68999 4.18984C2.40879 4.47105 2.25061 4.85231 2.25015 5.25V17.2499C2.25061 17.6476 2.40879 18.0289 2.68999 18.3101C2.9712 18.5913 3.35247 18.7494 3.75015 18.7499L9.32544 18.75L10.7139 21.064C10.8472 21.2861 11.0357 21.4699 11.2611 21.5975C11.4865 21.7251 11.7411 21.7922 12.0002 21.7922C12.2592 21.7922 12.5138 21.7251 12.7392 21.5975C12.9646 21.4699 13.1531 21.2861 13.2864 21.064L14.6748 18.75H20.2501C20.6478 18.7496 21.029 18.5914 21.3103 18.3102C21.5915 18.029 21.7497 17.6477 21.7502 17.25V5.25C21.7497 4.85231 21.5915 4.47105 21.3103 4.18984C21.0291 3.90864 20.6478 3.75045 20.2502 3.75ZM7.5001 12.375C7.2776 12.375 7.06009 12.3091 6.87509 12.1854C6.69008 12.0618 6.54589 11.8861 6.46074 11.6806C6.37559 11.475 6.35331 11.2488 6.39672 11.0306C6.44013 10.8123 6.54728 10.6119 6.70461 10.4545C6.86194 10.2972 7.0624 10.1901 7.28063 10.1467C7.49886 10.1033 7.72506 10.1255 7.93062 10.2107C8.13619 10.2958 8.31189 10.44 8.43551 10.625C8.55912 10.81 8.6251 11.0275 8.6251 11.25C8.6251 11.5484 8.50658 11.8346 8.2956 12.0455C8.08462 12.2565 7.79847 12.375 7.5001 12.375ZM12.0001 12.375C11.7776 12.375 11.5601 12.3091 11.3751 12.1854C11.1901 12.0618 11.0459 11.8861 10.9607 11.6806C10.8756 11.475 10.8533 11.2488 10.8967 11.0306C10.9401 10.8123 11.0473 10.6119 11.2046 10.4545C11.3619 10.2972 11.5624 10.1901 11.7806 10.1467C11.9989 10.1033 12.2251 10.1255 12.4306 10.2107C12.6362 10.2958 12.8119 10.44 12.9355 10.625C13.0591 10.81 13.1251 11.0275 13.1251 11.25C13.1251 11.5484 13.0066 11.8346 12.7956 12.0455C12.5846 12.2565 12.2985 12.375 12.0001 12.375ZM16.5001 12.375C16.2776 12.375 16.0601 12.3091 15.8751 12.1854C15.6901 12.0618 15.5459 11.8861 15.4607 11.6806C15.3756 11.475 15.3533 11.2488 15.3967 11.0306C15.4401 10.8123 15.5473 10.6119 15.7046 10.4545C15.8619 10.2972 16.0624 10.1901 16.2806 10.1467C16.4989 10.1033 16.7251 10.1255 16.9306 10.2107C17.1362 10.2958 17.3119 10.44 17.4355 10.625C17.5591 10.81 17.6251 11.0275 17.6251 11.25C17.6251 11.5484 17.5066 11.8346 17.2956 12.0455C17.0846 12.2565 16.7985 12.375 16.5001 12.375Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ChatCenteredDotsSolid);
export default ForwardRef;