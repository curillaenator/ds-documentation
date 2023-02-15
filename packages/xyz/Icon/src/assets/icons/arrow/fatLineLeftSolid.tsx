import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FatLineLeftSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M10.7197 21.5304L1.71965 12.5304C1.57904 12.3897 1.50006 12.1989 1.50006 12C1.50006 11.8011 1.57904 11.6103 1.71965 11.4696L10.7197 2.46962C10.8246 2.36475 10.9582 2.29333 11.1037 2.2644C11.2492 2.23547 11.4 2.25033 11.537 2.3071C11.674 2.36387 11.7912 2.45999 11.8736 2.58332C11.956 2.70665 12 2.85165 12 2.99998V6.74998H17.25C17.4489 6.74999 17.6397 6.82902 17.7803 6.96967C17.921 7.11032 18 7.30108 18 7.49999V16.5C18 16.6989 17.921 16.8897 17.7803 17.0303C17.6397 17.171 17.4489 17.25 17.25 17.25H12V21C12 21.1483 11.956 21.2933 11.8736 21.4166C11.7912 21.54 11.674 21.6361 11.537 21.6929C11.4 21.7496 11.2492 21.7645 11.1037 21.7356C10.9582 21.7066 10.8246 21.6352 10.7197 21.5304ZM20.25 17.25C20.4489 17.25 20.6397 17.171 20.7803 17.0303C20.921 16.8897 21 16.6989 21 16.5V7.49999C21 7.30107 20.921 7.11031 20.7803 6.96966C20.6397 6.829 20.4489 6.74998 20.25 6.74998C20.0511 6.74998 19.8603 6.829 19.7197 6.96966C19.579 7.11031 19.5 7.30107 19.5 7.49999V16.5C19.5 16.6989 19.579 16.8897 19.7197 17.0303C19.8603 17.171 20.0511 17.25 20.25 17.25Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(FatLineLeftSolid);
export default ForwardRef;
