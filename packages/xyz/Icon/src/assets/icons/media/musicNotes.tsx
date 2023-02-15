import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MusicNotes = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 16.125C19.5 17.5747 18.3247 18.75 16.875 18.75C15.4253 18.75 14.25 17.5747 14.25 16.125C14.25 14.6753 15.4253 13.5 16.875 13.5C18.3247 13.5 19.5 14.6753 19.5 16.125ZM19.5 16.125V3L7.5 6V19.125M7.5 19.125C7.5 20.5747 6.32475 21.75 4.875 21.75C3.42525 21.75 2.25 20.5747 2.25 19.125C2.25 17.6753 3.42525 16.5 4.875 16.5C6.32475 16.5 7.5 17.6753 7.5 19.125ZM19.5 7.5L7.5 10.5'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(MusicNotes);
export default ForwardRef;