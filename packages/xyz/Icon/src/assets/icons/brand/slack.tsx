import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Slack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 12V9.75001C12 9.15327 11.763 8.58097 11.341 8.15902C10.919 7.73706 10.3467 7.50001 9.75 7.50001M12 12H5.25M12 12L14.25 12C14.8467 12 15.419 11.763 15.841 11.341C16.263 10.919 16.5 10.3467 16.5 9.75001M12 12L12 5.25001M12 12L12 14.25C12 14.8467 12.2371 15.419 12.659 15.841C13.081 16.263 13.6533 16.5 14.25 16.5M12 12H18.75M12 12H9.75C9.15327 12 8.58097 12.2371 8.15901 12.659C7.73706 13.081 7.5 13.6533 7.5 14.25M12 12L12 18.75M5.25 12C4.65326 12 4.08097 11.763 3.65901 11.341C3.23705 10.919 3 10.3467 3 9.75001C3 9.15327 3.23705 8.58097 3.65901 8.15902C4.08097 7.73706 4.65326 7.50001 5.25 7.50001H9.75M5.25 12C4.65326 12 4.08097 12.2371 3.65901 12.659C3.23706 13.081 3 13.6533 3 14.25C3 14.8467 3.23706 15.419 3.65901 15.841C4.08097 16.263 4.65327 16.5 5.25 16.5C5.84674 16.5 6.41904 16.263 6.84099 15.841C7.26295 15.419 7.5 14.8467 7.5 14.25M5.25 12H7.5V14.25M9.75 7.50001H12V5.25001M9.75 7.50001C9.15327 7.50001 8.58097 7.26296 8.15901 6.841C7.73706 6.41904 7.5 5.84674 7.5 5.25001C7.5 4.65327 7.73706 4.08097 8.15901 3.65902C8.58097 3.23706 9.15327 3.00001 9.75 3.00001C10.3467 3.00001 10.919 3.23706 11.341 3.65902C11.763 4.08097 12 4.65327 12 5.25001M12 5.25001C12 4.65327 12.2371 4.08097 12.659 3.65901C13.081 3.23705 13.6533 3 14.25 3C14.8467 3 15.419 3.23705 15.841 3.65901C16.263 4.08097 16.5 4.65326 16.5 5.25V9.75001M16.5 9.75001V12H18.75M16.5 9.75001C16.5 9.15327 16.7371 8.58097 17.159 8.15902C17.581 7.73706 18.1533 7.50001 18.75 7.50001C19.3467 7.50001 19.919 7.73706 20.341 8.15902C20.763 8.58097 21 9.15327 21 9.75001C21 10.3467 20.763 10.919 20.341 11.341C19.919 11.763 19.3467 12 18.75 12M18.75 12C19.3467 12 19.919 12.2371 20.341 12.659C20.763 13.081 21 13.6533 21 14.25C21 14.8467 20.763 15.419 20.341 15.841C19.919 16.263 19.3467 16.5 18.75 16.5H14.25M14.25 16.5H12V18.75M14.25 16.5C14.8467 16.5 15.419 16.7371 15.841 17.159C16.263 17.581 16.5 18.1533 16.5 18.75C16.5 19.3467 16.263 19.919 15.841 20.341C15.419 20.763 14.8467 21 14.25 21C13.6533 21 13.081 20.763 12.659 20.341C12.2371 19.919 12 19.3467 12 18.75M12 18.75C12 19.3467 11.763 19.919 11.341 20.341C10.919 20.763 10.3467 21 9.75 21C9.15327 21 8.58097 20.763 8.15901 20.341C7.73706 19.919 7.5 19.3467 7.5 18.75V14.25'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Slack);
export default ForwardRef;
