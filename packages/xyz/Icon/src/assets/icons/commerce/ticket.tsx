import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Ticket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9 5.25V18.75M2.25 15.6741C2.24997 15.5013 2.30968 15.3338 2.41902 15.2C2.52836 15.0662 2.68059 14.9744 2.84992 14.94C3.52749 14.8016 4.13645 14.4334 4.57379 13.8976C5.01113 13.3619 5.25 12.6916 5.25 12C5.25 11.3084 5.01113 10.6381 4.57379 10.1024C4.13645 9.56665 3.52749 9.19843 2.84992 9.06C2.68059 9.02562 2.52836 8.93376 2.41902 8.79997C2.30968 8.66618 2.24997 8.4987 2.25 8.32592V6C2.25 5.80109 2.32902 5.61032 2.46967 5.46967C2.61032 5.32902 2.80109 5.25 3 5.25H21C21.1989 5.25 21.3897 5.32902 21.5303 5.46967C21.671 5.61032 21.75 5.80109 21.75 6V8.32592C21.75 8.4987 21.6903 8.66618 21.581 8.79997C21.4716 8.93376 21.3194 9.02563 21.1501 9.06C20.4725 9.19843 19.8635 9.56665 19.4262 10.1024C18.9889 10.6381 18.75 11.3084 18.75 12C18.75 12.6916 18.9889 13.3619 19.4262 13.8976C19.8635 14.4334 20.4725 14.8016 21.1501 14.94C21.3194 14.9744 21.4716 15.0662 21.581 15.2C21.6903 15.3338 21.75 15.5013 21.75 15.6741V18C21.75 18.1989 21.671 18.3897 21.5303 18.5303C21.3897 18.671 21.1989 18.75 21 18.75H3C2.80109 18.75 2.61032 18.671 2.46967 18.5303C2.32902 18.3897 2.25 18.1989 2.25 18V15.6741Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Ticket);
export default ForwardRef;