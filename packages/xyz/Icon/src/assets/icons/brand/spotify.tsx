import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Spotify = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.7939 10.1559C15.3087 9.39541 13.6639 8.99921 11.9953 9C10.3267 9.00079 8.68228 9.39856 7.1978 10.1604M15.4026 12.817C14.3473 12.2792 13.1795 11.9992 11.9951 12C10.8106 12.0008 9.64323 12.2823 8.5886 12.8214M14.0131 15.4755C13.3866 15.1621 12.6957 14.9992 11.9952 15C11.2947 15.0008 10.6041 15.1651 9.97837 15.48M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Spotify);
export default ForwardRef;
