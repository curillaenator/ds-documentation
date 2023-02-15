import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const VideoCamera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.25 10.5L22.5 7.5V16.5L17.25 13.5M2.25 5.625H14.25C15.0457 5.625 15.8087 5.94107 16.3713 6.50368C16.9339 7.06629 17.25 7.82935 17.25 8.625V17.625C17.25 17.8239 17.171 18.0147 17.0303 18.1553C16.8897 18.296 16.6989 18.375 16.5 18.375H4.5C3.70435 18.375 2.94129 18.0589 2.37868 17.4963C1.81607 16.9337 1.5 16.1706 1.5 15.375V6.375C1.5 6.17609 1.57902 5.98532 1.71967 5.84467C1.86032 5.70402 2.05109 5.625 2.25 5.625Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(VideoCamera);
export default ForwardRef;
