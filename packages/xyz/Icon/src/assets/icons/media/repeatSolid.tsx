import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const RepeatSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3 12.75C3.19891 12.75 3.38967 12.671 3.53032 12.5303C3.67097 12.3897 3.74999 12.1989 3.75 12C3.75157 10.6081 4.3052 9.27366 5.28942 8.28944C6.27365 7.30521 7.60809 6.75158 9 6.75002H19.1893L18.2196 7.7197C18.079 7.86036 18 8.05113 18 8.25005C18 8.44896 18.079 8.63973 18.2197 8.78038C18.3603 8.92103 18.5511 9.00004 18.75 9.00003C18.9489 9.00002 19.1397 8.921 19.2804 8.78033L21.5304 6.53033C21.5329 6.52782 21.535 6.52498 21.5375 6.52242C21.5522 6.50735 21.5665 6.49188 21.5798 6.47558C21.5877 6.46597 21.5946 6.45586 21.602 6.44597C21.6092 6.43626 21.6167 6.42679 21.6235 6.41672C21.6312 6.40523 21.6379 6.39333 21.6449 6.38156C21.6503 6.37232 21.6561 6.36334 21.6612 6.35387C21.6676 6.34196 21.673 6.32974 21.6787 6.31761C21.6834 6.30754 21.6885 6.29765 21.6928 6.28731C21.6976 6.27554 21.7016 6.26355 21.7058 6.2516C21.7098 6.24043 21.7141 6.22945 21.7176 6.21805C21.7212 6.20601 21.7239 6.19374 21.7269 6.18157C21.7298 6.17003 21.7331 6.15859 21.7354 6.14682C21.7382 6.13268 21.74 6.11835 21.7419 6.10402C21.7433 6.09408 21.7453 6.08433 21.7462 6.07427C21.7511 6.02489 21.7511 5.97515 21.7462 5.92577C21.7453 5.9157 21.7433 5.90594 21.7419 5.89601C21.74 5.88168 21.7382 5.86735 21.7354 5.85321C21.7331 5.84145 21.7298 5.83 21.7269 5.81847C21.7239 5.80629 21.7212 5.79402 21.7176 5.78198C21.7141 5.77058 21.7098 5.7596 21.7058 5.74843C21.7016 5.73648 21.6976 5.72449 21.6928 5.71272C21.6885 5.70238 21.6834 5.69249 21.6787 5.68242C21.673 5.67029 21.6676 5.65807 21.6612 5.64616C21.6561 5.63669 21.6503 5.62772 21.6449 5.61847C21.6379 5.6067 21.6312 5.5948 21.6235 5.58331C21.6167 5.57324 21.6092 5.56377 21.602 5.55406C21.5946 5.54418 21.5877 5.53406 21.5798 5.52445C21.5662 5.50783 21.5517 5.49208 21.5367 5.4767C21.5345 5.47446 21.5326 5.47194 21.5304 5.4697L19.2804 3.2197C19.1397 3.07904 18.9489 3.00001 18.75 3C18.5511 2.99999 18.3603 3.079 18.2197 3.21965C18.079 3.3603 18 3.55107 18 3.74998C18 3.9489 18.079 4.13968 18.2196 4.28034L19.1893 5.25002H9C7.21041 5.25203 5.49469 5.96384 4.22926 7.22927C2.96382 8.4947 2.25202 10.2104 2.25 12C2.25001 12.1989 2.32903 12.3897 2.46968 12.5303C2.61033 12.671 2.80109 12.75 3 12.75Z'
      fill='currentColor'
    />
    <path
      d='M21.0001 11.25C20.8011 11.25 20.6104 11.329 20.4697 11.4697C20.3291 11.6103 20.2501 11.8011 20.2501 12C20.2485 13.3919 19.6949 14.7264 18.7106 15.7106C17.7264 16.6948 16.392 17.2484 15.0001 17.25H4.81072L5.78042 16.2803C5.92107 16.1397 6.00008 15.9489 6.00007 15.75C6.00007 15.5511 5.92104 15.3603 5.78038 15.2197C5.63972 15.079 5.44894 15 5.25003 15C5.05111 15 4.86034 15.079 4.71969 15.2197L2.46969 17.4697C2.46745 17.4719 2.46557 17.4745 2.46335 17.4767C2.44838 17.4921 2.43383 17.5078 2.42021 17.5244C2.41231 17.5341 2.40542 17.5442 2.39808 17.5541C2.39084 17.5638 2.38331 17.5732 2.37656 17.5833C2.36887 17.5948 2.36219 17.6067 2.35521 17.6185C2.34971 17.6277 2.34392 17.6367 2.33884 17.6462C2.33246 17.6581 2.32705 17.6703 2.32135 17.6824C2.31664 17.6925 2.31158 17.7024 2.3073 17.7127C2.30243 17.7245 2.29849 17.7365 2.29423 17.7484C2.29025 17.7596 2.28595 17.7706 2.28249 17.782C2.27885 17.794 2.27615 17.8063 2.27313 17.8185C2.27024 17.83 2.26697 17.8414 2.26464 17.8532C2.26183 17.8674 2.26008 17.8817 2.25811 17.896C2.25672 17.9059 2.2548 17.9157 2.25381 17.9258C2.24891 17.9751 2.24891 18.0249 2.25381 18.0743C2.2548 18.0843 2.25672 18.0941 2.25811 18.104C2.26008 18.1183 2.26182 18.1327 2.26464 18.1468C2.26697 18.1586 2.27024 18.17 2.27313 18.1816C2.27615 18.1937 2.27885 18.206 2.28249 18.218C2.28595 18.2294 2.29025 18.2404 2.29423 18.2516C2.29849 18.2636 2.30243 18.2755 2.3073 18.2873C2.31158 18.2977 2.31664 18.3075 2.32135 18.3176C2.32705 18.3297 2.33246 18.342 2.33884 18.3539C2.34392 18.3633 2.34972 18.3723 2.35521 18.3816C2.36219 18.3933 2.36887 18.4052 2.37656 18.4167C2.38331 18.4268 2.39084 18.4363 2.39808 18.446C2.40542 18.4559 2.41231 18.466 2.42021 18.4756C2.43358 18.4919 2.44788 18.5074 2.46255 18.5224C2.46505 18.525 2.46715 18.5278 2.46969 18.5303L4.71969 20.7803C4.78933 20.85 4.87201 20.9052 4.96301 20.9429C5.054 20.9806 5.15153 21 5.25003 21C5.34852 21 5.44605 20.9806 5.53705 20.943C5.62804 20.9053 5.71073 20.85 5.78038 20.7804C5.85003 20.7107 5.90528 20.6281 5.94297 20.5371C5.98067 20.4461 6.00007 20.3485 6.00007 20.25C6.00008 20.1516 5.98068 20.054 5.943 19.963C5.90531 19.872 5.85007 19.7893 5.78042 19.7197L4.81072 18.75H15.0001C16.7896 18.748 18.5054 18.0362 19.7708 16.7708C21.0362 15.5053 21.748 13.7896 21.7501 12C21.75 11.8011 21.671 11.6103 21.5304 11.4697C21.3897 11.329 21.199 11.25 21.0001 11.25Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(RepeatSolid);
export default ForwardRef;
