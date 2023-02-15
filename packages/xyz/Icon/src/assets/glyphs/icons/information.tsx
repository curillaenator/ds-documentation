import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Information = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18 5H6C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V7C20 5.89543 19.1046 5 18 5Z'
      fill='#93C4FC'
    />
    <path
      d='M19.8935 22.298C20.0114 22.4648 20.239 22.5105 20.4122 22.4021L20.2371 22.1224L20.4122 22.4021L21.6233 21.644C21.8171 21.5227 21.8631 21.2603 21.7222 21.0803L19.4384 18.1632L20.7414 17.8101C21.081 17.7181 21.1294 17.2563 20.8162 17.0959L20.6658 17.3896L20.8162 17.0959L16.2391 14.7517C15.9694 14.6136 15.6533 14.8266 15.6801 15.1284L16.097 19.8254L16.4257 19.7962L16.097 19.8254C16.1254 20.1453 16.5099 20.2918 16.744 20.0719L17.6917 19.1819L19.8935 22.298Z'
      fill='#60A5F9'
      stroke='white'
      strokeWidth={0.66}
    />
    <path
      d='M17 9C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10C6 9.44771 6.44771 9 7 9H17Z'
      fill='white'
    />
    <path
      d='M12 13C12.5523 13 13 13.4477 13 14C13 14.5523 12.5523 15 12 15H7C6.44772 15 6 14.5523 6 14C6 13.4477 6.44772 13 7 13H12Z'
      fill='white'
    />
  </svg>
);

const ForwardRef = forwardRef(Information);
export default ForwardRef;
