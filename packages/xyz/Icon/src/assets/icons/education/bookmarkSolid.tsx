import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const BookmarkSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.2477 3H6.74771C6.35003 3.00045 5.96876 3.15864 5.68755 3.43984C5.40635 3.72105 5.24817 4.10231 5.24771 4.5V21C5.24772 21.1339 5.28356 21.2653 5.35151 21.3807C5.41947 21.496 5.51706 21.5911 5.63415 21.656C5.75125 21.7209 5.88358 21.7533 6.01741 21.7497C6.15125 21.7462 6.2817 21.707 6.39523 21.636L11.9971 18.1344L17.6002 21.636C17.7138 21.707 17.8442 21.7462 17.978 21.7497C18.1119 21.7533 18.2442 21.7209 18.3613 21.656C18.4784 21.5911 18.576 21.496 18.6439 21.3807C18.7119 21.2653 18.7477 21.1339 18.7477 21V4.5C18.7473 4.10231 18.5891 3.72105 18.3079 3.43984C18.0267 3.15864 17.6454 3.00045 17.2477 3ZM12.3945 16.614C12.2753 16.5395 12.1376 16.5 11.997 16.5C11.8564 16.5 11.7187 16.5395 11.5995 16.614L6.74771 19.6468V16.9157L11.9971 13.6344L17.2477 16.9157V19.6469L12.3945 16.614Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(BookmarkSolid);
export default ForwardRef;
