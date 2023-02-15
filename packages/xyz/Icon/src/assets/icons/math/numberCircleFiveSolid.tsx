import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberCircleFiveSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7471 9.41504 20.7189 6.93679 18.8911 5.10894C17.0632 3.28109 14.585 2.25293 12 2.25ZM11.6139 10.8752C12.1685 10.8765 12.7143 11.0144 13.2029 11.2768C13.6915 11.5392 14.108 11.918 14.4153 12.3796C14.7227 12.8413 14.9116 13.3716 14.9653 13.9236C15.0189 14.4756 14.9357 15.0324 14.723 15.5446C14.5102 16.0568 14.1746 16.5086 13.7456 16.8602C13.3167 17.2118 12.8077 17.4523 12.2637 17.5603C11.7197 17.6684 11.1575 17.6407 10.6267 17.4798C10.096 17.3188 9.61308 17.0295 9.22074 16.6375C9.15086 16.568 9.09536 16.4855 9.05741 16.3945C9.01946 16.3036 8.99981 16.206 8.99957 16.1075C8.99933 16.009 9.01852 15.9113 9.05603 15.8202C9.09354 15.7291 9.14864 15.6462 9.21818 15.5764C9.28772 15.5066 9.37034 15.4512 9.46132 15.4133C9.55229 15.3754 9.64984 15.3559 9.74838 15.3557C9.84692 15.3556 9.94453 15.3748 10.0356 15.4124C10.1267 15.45 10.2095 15.5052 10.2793 15.5748C10.6341 15.9272 11.1139 16.125 11.614 16.125C12.1142 16.125 12.594 15.9271 12.9488 15.5747C13.1235 15.4011 13.2621 15.1947 13.3567 14.9674C13.4513 14.74 13.5 14.4962 13.5 14.25C13.5 14.0037 13.4513 13.7599 13.3567 13.5326C13.262 13.3052 13.1234 13.0989 12.9487 12.9253C12.5938 12.5729 12.114 12.3752 11.6139 12.3752C11.1138 12.3752 10.634 12.573 10.2792 12.9254C10.1669 13.0373 10.022 13.1107 9.86537 13.1351C9.70875 13.1594 9.54843 13.1336 9.40742 13.0612C9.26641 12.9888 9.15196 12.8736 9.08051 12.7321C9.00905 12.5906 8.98427 12.4301 9.00971 12.2737L9.74424 7.7547C9.77281 7.57895 9.86298 7.4191 9.9986 7.30373C10.1342 7.18837 10.3065 7.12501 10.4845 7.125H14.25C14.4489 7.125 14.6397 7.20402 14.7803 7.34467C14.921 7.48532 15 7.67609 15 7.875C15 8.07391 14.921 8.26468 14.7803 8.40533C14.6397 8.54598 14.4489 8.625 14.25 8.625H11.1225L10.7383 10.9885C11.024 10.913 11.3184 10.8749 11.6139 10.8752Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberCircleFiveSolid);
export default ForwardRef;