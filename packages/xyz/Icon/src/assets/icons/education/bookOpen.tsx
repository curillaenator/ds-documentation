import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BookOpen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 8.25C12 7.45435 12.3161 6.69129 12.8787 6.12868C13.4413 5.56607 14.2044 5.25 15 5.25H21C21.1989 5.25 21.3897 5.32902 21.5303 5.46967C21.671 5.61032 21.75 5.80109 21.75 6V18C21.75 18.1989 21.671 18.3897 21.5303 18.5303C21.3897 18.671 21.1989 18.75 21 18.75H15C14.2044 18.75 13.4413 19.0661 12.8787 19.6287C12.3161 20.1913 12 20.9544 12 21.75M12 8.25V21.75M12 8.25C12 7.45435 11.6839 6.69129 11.1213 6.12868C10.5587 5.56607 9.79565 5.25 9 5.25H3C2.80109 5.25 2.61032 5.32902 2.46967 5.46967C2.32902 5.61032 2.25 5.80109 2.25 6V18C2.25 18.1989 2.32902 18.3897 2.46967 18.5303C2.61032 18.671 2.80109 18.75 3 18.75H9C9.79565 18.75 10.5587 19.0661 11.1213 19.6287C11.6839 20.1913 12 20.9544 12 21.75'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(BookOpen);
export default ForwardRef;