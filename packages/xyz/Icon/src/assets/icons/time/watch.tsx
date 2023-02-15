import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Watch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 8.25V12H15.75M8.25 6.38698L8.88829 2.86621C8.91963 2.69332 9.01068 2.53693 9.14555 2.42431C9.28042 2.31169 9.45055 2.25 9.62626 2.25H14.3737C14.5494 2.25 14.7196 2.31169 14.8544 2.42431C14.9893 2.53693 15.0804 2.69332 15.1117 2.86621L15.75 6.387M8.25 17.613L8.88829 21.1338C8.91963 21.3067 9.01068 21.4631 9.14555 21.5757C9.28042 21.6883 9.45055 21.75 9.62626 21.75H14.3737C14.5494 21.75 14.7196 21.6883 14.8544 21.5757C14.9893 21.4631 15.0804 21.3067 15.1117 21.1338L15.75 17.613M18.75 12C18.75 15.7279 15.7279 18.75 12 18.75C8.27208 18.75 5.25 15.7279 5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Watch);
export default ForwardRef;
