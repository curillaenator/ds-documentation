import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChatCircleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.0002 2.25031C10.3067 2.2507 8.64252 2.69208 7.17144 3.53098C5.70036 4.36989 4.47309 5.57741 3.61042 7.03468C2.74775 8.49196 2.27942 10.1488 2.25154 11.842C2.22365 13.5352 2.63716 15.2066 3.45138 16.6915L2.64938 19.4959C2.57603 19.7531 2.57276 20.0253 2.63991 20.2842C2.70707 20.5431 2.84221 20.7793 3.03133 20.9684C3.22046 21.1576 3.45671 21.2927 3.71561 21.3599C3.97451 21.427 4.24665 21.4237 4.50386 21.3504L7.30829 20.5491C8.61161 21.2644 10.0612 21.6721 11.5463 21.7412C13.0314 21.8103 14.5126 21.5389 15.8767 20.9478C17.2408 20.3566 18.4516 19.4613 19.4167 18.3304C20.3817 17.1995 21.0753 15.8629 21.4446 14.4228C21.8138 12.9827 21.8489 11.4773 21.5471 10.0215C21.2453 8.56579 20.6146 7.19835 19.7032 6.02376C18.7919 4.84916 17.624 3.89851 16.2889 3.24449C14.9538 2.59048 13.4868 2.25041 12.0002 2.25031Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ChatCircleSolid);
export default ForwardRef;
