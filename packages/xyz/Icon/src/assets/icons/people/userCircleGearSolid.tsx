import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UserCircleGearSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 7.125C12.8159 7.125 13.6134 7.36693 14.2917 7.82019C14.9701 8.27345 15.4988 8.91768 15.811 9.67143C16.1232 10.4252 16.2049 11.2546 16.0457 12.0547C15.8866 12.8549 15.4937 13.5899 14.9168 14.1668C14.3399 14.7437 13.6049 15.1366 12.8048 15.2957C12.0046 15.4549 11.1752 15.3732 10.4214 15.061C9.66769 14.7488 9.02345 14.2201 8.57019 13.5417C8.11693 12.8634 7.875 12.0658 7.875 11.25C7.875 10.156 8.3096 9.10677 9.08319 8.33318C9.85678 7.5596 10.906 7.125 12 7.125ZM21.6728 6.9375C21.6236 7.02283 21.5581 7.09762 21.4799 7.1576C21.4018 7.21758 21.3126 7.26157 21.2175 7.28707C21.1223 7.31256 21.0231 7.31906 20.9254 7.30618C20.8278 7.2933 20.7336 7.26131 20.6483 7.21202L20.2107 6.95933C20.001 7.13899 19.7601 7.27853 19.5 7.371V7.875C19.5 8.07391 19.421 8.26468 19.2803 8.40533C19.1397 8.54598 18.9489 8.625 18.75 8.625C18.5511 8.625 18.3603 8.54598 18.2197 8.40533C18.079 8.26468 18 8.07391 18 7.875V7.371C17.7399 7.27853 17.499 7.13899 17.2893 6.95933L16.8517 7.21202C16.7664 7.26126 16.6722 7.29323 16.5746 7.30608C16.4769 7.31894 16.3777 7.31243 16.2826 7.28694C16.0905 7.23546 15.9266 7.10976 15.8272 6.9375C15.7779 6.8522 15.746 6.75804 15.7331 6.66039C15.7203 6.56274 15.7268 6.46352 15.7523 6.36838C15.8037 6.17625 15.9294 6.01243 16.1017 5.91298L16.5383 5.66091C16.4872 5.38935 16.4872 5.11065 16.5383 4.83909L16.1017 4.58702C15.9294 4.48756 15.8037 4.32375 15.7523 4.13161C15.7008 3.93948 15.7277 3.73476 15.8272 3.5625C15.9266 3.39023 16.0905 3.26453 16.2826 3.21305C16.4747 3.16157 16.6794 3.18852 16.8517 3.28798L17.2893 3.54066C17.499 3.36101 17.7399 3.22147 18 3.129V2.625C18 2.42609 18.079 2.23532 18.2197 2.09467C18.3603 1.95402 18.5511 1.875 18.75 1.875C18.9489 1.875 19.1397 1.95402 19.2803 2.09467C19.421 2.23532 19.5 2.42609 19.5 2.625V3.129C19.7601 3.22147 20.001 3.36101 20.2107 3.54067L20.6483 3.28798C20.8206 3.18852 21.0253 3.16157 21.2174 3.21306C21.4096 3.26454 21.5734 3.39024 21.6728 3.5625C21.7723 3.73477 21.7992 3.93948 21.7477 4.13162C21.6963 4.32375 21.5706 4.48757 21.3983 4.58702L20.9617 4.83909C21.0128 5.11065 21.0128 5.38935 20.9617 5.66091L21.3983 5.91298C21.5706 6.01244 21.6963 6.17626 21.7477 6.36839C21.7992 6.56052 21.7723 6.76523 21.6728 6.9375ZM18.75 6C18.8983 6 19.0433 5.95601 19.1667 5.8736C19.29 5.79119 19.3861 5.67406 19.4429 5.53701C19.4997 5.39997 19.5145 5.24917 19.4856 5.10368C19.4567 4.9582 19.3852 4.82456 19.2803 4.71967C19.1754 4.61478 19.0418 4.54335 18.8963 4.51441C18.7508 4.48547 18.6 4.50032 18.463 4.55709C18.3259 4.61386 18.2088 4.70999 18.1264 4.83332C18.044 4.95666 18 5.10166 18 5.25C18.0002 5.44884 18.0793 5.63948 18.2199 5.78008C18.3605 5.92068 18.5512 5.99977 18.75 6ZM20.8472 10.1772C20.7494 10.1888 20.6549 10.2197 20.569 10.2679C20.4831 10.3161 20.4075 10.3807 20.3467 10.4582C20.2858 10.5356 20.2407 10.6242 20.2141 10.719C20.1874 10.8139 20.1797 10.913 20.1914 11.0108C20.2304 11.3391 20.25 11.6694 20.25 12C20.2516 14.0196 19.5093 15.969 18.1648 17.476C17.5627 16.6037 16.782 15.8695 15.8744 15.3221C14.8308 16.3188 13.4431 16.875 12 16.875C10.5569 16.875 9.16923 16.3188 8.12559 15.3221C7.218 15.8695 6.43724 16.6037 5.83516 17.4759C4.77812 16.2879 4.08721 14.8195 3.84567 13.2477C3.60413 11.6759 3.82227 10.0678 4.47381 8.61711C5.12535 7.16646 6.18249 5.93518 7.51783 5.07162C8.85318 4.20807 10.4098 3.74909 12 3.75C12.2556 3.75 12.5135 3.76181 12.7664 3.78509C12.9644 3.80316 13.1615 3.74188 13.3143 3.61472C13.4671 3.48756 13.5632 3.30492 13.5814 3.10694C13.5997 2.90896 13.5385 2.71184 13.4115 2.55892C13.2844 2.40599 13.1019 2.30976 12.9039 2.29138C12.6055 2.26392 12.3014 2.25 12 2.25C10.0349 2.24908 8.11536 2.84227 6.49338 3.95174C4.8714 5.06122 3.62272 6.63512 2.91121 8.46693C2.1997 10.2987 2.0586 12.3028 2.50643 14.2163C2.95425 16.1297 3.97008 17.863 5.42061 19.1888C5.45772 19.2305 5.4994 19.2679 5.54487 19.3003C7.32481 20.8786 9.62127 21.75 12.0001 21.75C14.379 21.75 16.6754 20.8784 18.4553 19.3001C18.5006 19.2679 18.5421 19.2306 18.5791 19.1891C19.5786 18.2773 20.3768 17.1669 20.9228 15.929C21.4688 14.6911 21.7505 13.353 21.75 12C21.75 11.61 21.7269 11.2203 21.6808 10.833C21.6572 10.6355 21.5561 10.4554 21.3998 10.3324C21.2435 10.2094 21.0447 10.1536 20.8472 10.1772Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(UserCircleGearSolid);
export default ForwardRef;
