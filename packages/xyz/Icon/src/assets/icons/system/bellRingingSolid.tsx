import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BellRingingSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.4819 10.4998C19.4891 8.52155 18.7116 6.62111 17.3198 5.21521C15.928 3.80931 14.0355 3.01269 12.0572 3.00002C12.0381 2.99993 12.0191 2.99983 12 2.99983C10.0134 3.00242 8.10927 3.79404 6.70636 5.20055C5.30345 6.60707 4.51672 8.51327 4.51923 10.4998C4.51923 13.7188 3.85557 15.5361 3.29893 16.4938C3.16597 16.7216 3.09542 16.9804 3.09439 17.2441C3.09336 17.5078 3.16189 17.7672 3.29307 17.996C3.42424 18.2248 3.61343 18.4149 3.84155 18.5473C4.06967 18.6796 4.32865 18.7495 4.59238 18.7498H8.25019C8.25019 19.7444 8.64528 20.6982 9.34854 21.4015C10.0518 22.1047 11.0056 22.4998 12.0002 22.4998C12.9948 22.4998 13.9486 22.1047 14.6518 21.4015C15.3551 20.6982 15.7502 19.7444 15.7502 18.7498H19.408C19.6717 18.7495 19.9306 18.6797 20.1587 18.5473C20.3868 18.415 20.576 18.2249 20.7072 17.9961C20.8384 17.7674 20.9069 17.5081 20.9059 17.2444C20.9049 16.9807 20.8344 16.7219 20.7015 16.4942C20.1452 15.5364 19.4819 13.719 19.4819 10.4998ZM12.0002 20.9998C11.4037 20.9992 10.8318 20.7619 10.41 20.3401C9.98814 19.9183 9.75087 19.3464 9.75019 18.7498H14.2502C14.2495 19.3464 14.0122 19.9183 13.5904 20.3401C13.1686 20.7619 12.5967 20.9992 12.0002 20.9998ZM21.0832 6.86986C20.9949 6.91345 20.8988 6.93919 20.8005 6.94562C20.7022 6.95205 20.6036 6.93904 20.5103 6.90734C20.4171 6.87563 20.331 6.82585 20.2569 6.76084C20.1829 6.69582 20.1225 6.61686 20.079 6.52846C19.3423 5.03363 18.2063 3.77187 16.7967 2.88292C16.7133 2.83044 16.6409 2.76202 16.5839 2.68156C16.5269 2.60111 16.4864 2.5102 16.4645 2.41405C16.4427 2.31789 16.4401 2.21838 16.4567 2.1212C16.4734 2.02402 16.5091 1.93108 16.5617 1.8477C16.6143 1.76432 16.6829 1.69213 16.7635 1.63528C16.844 1.57842 16.935 1.53801 17.0312 1.51636C17.1274 1.4947 17.2269 1.49223 17.324 1.50908C17.4212 1.52593 17.5141 1.56177 17.5974 1.61455C19.241 2.65114 20.5657 4.12249 21.4246 5.86562C21.4681 5.95397 21.4938 6.05004 21.5002 6.14832C21.5066 6.24661 21.4936 6.34519 21.4619 6.43845C21.4302 6.5317 21.3805 6.6178 21.3155 6.69182C21.2505 6.76584 21.1716 6.82634 21.0832 6.86986ZM3.24802 6.94722C3.12061 6.94706 2.99534 6.91445 2.88401 6.85248C2.77269 6.7905 2.67898 6.7012 2.61172 6.59299C2.54446 6.48478 2.50587 6.36122 2.49957 6.23396C2.49328 6.1067 2.5195 5.97994 2.57575 5.86562C3.43467 4.12249 4.75934 2.65114 6.40302 1.61455C6.48631 1.56188 6.57915 1.52613 6.67626 1.50936C6.77336 1.49259 6.87282 1.49512 6.96895 1.51681C7.06507 1.53849 7.15598 1.57891 7.23648 1.63575C7.31698 1.69259 7.38549 1.76474 7.43809 1.84807C7.49068 1.9314 7.52635 2.02428 7.54303 2.1214C7.55972 2.21852 7.5571 2.31797 7.53533 2.41408C7.51355 2.51019 7.47305 2.60106 7.41614 2.68151C7.35923 2.76195 7.28702 2.8304 7.20365 2.88292C5.79407 3.77187 4.65804 5.03363 3.92139 6.52846C3.85948 6.65419 3.76357 6.76007 3.64456 6.83408C3.52554 6.9081 3.38818 6.94729 3.24802 6.94722Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(BellRingingSolid);
export default ForwardRef;