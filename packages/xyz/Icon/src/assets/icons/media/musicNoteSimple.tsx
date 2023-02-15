import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MusicNoteSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 17.25C12 19.3211 10.3211 21 8.25 21C6.17893 21 4.5 19.3211 4.5 17.25C4.5 15.1789 6.17893 13.5 8.25 13.5C10.3211 13.5 12 15.1789 12 17.25ZM12 17.25V3.75L19.5 6'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(MusicNoteSimple);
export default ForwardRef;
