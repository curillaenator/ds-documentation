import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SignOutSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.7804 12.5303L16.844 16.4678C16.7743 16.5374 16.6917 16.5927 16.6007 16.6304C16.5097 16.6681 16.4121 16.6875 16.3137 16.6875C16.2152 16.6875 16.1176 16.6681 16.0266 16.6305C15.9356 16.5928 15.8529 16.5375 15.7833 16.4679C15.7136 16.3983 15.6584 16.3156 15.6207 16.2246C15.583 16.1336 15.5635 16.0361 15.5635 15.9376C15.5635 15.8391 15.5829 15.7416 15.6206 15.6506C15.6583 15.5596 15.7135 15.4769 15.7831 15.4072L18.4397 12.75H9.75C9.55109 12.75 9.36032 12.671 9.21967 12.5303C9.07902 12.3897 9 12.1989 9 12C9 11.8011 9.07902 11.6103 9.21967 11.4697C9.36032 11.329 9.55109 11.25 9.75 11.25H18.4397L15.7831 8.59277C15.6425 8.4521 15.5635 8.26132 15.5635 8.0624C15.5636 7.86348 15.6426 7.67272 15.7833 7.53209C15.924 7.39145 16.1147 7.31246 16.3137 7.31248C16.5126 7.31251 16.7033 7.39155 16.844 7.53223L20.7804 11.4697C20.921 11.6104 21 11.8011 21 12C21 12.1989 20.921 12.3896 20.7804 12.5303ZM9.75 19.5H4.5V4.5H9.75C9.94891 4.5 10.1397 4.42098 10.2803 4.28033C10.421 4.13968 10.5 3.94891 10.5 3.75C10.5 3.55109 10.421 3.36032 10.2803 3.21967C10.1397 3.07902 9.94891 3 9.75 3H4.5C4.10231 3.00045 3.72105 3.15864 3.43984 3.43984C3.15864 3.72105 3.00045 4.10231 3 4.5V19.5C3.00045 19.8977 3.15864 20.279 3.43984 20.5602C3.72105 20.8414 4.10231 20.9995 4.5 21H9.75C9.94891 21 10.1397 20.921 10.2803 20.7803C10.421 20.6397 10.5 20.4489 10.5 20.25C10.5 20.0511 10.421 19.8603 10.2803 19.7197C10.1397 19.579 9.94891 19.5 9.75 19.5Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(SignOutSolid);
export default ForwardRef;
