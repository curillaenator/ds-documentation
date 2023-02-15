import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const RedditSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M23.2499 9.75C23.2501 9.17502 23.0849 8.61212 22.7742 8.12834C22.4635 7.64457 22.0202 7.2603 21.4972 7.02133C20.9743 6.78235 20.3936 6.69874 19.8245 6.78044C19.2554 6.86214 18.7217 7.10571 18.2871 7.48215C16.7164 6.64767 14.8407 6.14349 12.8809 6.02665L13.368 3.10392L15.4147 3.41877C15.5134 3.94038 15.7933 4.4103 16.2049 4.74548C16.6166 5.08067 17.1335 5.25952 17.6643 5.25044C18.1951 5.24135 18.7056 5.04492 19.1055 4.69585C19.5055 4.34678 19.7692 3.86755 19.85 3.34286C19.9308 2.81818 19.8235 2.28183 19.547 1.82861C19.2706 1.37539 18.8429 1.03448 18.3394 0.86614C17.8359 0.697801 17.2892 0.71287 16.7957 0.908683C16.3023 1.1045 15.894 1.46845 15.6429 1.9362L12.864 1.5087C12.669 1.4786 12.47 1.52661 12.3102 1.6423C12.1503 1.75799 12.0425 1.93203 12.0102 2.12668L11.3621 6.01524C9.3147 6.10352 7.34838 6.61326 5.71289 7.48215C5.11737 6.96639 4.34284 6.70564 3.55665 6.75625C2.77046 6.80687 2.03575 7.16477 1.51128 7.75264C0.986805 8.3405 0.714685 9.11112 0.753717 9.89797C0.79275 10.6848 1.1398 11.4247 1.71988 11.9578C1.57426 12.4589 1.50024 12.9781 1.50001 13.5C1.50001 15.5564 2.62895 17.4705 4.67881 18.8896C6.64453 20.2506 9.24462 21 12 21C14.7553 21 17.3554 20.2506 19.3212 18.8896C21.371 17.4705 22.4999 15.5564 22.4999 13.5C22.4997 12.9782 22.4257 12.459 22.28 11.9579C22.5849 11.6764 22.8284 11.335 22.9953 10.9551C23.1621 10.5752 23.2489 10.1649 23.2499 9.75ZM6.75 12.375C6.75 12.0783 6.83797 11.7883 7.00279 11.5416C7.16761 11.295 7.40188 11.1027 7.67597 10.9892C7.95006 10.8757 8.25166 10.8459 8.54263 10.9038C8.8336 10.9617 9.10087 11.1046 9.31065 11.3143C9.52043 11.5241 9.66329 11.7914 9.72117 12.0824C9.77904 12.3733 9.74934 12.6749 9.63581 12.949C9.52228 13.2231 9.33002 13.4574 9.08334 13.6222C8.83667 13.787 8.54666 13.875 8.24999 13.875C7.85231 13.8745 7.47104 13.7164 7.18984 13.4352C6.90863 13.154 6.75045 12.7727 6.75 12.375ZM15.4402 17.1665C14.3763 17.7147 13.1968 18.0006 12 18.0006C10.8032 18.0006 9.62368 17.7147 8.55976 17.1665C8.38362 17.0749 8.25098 16.9172 8.19091 16.728C8.13085 16.5388 8.14827 16.3334 8.23936 16.157C8.33044 15.9806 8.48775 15.8475 8.67681 15.7869C8.86587 15.7263 9.07124 15.7431 9.24791 15.8337C10.099 16.2722 11.0426 16.501 12 16.501C12.9574 16.501 13.901 16.2722 14.752 15.8337C14.9288 15.7426 15.1345 15.7253 15.3239 15.7858C15.5133 15.8463 15.671 15.9795 15.7622 16.1562C15.8534 16.3329 15.8707 16.5385 15.8104 16.728C15.75 16.9175 15.6169 17.0752 15.4402 17.1665ZM15.75 13.875C15.4533 13.875 15.1633 13.787 14.9166 13.6222C14.6699 13.4574 14.4777 13.2231 14.3642 12.949C14.2506 12.6749 14.2209 12.3733 14.2788 12.0824C14.3367 11.7914 14.4795 11.5241 14.6893 11.3143C14.8991 11.1046 15.1664 10.9617 15.4573 10.9038C15.7483 10.8459 16.0499 10.8757 16.324 10.9892C16.5981 11.1027 16.8323 11.295 16.9972 11.5416C17.162 11.7883 17.25 12.0783 17.25 12.375C17.2495 12.7727 17.0913 13.154 16.8101 13.4352C16.5289 13.7164 16.1477 13.8745 15.75 13.875Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(RedditSolid);
export default ForwardRef;