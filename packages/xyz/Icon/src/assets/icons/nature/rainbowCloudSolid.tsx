import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const RainbowCloudSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M23.25 15C23.2487 16.1931 22.7741 17.3369 21.9305 18.1805C21.0869 19.0241 19.9431 19.4987 18.75 19.5H14.25C12.5958 19.5 11.25 18.1168 11.25 16.4167C11.25 14.7166 12.5958 13.3334 14.25 13.3334C14.3545 13.3333 14.4588 13.3388 14.5627 13.3499C14.947 12.3751 15.6594 11.5649 16.577 11.0591C17.4946 10.5533 18.56 10.3835 19.5894 10.5791C20.6188 10.7746 21.5477 11.3232 22.2159 12.1302C22.8842 12.9373 23.2499 13.9522 23.25 15ZM10.5 6.75C12.649 6.74536 14.714 7.58385 16.2514 9.08533C16.394 9.22401 16.5858 9.30037 16.7847 9.2976C16.9836 9.29482 17.1733 9.21315 17.312 9.07055C17.4507 8.92794 17.527 8.73609 17.5242 8.53719C17.5215 8.33829 17.4398 8.14864 17.2972 8.00995C15.923 6.67369 14.1855 5.77212 12.3017 5.41792C10.418 5.06372 8.47161 5.27262 6.70594 6.0185C4.94026 6.76437 3.4336 8.01414 2.37428 9.61158C1.31497 11.209 0.750002 13.0832 0.75 15V16.5C0.75 16.6989 0.829018 16.8897 0.96967 17.0303C1.11032 17.171 1.30109 17.25 1.5 17.25C1.69891 17.25 1.88968 17.171 2.03033 17.0303C2.17098 16.8897 2.25 16.6989 2.25 16.5V15C2.25247 12.8127 3.12246 10.7157 4.6691 9.1691C6.21574 7.62246 8.31272 6.75247 10.5 6.75ZM10.5 9.75C11.6175 9.7469 12.7064 10.1034 13.6058 10.7667C13.6851 10.825 13.7752 10.8672 13.8708 10.8907C13.9665 10.9142 14.0658 10.9187 14.1632 10.9038C14.2605 10.889 14.354 10.8551 14.4383 10.8041C14.5225 10.7531 14.5959 10.686 14.6543 10.6067C14.7126 10.5273 14.7547 10.4372 14.7783 10.3416C14.8018 10.246 14.8062 10.1466 14.7914 10.0493C14.7765 9.95193 14.7426 9.85845 14.6916 9.77419C14.6407 9.68993 14.5736 9.61654 14.4942 9.5582C13.4884 8.82006 12.2976 8.37511 11.0542 8.27276C9.8108 8.1704 8.56334 8.41465 7.45033 8.97837C6.33732 9.54209 5.40232 10.4032 4.74912 11.4662C4.09592 12.5292 3.75008 13.7524 3.75 15V16.5C3.75 16.6989 3.82902 16.8897 3.96967 17.0303C4.11032 17.171 4.30109 17.25 4.5 17.25C4.69891 17.25 4.88968 17.171 5.03033 17.0303C5.17098 16.8897 5.25 16.6989 5.25 16.5V15C5.25157 13.6081 5.8052 12.2737 6.78942 11.2894C7.77365 10.3052 9.1081 9.75157 10.5 9.75ZM11.9255 12.2543C11.9482 12.1585 11.9519 12.0591 11.9362 11.9619C11.9206 11.8647 11.8859 11.7715 11.8342 11.6876C11.7826 11.6038 11.7149 11.5309 11.635 11.4733C11.5552 11.4156 11.4648 11.3742 11.369 11.3514C10.818 11.2207 10.2446 11.2163 9.69173 11.3386C9.13884 11.4609 8.6208 11.7068 8.17645 12.0578C7.73209 12.4088 7.37294 12.8558 7.12591 13.3654C6.87887 13.8749 6.75036 14.4337 6.75 15V16.5C6.75 16.6989 6.82902 16.8897 6.96967 17.0303C7.11032 17.171 7.30109 17.25 7.5 17.25C7.69891 17.25 7.88968 17.171 8.03033 17.0303C8.17098 16.8897 8.25 16.6989 8.25 16.5V15C8.25041 14.6602 8.32769 14.3249 8.47605 14.0192C8.62441 13.7135 8.84 13.4453 9.10669 13.2347C9.37338 13.0241 9.68426 12.8766 10.016 12.8032C10.3478 12.7298 10.6919 12.7324 11.0225 12.8108C11.1184 12.8336 11.2177 12.8373 11.315 12.8217C11.4123 12.806 11.5055 12.7714 11.5893 12.7197C11.6732 12.668 11.746 12.6003 11.8037 12.5205C11.8614 12.4406 11.9028 12.3502 11.9255 12.2543Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(RainbowCloudSolid);
export default ForwardRef;
