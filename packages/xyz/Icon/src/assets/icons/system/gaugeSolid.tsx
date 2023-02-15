import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const GaugeSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.163 13.589C19.9709 13.6405 19.7662 13.6136 19.5939 13.5141C19.4216 13.4147 19.2959 13.2509 19.2444 13.0587C19.1929 12.8666 19.2199 12.6619 19.3193 12.4896C19.4188 12.3173 19.5826 12.1916 19.7747 12.1401L21.9268 11.5635C21.2519 9.62228 20.0231 7.92131 18.3922 6.6707C16.7613 5.42009 14.7998 4.67461 12.75 4.52637V6.74986C12.75 6.94878 12.671 7.13954 12.5303 7.28019C12.3897 7.42085 12.1989 7.49986 12 7.49986C11.8011 7.49986 11.6103 7.42085 11.4697 7.28019C11.329 7.13954 11.25 6.94878 11.25 6.74986V4.52747C7.01752 4.83119 3.46774 7.68626 2.10169 11.5711L4.22525 12.1401C4.32049 12.1655 4.40979 12.2094 4.48805 12.2694C4.5663 12.3293 4.63197 12.4041 4.68131 12.4894C4.73064 12.5748 4.76267 12.669 4.77556 12.7667C4.78845 12.8644 4.78196 12.9637 4.75644 13.059C4.73093 13.1542 4.6869 13.2434 4.62687 13.3216C4.56684 13.3998 4.49198 13.4654 4.40659 13.5146C4.32119 13.5638 4.22693 13.5957 4.12919 13.6085C4.03146 13.6213 3.93216 13.6147 3.83698 13.589L1.70526 13.0178C1.56857 13.7054 1.49982 14.4047 1.5 15.1057V17.2499C1.50046 17.6475 1.65864 18.0288 1.93984 18.31C2.22105 18.5912 2.60232 18.7494 3 18.7499H8.17717L15.5141 9.18819C15.6353 9.03052 15.814 8.92741 16.0112 8.90152C16.2083 8.87563 16.4077 8.92908 16.5654 9.05012C16.7232 9.17116 16.8264 9.34988 16.8524 9.54701C16.8784 9.74413 16.8251 9.94351 16.7042 10.1013L10.0679 18.7499H21C21.3977 18.7494 21.779 18.5912 22.0602 18.31C22.3414 18.0288 22.4995 17.6475 22.5 17.2499V14.9999C22.5001 14.3332 22.4375 13.6679 22.3128 13.013L20.163 13.589Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(GaugeSolid);
export default ForwardRef;