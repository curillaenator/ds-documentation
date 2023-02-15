import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Copyright = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.0001 14.25C14.5278 14.8795 13.8694 15.3445 13.1182 15.579C12.3669 15.8136 11.5609 15.8058 10.8143 15.5569C10.0678 15.3079 9.4184 14.8304 8.95826 14.1919C8.49812 13.5535 8.25052 12.7864 8.25051 11.9994C8.25051 11.2124 8.49811 10.4454 8.95824 9.80692C9.41837 9.16845 10.0677 8.69093 10.8143 8.44198C11.5609 8.19303 12.3669 8.18527 13.1181 8.41981C13.8694 8.65435 14.5278 9.11929 15.0001 9.74879M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Copyright);
export default ForwardRef;
