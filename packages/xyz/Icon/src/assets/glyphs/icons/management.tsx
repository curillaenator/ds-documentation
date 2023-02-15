import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Management = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M4 4.5C4 3.67157 4.67157 3 5.5 3C6.32843 3 7 3.67157 7 4.5C7 5.32843 6.32843 6 5.5 6C4.67157 6 4 5.32843 4 4.5Z'
      fill='#FCB974'
    />
    <path
      d='M17 4.5C17 3.67157 17.6716 3 18.5 3C19.3284 3 20 3.67157 20 4.5C20 5.32843 19.3284 6 18.5 6C17.6716 6 17 5.32843 17 4.5Z'
      fill='#FCB974'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.2929 15.2929C14.6834 14.9024 15.3166 14.9024 15.7071 15.2929L19.7071 19.2929C20.0976 19.6834 20.0976 20.3166 19.7071 20.7071C19.3166 21.0976 18.6834 21.0976 18.2929 20.7071L14.2929 16.7071C13.9024 16.3166 13.9024 15.6834 14.2929 15.2929Z'
      fill='#FCB974'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.70711 15.2929C10.0976 15.6834 10.0976 16.3166 9.70711 16.7071L5.70711 20.7071C5.31658 21.0976 4.68342 21.0976 4.29289 20.7071C3.90237 20.3166 3.90237 19.6834 4.29289 19.2929L8.29289 15.2929C8.68342 14.9024 9.31658 14.9024 9.70711 15.2929Z'
      fill='#FCB974'
    />
    <path
      d='M5 12C5 8.13401 8.13401 5 12 5C15.8642 5.00434 18.9957 8.13581 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z'
      fill='white'
    />
    <path
      d='M5 12C5 8.13401 8.13401 5 12 5C15.8642 5.00434 18.9957 8.13581 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z'
      fill='#FB923C'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 8C12.5523 8 13 8.44772 13 9V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V9C11 8.44772 11.4477 8 12 8Z'
      fill='white'
    />
  </svg>
);

const ForwardRef = forwardRef(Management);
export default ForwardRef;
