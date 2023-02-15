import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FatLeftSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M10.7197 21.5304L1.71968 12.5304C1.57908 12.3897 1.50009 12.1989 1.50009 12C1.50009 11.8011 1.57908 11.6103 1.71968 11.4696L10.7197 2.46962C10.8246 2.36475 10.9582 2.29333 11.1037 2.2644C11.2492 2.23547 11.4 2.25033 11.537 2.3071C11.6741 2.36387 11.7912 2.45999 11.8736 2.58332C11.956 2.70665 12 2.85165 12 2.99998V6.74998H19.5C19.8977 6.75044 20.279 6.90862 20.5602 7.18983C20.8414 7.47103 20.9996 7.8523 21 8.24999V15.75C20.9996 16.1477 20.8414 16.5289 20.5602 16.8101C20.279 17.0913 19.8977 17.2495 19.5 17.25H12V21C12 21.1483 11.956 21.2933 11.8736 21.4166C11.7912 21.54 11.6741 21.6361 11.537 21.6929C11.4 21.7496 11.2492 21.7645 11.1037 21.7356C10.9582 21.7066 10.8246 21.6352 10.7197 21.5304Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(FatLeftSolid);
export default ForwardRef;
