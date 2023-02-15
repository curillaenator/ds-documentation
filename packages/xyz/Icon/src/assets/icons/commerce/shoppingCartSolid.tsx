import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ShoppingCartSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.9879 6.13417L19.8482 12.4025C19.7541 12.921 19.481 13.39 19.0764 13.7277C18.6718 14.0654 18.1615 14.2502 17.6345 14.25H6.76231L7.17142 16.5H17.25C17.7279 16.4998 18.1935 16.6517 18.5794 16.9337C18.9653 17.2157 19.2513 17.6132 19.3962 18.0686C19.5411 18.5241 19.5373 19.0138 19.3853 19.4669C19.2334 19.92 18.9411 20.313 18.5509 20.589C18.1607 20.865 17.6928 21.0096 17.2149 21.0019C16.737 20.9942 16.274 20.8346 15.8929 20.5463C15.5117 20.2579 15.2323 19.8557 15.0949 19.3979C14.9576 18.9401 14.9695 18.4505 15.129 18H9.621C9.75315 18.3724 9.78491 18.773 9.71309 19.1616C9.64127 19.5502 9.46839 19.913 9.21184 20.2135C8.9553 20.5141 8.62414 20.7418 8.25166 20.8737C7.87919 21.0057 7.47854 21.0372 7.09001 20.9651C6.70148 20.8931 6.33877 20.72 6.03836 20.4633C5.73796 20.2066 5.51045 19.8753 5.37872 19.5027C5.24699 19.1302 5.21568 18.7295 5.28795 18.341C5.36021 17.9526 5.5335 17.5899 5.79039 17.2897L3.19226 3H1.5C1.30109 3 1.11032 2.92098 0.96967 2.78033C0.829018 2.63968 0.75 2.44891 0.75 2.25C0.75 2.05109 0.829018 1.86032 0.96967 1.71967C1.11032 1.57902 1.30109 1.5 1.5 1.5H3.19226C3.54359 1.49984 3.88382 1.62308 4.15356 1.8482C4.42329 2.07331 4.6054 2.38601 4.66809 2.7317L5.12595 5.25H20.25C20.3599 5.25001 20.4684 5.27415 20.5679 5.32071C20.6674 5.36727 20.7554 5.43512 20.8258 5.51946C20.8962 5.6038 20.9472 5.70257 20.9752 5.80879C21.0032 5.91501 21.0076 6.02609 20.9879 6.13417Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ShoppingCartSolid);
export default ForwardRef;