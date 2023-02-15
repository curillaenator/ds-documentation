import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Horse = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 11.25C16.5 12.4435 16.0259 13.5881 15.182 14.432C14.3381 15.2759 13.1935 15.75 12 15.75M12 15.75C9.50272 14.2517 6.63461 14.4163 4.99702 14.6936C4.58204 14.7644 4.15553 14.7174 3.76588 14.5581C3.37623 14.3987 3.03903 14.1334 2.79254 13.7921L1.5 12L11.25 6V3H12C13.1927 3 14.3735 3.23706 15.4737 3.6974C16.574 4.15774 17.5718 4.83218 18.4091 5.68152C19.2464 6.53085 19.9066 7.53815 20.3512 8.64485C20.7959 9.75156 21.0161 10.9356 20.9991 12.1282C20.9319 16.9548 17.0083 20.9028 12.1821 20.9982C9.90542 21.0475 7.69522 20.2288 5.99996 18.7083M12 15.75L8.6968 20.3745M11.64 9.36094H11.6412'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Horse);
export default ForwardRef;
