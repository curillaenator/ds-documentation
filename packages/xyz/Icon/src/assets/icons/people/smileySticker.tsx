import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SmileySticker = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.898 14.2497C15.5026 14.9335 14.9343 15.5013 14.2501 15.896C13.5659 16.2908 12.7899 16.4986 12 16.4986C11.2101 16.4986 10.4341 16.2908 9.74993 15.8961C9.06574 15.5014 8.49743 14.9336 8.10205 14.2498M15.3598 10.0806H15.361M8.64 10.0806H8.6412M14.6454 20.6046C12.7269 21.1929 10.6668 21.1225 8.79305 20.4046C6.91926 19.6867 5.3395 18.3626 4.30527 16.643C3.27105 14.9235 2.84181 12.9073 3.0859 10.9156C3.32998 8.92393 4.23337 7.07112 5.65222 5.6522C7.07108 4.23328 8.92384 3.32981 10.9155 3.08563C12.9072 2.84144 14.9234 3.27059 16.643 4.30473C18.3626 5.33888 19.6868 6.91858 20.4048 8.79234C21.1228 10.6661 21.1933 12.7262 20.6051 14.6447L14.6454 20.6046Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SmileySticker);
export default ForwardRef;
