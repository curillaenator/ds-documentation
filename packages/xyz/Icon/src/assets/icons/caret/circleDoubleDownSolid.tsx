import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CircleDoubleDownSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.10582 5.10608C3.74375 6.46938 2.81644 8.20589 2.44111 10.0961C2.06578 11.9863 2.25929 13.9454 2.99717 15.7257C3.73506 17.5059 4.98419 19.0275 6.58666 20.0979C8.18914 21.1684 10.073 21.7398 12.0001 21.7398C13.9273 21.7398 15.8112 21.1684 17.4136 20.0979C19.0161 19.0275 20.2652 17.5059 21.0031 15.7257C21.741 13.9454 21.9345 11.9863 21.5592 10.0961C21.1839 8.20589 20.2565 6.46938 18.8945 5.10608C17.0645 3.28041 14.5851 2.25513 12.0001 2.25513C9.41521 2.25513 6.9358 3.28041 5.10582 5.10608ZM14.4699 12.9701C14.5395 12.9003 14.6222 12.845 14.7132 12.8072C14.8042 12.7694 14.9018 12.7499 15.0003 12.7499C15.0989 12.7498 15.1965 12.7692 15.2875 12.8069C15.3786 12.8446 15.4613 12.8998 15.531 12.9695C15.6007 13.0392 15.656 13.1219 15.6936 13.213C15.7313 13.3041 15.7507 13.4017 15.7506 13.5002C15.7506 13.5987 15.7311 13.6963 15.6933 13.7873C15.6555 13.8784 15.6002 13.961 15.5304 14.0306L12.5304 17.0306C12.4608 17.1003 12.3781 17.1556 12.2871 17.1933C12.1962 17.231 12.0986 17.2504 12.0001 17.2504C11.9017 17.2504 11.8041 17.231 11.7131 17.1933C11.6222 17.1556 11.5395 17.1003 11.4699 17.0306L8.46985 14.0306C8.32946 13.89 8.25067 13.6993 8.25077 13.5005C8.25088 13.3018 8.32988 13.1112 8.47042 12.9707C8.61096 12.8301 8.80154 12.7511 9.0003 12.751C9.19905 12.7509 9.38972 12.8297 9.53041 12.9701L12.0001 15.4398L14.4699 12.9701ZM14.4699 7.72009C14.5395 7.65033 14.6222 7.59498 14.7132 7.55719C14.8042 7.51941 14.9018 7.49993 15.0003 7.49988C15.0989 7.49983 15.1965 7.5192 15.2875 7.55689C15.3786 7.59458 15.4613 7.64984 15.531 7.71953C15.6007 7.78921 15.656 7.87195 15.6936 7.963C15.7313 8.05406 15.7507 8.15165 15.7506 8.2502C15.7506 8.34875 15.7311 8.44632 15.6933 8.53734C15.6555 8.62835 15.6002 8.71103 15.5304 8.78064L12.5304 11.7806C12.4608 11.8503 12.3781 11.9056 12.2871 11.9433C12.1962 11.981 12.0986 12.0004 12.0001 12.0004C11.9017 12.0004 11.8041 11.981 11.7131 11.9433C11.6222 11.9056 11.5395 11.8503 11.4699 11.7806L8.46985 8.78064C8.32946 8.63995 8.25067 8.44928 8.25077 8.25053C8.25088 8.05178 8.32988 7.8612 8.47042 7.72066C8.61096 7.58012 8.80154 7.50112 9.0003 7.50101C9.19905 7.50091 9.38972 7.5797 9.53041 7.72009L12.0001 10.1898L14.4699 7.72009Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CircleDoubleDownSolid);
export default ForwardRef;
