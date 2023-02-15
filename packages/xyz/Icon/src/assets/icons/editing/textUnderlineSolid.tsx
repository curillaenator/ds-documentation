import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TextUnderlineSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21 20.25C21 20.3485 20.9806 20.446 20.9429 20.537C20.9052 20.628 20.85 20.7107 20.7803 20.7803C20.7107 20.85 20.628 20.9052 20.537 20.9429C20.446 20.9806 20.3485 21 20.25 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25C3 20.0511 3.07902 19.8603 3.21967 19.7197C3.36032 19.579 3.55109 19.5 3.75 19.5H20.25C20.3485 19.5 20.446 19.5194 20.537 19.5571C20.628 19.5948 20.7107 19.65 20.7803 19.7197C20.85 19.7893 20.9052 19.872 20.9429 19.963C20.9806 20.054 21 20.1515 21 20.25ZM12 18C13.7896 17.998 15.5053 17.2862 16.7707 16.0207C18.0362 14.7553 18.748 13.0396 18.75 11.25V5.25C18.75 5.05109 18.671 4.86032 18.5303 4.71967C18.3897 4.57902 18.1989 4.5 18 4.5C17.8011 4.5 17.6103 4.57902 17.4697 4.71967C17.329 4.86032 17.25 5.05109 17.25 5.25V11.25C17.25 12.6424 16.6969 13.9777 15.7123 14.9623C14.7277 15.9469 13.3924 16.5 12 16.5C10.6076 16.5 9.27226 15.9469 8.28769 14.9623C7.30312 13.9777 6.75 12.6424 6.75 11.25V5.25C6.75 5.05109 6.67098 4.86032 6.53033 4.71967C6.38968 4.57902 6.19891 4.5 6 4.5C5.80109 4.5 5.61032 4.57902 5.46967 4.71967C5.32902 4.86032 5.25 5.05109 5.25 5.25V11.25C5.25202 13.0396 5.96383 14.7553 7.22926 16.0207C8.49469 17.2862 10.2104 17.998 12 18Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(TextUnderlineSolid);
export default ForwardRef;
