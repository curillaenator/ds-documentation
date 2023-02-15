import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CurrencyCircleDollarSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7471 9.41504 20.7189 6.93679 18.8911 5.10894C17.0632 3.28109 14.585 2.25293 12 2.25ZM13.125 16.5H12.75V17.25C12.75 17.4489 12.671 17.6397 12.5303 17.7803C12.3897 17.921 12.1989 18 12 18C11.8011 18 11.6103 17.921 11.4697 17.7803C11.329 17.6397 11.25 17.4489 11.25 17.25V16.5H9.75C9.55109 16.5 9.36033 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75C9 15.5511 9.07902 15.3603 9.21967 15.2197C9.36033 15.079 9.55109 15 9.75 15H13.125C13.4234 15 13.7095 14.8815 13.9205 14.6705C14.1315 14.4595 14.25 14.1734 14.25 13.875C14.25 13.5766 14.1315 13.2905 13.9205 13.0795C13.7095 12.8685 13.4234 12.75 13.125 12.75H10.875C10.1788 12.75 9.51113 12.4734 9.01885 11.9812C8.52657 11.4889 8.25 10.8212 8.25 10.125C8.25 9.42881 8.52657 8.76113 9.01885 8.26884C9.51113 7.77656 10.1788 7.5 10.875 7.5H11.25V6.75C11.25 6.55109 11.329 6.36032 11.4697 6.21967C11.6103 6.07902 11.8011 6 12 6C12.1989 6 12.3897 6.07902 12.5303 6.21967C12.671 6.36032 12.75 6.55109 12.75 6.75V7.5H14.25C14.4489 7.5 14.6397 7.57902 14.7803 7.71967C14.921 7.86032 15 8.05109 15 8.25C15 8.44891 14.921 8.63968 14.7803 8.78033C14.6397 8.92098 14.4489 9 14.25 9H10.875C10.5766 9 10.2905 9.11853 10.0795 9.3295C9.86853 9.54048 9.75 9.82663 9.75 10.125C9.75 10.4234 9.86853 10.7095 10.0795 10.9205C10.2905 11.1315 10.5766 11.25 10.875 11.25H13.125C13.8212 11.25 14.4889 11.5266 14.9812 12.0188C15.4734 12.5111 15.75 13.1788 15.75 13.875C15.75 14.5712 15.4734 15.2389 14.9812 15.7312C14.4889 16.2234 13.8212 16.5 13.125 16.5Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CurrencyCircleDollarSolid);
export default ForwardRef;
