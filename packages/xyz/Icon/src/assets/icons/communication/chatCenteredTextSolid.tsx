import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChatCenteredTextSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 3.75H3.75C3.35231 3.75045 2.97105 3.90864 2.68984 4.18984C2.40864 4.47105 2.25045 4.85231 2.25 5.25V17.2499C2.25045 17.6476 2.40864 18.0289 2.68984 18.3101C2.97105 18.5913 3.35231 18.7494 3.75 18.7499L9.32529 18.75L10.7138 21.064C10.8471 21.2861 11.0356 21.4699 11.261 21.5975C11.4864 21.7251 11.741 21.7922 12 21.7922C12.259 21.7922 12.5136 21.7251 12.739 21.5975C12.9644 21.4699 13.1529 21.2861 13.2862 21.064L14.6746 18.75H20.2499C20.6476 18.7496 21.0289 18.5914 21.3101 18.3102C21.5913 18.029 21.7495 17.6477 21.75 17.25V5.25C21.7495 4.85231 21.5914 4.47105 21.3102 4.18984C21.029 3.90864 20.6477 3.75045 20.25 3.75ZM15 13.4999H9C8.80109 13.4999 8.61032 13.4209 8.46967 13.2802C8.32902 13.1396 8.25 12.9488 8.25 12.7499C8.25 12.551 8.32902 12.3602 8.46967 12.2196C8.61032 12.0789 8.80109 11.9999 9 11.9999H15C15.1989 11.9999 15.3897 12.0789 15.5303 12.2196C15.671 12.3602 15.75 12.551 15.75 12.7499C15.75 12.9488 15.671 13.1396 15.5303 13.2802C15.3897 13.4209 15.1989 13.4999 15 13.4999ZM15 10.4999H9C8.80109 10.4999 8.61032 10.4209 8.46967 10.2802C8.32902 10.1396 8.25 9.94882 8.25 9.74991C8.25 9.55099 8.32902 9.36023 8.46967 9.21958C8.61032 9.07892 8.80109 8.99991 9 8.99991H15C15.1989 8.99991 15.3897 9.07892 15.5303 9.21958C15.671 9.36023 15.75 9.55099 15.75 9.74991C15.75 9.94882 15.671 10.1396 15.5303 10.2802C15.3897 10.4209 15.1989 10.4999 15 10.4999Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ChatCenteredTextSolid);
export default ForwardRef;
