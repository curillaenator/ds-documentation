import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PhoneSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.8098 14.8524L16.4188 12.9706C16.1895 12.8719 15.9392 12.8321 15.6907 12.855C15.4421 12.8778 15.2032 12.9625 14.9958 13.1013L12.648 14.6663C11.2131 13.9684 10.0518 12.8122 9.34753 11.3804L9.34771 11.3802L10.9072 8.99728C11.043 8.79041 11.1253 8.55312 11.1469 8.30663C11.1685 8.06014 11.1287 7.81214 11.031 7.58481L9.1474 3.19C9.01918 2.89168 8.79778 2.64292 8.51635 2.48096C8.23492 2.31901 7.9086 2.25257 7.58624 2.2916C6.31956 2.45446 5.15548 3.0729 4.31148 4.03138C3.46749 4.98986 3.00129 6.22283 3 7.49994C3 14.9439 9.05603 20.9999 16.5 20.9999C17.7771 20.9986 19.0101 20.5324 19.9686 19.6884C20.9271 18.8444 21.5455 17.6803 21.7083 16.4136C21.7473 16.0913 21.6808 15.765 21.5188 15.4836C21.3568 15.2021 21.1081 14.9807 20.8098 14.8524Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PhoneSolid);
export default ForwardRef;