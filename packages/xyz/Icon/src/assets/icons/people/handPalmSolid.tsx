import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HandPalmSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.625 7.87501C17.2358 7.87463 16.8514 7.96134 16.5 8.12879V4.87501C16.5001 4.42003 16.382 3.97284 16.1571 3.57731C15.9323 3.18178 15.6084 2.85151 15.2174 2.6189C14.8264 2.38629 14.3816 2.25934 13.9267 2.25051C13.4718 2.24167 13.0225 2.35125 12.6227 2.5685C12.4306 1.97331 12.0322 1.46629 11.4994 1.13875C10.9666 0.811207 10.3344 0.684676 9.71659 0.781944C9.09877 0.879212 8.53599 1.19389 8.12961 1.66929C7.72323 2.1447 7.49995 2.74958 7.5 3.37501V4.75379C7.09995 4.56378 6.65832 4.47811 6.21624 4.50476C5.77416 4.53141 5.34602 4.66952 4.97169 4.90622C4.59737 5.14291 4.28904 5.47049 4.07542 5.85845C3.86181 6.24641 3.74986 6.68213 3.75 7.12501V14.25C3.75 16.438 4.61919 18.5365 6.16637 20.0836C7.71354 21.6308 9.81196 22.5 12 22.5C14.188 22.5 16.2865 21.6308 17.8336 20.0836C19.3808 18.5365 20.25 16.438 20.25 14.25V10.5C20.2492 9.80405 19.9724 9.13683 19.4803 8.64471C18.9882 8.1526 18.321 7.87579 17.625 7.87501ZM18.75 14.25C18.75 16.0402 18.0388 17.7571 16.773 19.023C15.5071 20.2888 13.7902 21 12 21C10.2098 21 8.4929 20.2888 7.22703 19.023C5.96116 17.7571 5.25 16.0402 5.25 14.25V7.12501C5.25 6.82664 5.36853 6.54049 5.5795 6.32951C5.79048 6.11853 6.07663 6.00001 6.375 6.00001C6.67337 6.00001 6.95952 6.11853 7.1705 6.32951C7.38147 6.54049 7.5 6.82664 7.5 7.12501V10.5C7.5 10.6989 7.57902 10.8897 7.71967 11.0303C7.86032 11.171 8.05109 11.25 8.25 11.25C8.44891 11.25 8.63968 11.171 8.78033 11.0303C8.92098 10.8897 9 10.6989 9 10.5V3.37501C9 3.07664 9.11853 2.79049 9.3295 2.57951C9.54048 2.36853 9.82663 2.25001 10.125 2.25001C10.4234 2.25001 10.7095 2.36853 10.9205 2.57951C11.1315 2.79049 11.25 3.07664 11.25 3.37501V9.75001C11.25 9.94892 11.329 10.1397 11.4697 10.2803C11.6103 10.421 11.8011 10.5 12 10.5C12.1989 10.5 12.3897 10.421 12.5303 10.2803C12.671 10.1397 12.75 9.94892 12.75 9.75001V4.87501C12.75 4.57664 12.8685 4.29049 13.0795 4.07951C13.2905 3.86853 13.5766 3.75001 13.875 3.75001C14.1734 3.75001 14.4595 3.86853 14.6705 4.07951C14.8815 4.29049 15 4.57664 15 4.87501V11.6875C13.952 11.8661 13.0009 12.4095 12.3147 13.2215C11.6285 14.0335 11.2514 15.0619 11.25 16.125C11.25 16.3239 11.329 16.5147 11.4697 16.6553C11.6103 16.796 11.8011 16.875 12 16.875C12.1989 16.875 12.3897 16.796 12.5303 16.6553C12.671 16.5147 12.75 16.3239 12.75 16.125C12.7509 15.3296 13.0673 14.5671 13.6297 14.0047C14.1921 13.4423 14.9546 13.1259 15.75 13.125C15.9489 13.125 16.1397 13.046 16.2803 12.9053C16.421 12.7647 16.5 12.5739 16.5 12.375V10.5C16.5 10.2016 16.6185 9.91549 16.8295 9.70451C17.0405 9.49353 17.3266 9.37501 17.625 9.37501C17.9234 9.37501 18.2095 9.49353 18.4205 9.70451C18.6315 9.91549 18.75 10.2016 18.75 10.5V14.25Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(HandPalmSolid);
export default ForwardRef;