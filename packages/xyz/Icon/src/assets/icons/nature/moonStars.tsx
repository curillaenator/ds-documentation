import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MoonStars = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 10.5V6M22.5 8.25H18M15.75 2.25V5.25M17.25 3.75H14.25M20.3121 14.3111C18.8398 14.7202 17.2853 14.731 15.8076 14.3423C14.3298 13.9537 12.9817 13.1795 11.9012 12.099C10.8207 11.0185 10.0466 9.67048 9.6579 8.19269C9.26923 6.7149 9.28 5.16041 9.6891 3.68815C8.23698 4.09211 6.91629 4.86958 5.85813 5.94297C4.79998 7.01636 4.04155 8.34827 3.65838 9.80602C3.27522 11.2638 3.2807 12.7965 3.67428 14.2514C4.06787 15.7064 4.83581 17.0329 5.90161 18.0987C6.96741 19.1645 8.29387 19.9324 9.74885 20.326C11.2038 20.7195 12.7365 20.725 14.1943 20.3418C15.652 19.9586 16.9839 19.2002 18.0573 18.142C19.1307 17.0839 19.9081 15.7632 20.3121 14.3111Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(MoonStars);
export default ForwardRef;
