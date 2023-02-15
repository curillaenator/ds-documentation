import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChatTeardropDots = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.36 12H12.3612M7.55977 12H7.56097M17.1598 12H17.161M12.375 20.25H4.46875C4.27813 20.25 4.09531 20.1743 3.96052 20.0395C3.82573 19.9047 3.75 19.7219 3.75 19.5312V11.625C3.75 10.4923 3.97309 9.37077 4.40654 8.32434C4.83998 7.27791 5.4753 6.3271 6.2762 5.5262C7.0771 4.7253 8.02791 4.08998 9.07435 3.65654C10.1208 3.22309 11.2423 3 12.375 3C13.5076 3 14.6292 3.22309 15.6756 3.65654C16.7221 4.08999 17.6729 4.7253 18.4738 5.5262C19.2747 6.32711 19.91 7.27792 20.3435 8.32436C20.7769 9.37079 21 10.4923 21 11.625C21 13.9125 20.0913 16.1063 18.4738 17.7238C16.8563 19.3413 14.6625 20.25 12.375 20.25Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ChatTeardropDots);
export default ForwardRef;
