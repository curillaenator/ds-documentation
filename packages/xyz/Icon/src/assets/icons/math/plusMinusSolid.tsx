import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PlusMinusSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.2801 4.71969C19.1395 4.57904 18.9487 4.50003 18.7498 4.50003C18.5509 4.50003 18.3601 4.57904 18.2195 4.71969L4.71948 18.2197C4.64977 18.2893 4.59445 18.372 4.55671 18.463C4.51896 18.554 4.49951 18.6516 4.49948 18.7501C4.49945 18.8486 4.51883 18.9462 4.55653 19.0372C4.59422 19.1283 4.64948 19.211 4.71915 19.2807C4.78882 19.3503 4.87153 19.4056 4.96257 19.4433C5.0536 19.481 5.15117 19.5004 5.2497 19.5003C5.34823 19.5003 5.44579 19.4809 5.5368 19.4431C5.62781 19.4054 5.71049 19.35 5.78012 19.2803L19.2801 5.78033C19.3498 5.71069 19.405 5.62801 19.4427 5.53702C19.4804 5.44603 19.4998 5.3485 19.4998 5.25001C19.4998 5.15152 19.4804 5.05399 19.4427 4.963C19.405 4.872 19.3498 4.78933 19.2801 4.71969Z'
      fill='currentColor'
    />
    <path
      d='M6 10.5C6 10.6989 6.07902 10.8897 6.21967 11.0303C6.36032 11.171 6.55109 11.25 6.75 11.25C6.94891 11.25 7.13968 11.171 7.28033 11.0303C7.42098 10.8897 7.5 10.6989 7.5 10.5V7.5H10.5C10.6989 7.5 10.8897 7.42098 11.0303 7.28033C11.171 7.13968 11.25 6.94891 11.25 6.75C11.25 6.55109 11.171 6.36032 11.0303 6.21967C10.8897 6.07902 10.6989 6 10.5 6H7.5V3C7.5 2.80109 7.42098 2.61032 7.28033 2.46967C7.13968 2.32902 6.94891 2.25 6.75 2.25C6.55109 2.25 6.36032 2.32902 6.21967 2.46967C6.07902 2.61032 6 2.80109 6 3V6H3C2.80109 6 2.61032 6.07902 2.46967 6.21967C2.32902 6.36032 2.25 6.55109 2.25 6.75C2.25 6.94891 2.32902 7.13968 2.46967 7.28033C2.61032 7.42098 2.80109 7.5 3 7.5H6V10.5Z'
      fill='currentColor'
    />
    <path
      d='M21 16.5H13.5C13.3011 16.5 13.1103 16.579 12.9697 16.7197C12.829 16.8603 12.75 17.0511 12.75 17.25C12.75 17.4489 12.829 17.6397 12.9697 17.7803C13.1103 17.921 13.3011 18 13.5 18H21C21.1989 18 21.3897 17.921 21.5303 17.7803C21.671 17.6397 21.75 17.4489 21.75 17.25C21.75 17.0511 21.671 16.8603 21.5303 16.7197C21.3897 16.579 21.1989 16.5 21 16.5Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PlusMinusSolid);
export default ForwardRef;
