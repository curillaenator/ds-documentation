import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const GithubSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21 20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21C19.4546 20.9991 18.6921 20.6827 18.1297 20.1203C17.5673 19.5579 17.2509 18.7954 17.25 18V17.25C17.2495 16.8523 17.0914 16.4711 16.8102 16.1899C16.529 15.9087 16.1477 15.7505 15.75 15.75H14.625V19.5C14.6255 19.8977 14.7836 20.279 15.0648 20.5602C15.346 20.8414 15.7273 20.9996 16.125 21C16.3239 21 16.5147 21.079 16.6553 21.2197C16.796 21.3603 16.875 21.5511 16.875 21.75C16.875 21.9489 16.796 22.1397 16.6553 22.2803C16.5147 22.421 16.3239 22.5 16.125 22.5C15.3296 22.4991 14.5671 22.1827 14.0047 21.6203C13.4423 21.0579 13.1259 20.2954 13.125 19.5V15.75H10.875V19.5C10.8741 20.2954 10.5577 21.0579 9.99532 21.6203C9.4329 22.1827 8.67037 22.4991 7.875 22.5C7.67609 22.5 7.48532 22.421 7.34467 22.2803C7.20402 22.1397 7.125 21.9489 7.125 21.75C7.125 21.5511 7.20402 21.3603 7.34467 21.2197C7.48532 21.079 7.67609 21 7.875 21C8.27269 20.9996 8.65395 20.8414 8.93516 20.5602C9.21636 20.279 9.37455 19.8977 9.375 19.5V15.75H8.25C7.85231 15.7505 7.47105 15.9087 7.18984 16.1899C6.90864 16.4711 6.75045 16.8523 6.75 17.25V18C6.74909 18.7954 6.43273 19.5579 5.87032 20.1203C5.3079 20.6827 4.54537 20.9991 3.75 21C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25C3 20.0511 3.07902 19.8603 3.21967 19.7197C3.36032 19.579 3.55109 19.5 3.75 19.5C4.14769 19.4996 4.52895 19.3414 4.81016 19.0602C5.09136 18.779 5.24955 18.3977 5.25 18V17.25C5.25029 16.7464 5.37739 16.251 5.61956 15.8094C5.86173 15.3678 6.21119 14.9943 6.6357 14.7234C5.97366 14.236 5.43544 13.5999 5.06446 12.8663C4.69349 12.1326 4.50013 11.3221 4.5 10.5V9.75001C4.49822 8.8159 4.74718 7.89843 5.22089 7.09334C4.99168 6.3541 4.91818 5.57538 5.00503 4.80631C5.09188 4.03724 5.33719 3.29452 5.72548 2.62501C5.7913 2.51099 5.88598 2.41631 5.99999 2.35048C6.11401 2.28466 6.24335 2.25001 6.375 2.25001C7.24868 2.24806 8.1107 2.45051 8.89217 2.84117C9.67364 3.23184 10.3529 3.79989 10.8756 4.49992L13.1244 4.50001C13.6471 3.79995 14.3263 3.23187 15.1078 2.84119C15.8893 2.45051 16.7513 2.24806 17.625 2.25001C17.7567 2.25001 17.886 2.28466 18 2.35048C18.114 2.41631 18.2087 2.51099 18.2745 2.62501C18.6628 3.29452 18.9081 4.03724 18.995 4.80631C19.0818 5.57538 19.0083 6.3541 18.7791 7.09334C19.2528 7.89843 19.5018 8.8159 19.5 9.75001V10.5C19.4999 11.3221 19.3065 12.1326 18.9355 12.8663C18.5646 13.5999 18.0263 14.236 17.3643 14.7234C17.7888 14.9943 18.1383 15.3678 18.3804 15.8094C18.6226 16.251 18.7497 16.7464 18.75 17.25V18C18.7505 18.3977 18.9086 18.779 19.1898 19.0602C19.471 19.3414 19.8523 19.4996 20.25 19.5C20.4489 19.5 20.6397 19.579 20.7803 19.7197C20.921 19.8603 21 20.0511 21 20.25Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(GithubSolid);
export default ForwardRef;
