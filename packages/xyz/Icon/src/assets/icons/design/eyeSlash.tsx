import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const EyeSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4.5 3.75L19.5 20.25M14.5225 14.7752C13.7865 15.4441 12.815 15.7933 11.8216 15.7459C10.8283 15.6986 9.89436 15.2586 9.22538 14.5227C8.5564 13.7868 8.20713 12.8153 8.25439 11.822C8.30165 10.8286 8.74157 9.89463 9.47739 9.22559M6.93698 6.43103C3.11486 8.36655 1.5 12.0004 1.5 12.0004C1.5 12.0004 4.5 18.7497 12 18.7497C13.7572 18.7636 15.4926 18.3589 17.0623 17.5689M19.5571 15.8529C21.601 14.0222 22.4999 11.9998 22.4999 11.9998C22.4999 11.9998 19.4999 5.2491 11.9999 5.2491C11.3504 5.24804 10.7018 5.30085 10.061 5.40699M12.7058 8.31658C13.5028 8.46963 14.2287 8.87697 14.7747 9.47752C15.3206 10.0781 15.6571 10.8394 15.7337 11.6474'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(EyeSlash);
export default ForwardRef;
