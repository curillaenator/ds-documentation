import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HandPalm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.75 12.375V4.875C15.75 4.37772 15.5525 3.90081 15.2008 3.54917C14.8492 3.19754 14.3723 3 13.875 3C13.3777 3 12.9008 3.19754 12.5492 3.54917C12.1975 3.90081 12 4.37772 12 4.875V9.75V3.375C12 2.87772 11.8025 2.40081 11.4508 2.04917C11.0992 1.69754 10.6223 1.5 10.125 1.5C9.62772 1.5 9.15081 1.69754 8.79917 2.04917C8.44754 2.40081 8.25 2.87772 8.25 3.375V10.5V7.125C8.25 6.62772 8.05246 6.15081 7.70083 5.79917C7.34919 5.44754 6.87228 5.25 6.375 5.25C5.87772 5.25 5.40081 5.44754 5.04917 5.79917C4.69754 6.15081 4.5 6.62772 4.5 7.125V14.25C4.5 16.2391 5.29018 18.1468 6.6967 19.5533C8.10322 20.9598 10.0109 21.75 12 21.75C13.9891 21.75 15.8968 20.9598 17.3033 19.5533C18.7098 18.1468 19.5 16.2391 19.5 14.25V10.5C19.5 10.0027 19.3025 9.52581 18.9508 9.17417C18.5992 8.82254 18.1223 8.625 17.625 8.625C17.1277 8.625 16.6508 8.82254 16.2992 9.17417C15.9475 9.52581 15.75 10.0027 15.75 10.5V12.375ZM15.75 12.375C14.7554 12.375 13.8016 12.7701 13.0983 13.4733C12.3951 14.1766 12 15.1304 12 16.125'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(HandPalm);
export default ForwardRef;
