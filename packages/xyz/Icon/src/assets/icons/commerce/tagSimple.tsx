import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TagSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.2226 18.416L22.5 12L18.2226 5.58397C18.1542 5.48124 18.0614 5.397 17.9525 5.33874C17.8436 5.28048 17.7221 5.25 17.5986 5.25H3.75C3.55109 5.25 3.36032 5.32902 3.21967 5.46967C3.07902 5.61032 3 5.80109 3 6V18C3 18.1989 3.07902 18.3897 3.21967 18.5303C3.36032 18.671 3.55109 18.75 3.75 18.75H17.5986C17.7221 18.75 17.8436 18.7195 17.9525 18.6613C18.0614 18.603 18.1542 18.5188 18.2226 18.416V18.416Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(TagSimple);
export default ForwardRef;