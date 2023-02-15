import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SpeakerSlashSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.05499 3.24543C4.92118 3.09824 4.73437 3.01023 4.53567 3.00077C4.33697 2.99131 4.14265 3.06117 3.99545 3.19499C3.84826 3.3288 3.76025 3.51561 3.75079 3.71431C3.74133 3.91301 3.81119 4.10733 3.94501 4.25453L6.89566 7.50026H3C2.60232 7.50071 2.22105 7.65889 1.93984 7.9401C1.65864 8.2213 1.50045 8.60257 1.5 9.00026V15.0003C1.50045 15.3979 1.65864 15.7792 1.93984 16.0604C2.22105 16.3416 2.60232 16.4998 3 16.5003H7.24265L13.7896 21.5922C13.9003 21.6785 14.033 21.7312 14.1726 21.7456C14.3123 21.7601 14.4532 21.7351 14.5793 21.6734C14.7054 21.6117 14.8116 21.5159 14.8859 21.3968C14.9602 21.2777 14.9995 21.1401 14.9995 20.9997V16.4144L18.945 20.7545C19.0788 20.9017 19.2656 20.9897 19.4643 20.9992C19.663 21.0086 19.8574 20.9388 20.0046 20.805C20.1517 20.6712 20.2398 20.4844 20.2492 20.2857C20.2587 20.0869 20.1888 19.8926 20.055 19.7454L5.05499 3.24543ZM6.74725 15.0003H3V9.00026H6.74725V15.0003Z'
      fill='currentColor'
    />
    <path
      d='M13.695 10.5194C13.7968 10.6314 13.9302 10.71 14.0775 10.7448C14.2248 10.7796 14.3792 10.769 14.5204 10.7144C14.6616 10.6598 14.783 10.5638 14.8686 10.4389C14.9542 10.3141 15 10.1662 15 10.0148V3.00071C15 2.86031 14.9606 2.72273 14.8863 2.60363C14.8119 2.48452 14.7057 2.38867 14.5795 2.32699C14.4534 2.26531 14.3125 2.24027 14.1728 2.25472C14.0332 2.26917 13.9004 2.32253 13.7896 2.40873L10.0541 5.31397C9.9725 5.37741 9.90491 5.45702 9.85555 5.54781C9.80618 5.6386 9.77612 5.73862 9.76724 5.84158C9.75836 5.94454 9.77085 6.04822 9.80394 6.14612C9.83703 6.24403 9.88999 6.33403 9.95951 6.4105L13.695 10.5194Z'
      fill='currentColor'
    />
    <path
      d='M21.0509 6.69786C20.9102 6.55722 20.7194 6.47822 20.5205 6.47824C20.3216 6.47826 20.1309 6.55729 19.9902 6.69795C19.8496 6.83861 19.7706 7.02938 19.7706 7.22829C19.7706 7.4272 19.8497 7.61795 19.9903 7.75859C20.5475 8.31573 20.9894 8.97716 21.291 9.70511C21.5925 10.4331 21.7477 11.2133 21.7477 12.0012C21.7477 12.7891 21.5925 13.5693 21.291 14.2973C20.9894 15.0252 20.5475 15.6866 19.9903 16.2438C19.9205 16.3134 19.8651 16.3961 19.8272 16.4871C19.7894 16.5781 19.7699 16.6757 19.7698 16.7743C19.7697 16.8729 19.7891 16.9705 19.8268 17.0616C19.8644 17.1527 19.9197 17.2355 19.9894 17.3052C20.0591 17.375 20.1419 17.4302 20.233 17.4679C20.3241 17.5056 20.4217 17.525 20.5203 17.5249C20.6189 17.5249 20.7165 17.5054 20.8075 17.4676C20.8986 17.4297 20.9813 17.3743 21.0509 17.3045C21.7473 16.6081 22.2998 15.7813 22.6767 14.8713C23.0537 13.9614 23.2477 12.9861 23.2477 12.0012C23.2477 11.0163 23.0537 10.041 22.6767 9.13103C22.2998 8.22108 21.7473 7.39429 21.0509 6.69786Z'
      fill='currentColor'
    />
    <path
      d='M17.9977 12.001C17.9985 12.2966 17.9407 12.5894 17.8275 12.8625C17.7144 13.1356 17.5483 13.3835 17.3387 13.5919C17.2689 13.6616 17.2136 13.7442 17.1759 13.8352C17.1381 13.9263 17.1187 14.0238 17.1186 14.1223C17.1186 14.2209 17.138 14.3184 17.1756 14.4095C17.2133 14.5005 17.2686 14.5832 17.3382 14.6529C17.4079 14.7226 17.4906 14.7779 17.5816 14.8156C17.6727 14.8533 17.7702 14.8727 17.8688 14.8726C17.9673 14.8726 18.0649 14.8532 18.1559 14.8154C18.2469 14.7777 18.3296 14.7224 18.3992 14.6527C18.7474 14.3045 19.0237 13.8911 19.2122 13.4361C19.4006 12.9811 19.4977 12.4935 19.4977 12.001C19.4977 11.5085 19.4007 11.0208 19.2122 10.5659C19.0238 10.1109 18.7475 9.69746 18.3993 9.34924C18.2586 9.20857 18.0679 9.12955 17.8689 9.12955C17.67 9.12955 17.4792 9.20857 17.3386 9.34923C17.1979 9.4899 17.1189 9.68068 17.1189 9.87961C17.1189 10.0785 17.1979 10.2693 17.3386 10.41C17.5482 10.6184 17.7144 10.8664 17.8275 11.1395C17.9406 11.4126 17.9985 11.7054 17.9977 12.001Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(SpeakerSlashSolid);
export default ForwardRef;