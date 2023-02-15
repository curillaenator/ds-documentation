import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TagSimpleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M23.124 11.584L18.8468 5.16801C18.71 4.96232 18.5244 4.79368 18.3067 4.67712C18.0889 4.56055 17.8456 4.49968 17.5986 4.49994H3.75C3.35231 4.50039 2.97105 4.65858 2.68984 4.93978C2.40864 5.22099 2.25045 5.60226 2.25 5.99995V18C2.25045 18.3977 2.40864 18.779 2.68984 19.0602C2.97105 19.3414 3.35231 19.4996 3.75 19.5H17.5986C17.8456 19.5003 18.0889 19.4395 18.3067 19.3229C18.5244 19.2064 18.71 19.0377 18.8468 18.8321L18.8467 18.8322L23.124 12.416C23.2062 12.2928 23.25 12.1481 23.25 12C23.25 11.8519 23.2062 11.7072 23.124 11.584Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(TagSimpleSolid);
export default ForwardRef;
