import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NoteBlankSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 3H4.5C4.10231 3.00045 3.72105 3.15864 3.43984 3.43984C3.15864 3.72105 3.00045 4.10231 3 4.5V19.5C3.00045 19.8977 3.15864 20.2789 3.43984 20.5602C3.72105 20.8414 4.10231 20.9995 4.5 21H14.6894C14.8864 21.0005 15.0816 20.962 15.2637 20.8866C15.4458 20.8112 15.611 20.7004 15.75 20.5606L20.5606 15.75C20.7004 15.611 20.8111 15.4457 20.8866 15.2637C20.962 15.0816 21.0005 14.8864 21 14.6894V4.5C20.9995 4.10231 20.8414 3.72105 20.5602 3.43984C20.2789 3.15864 19.8977 3.00045 19.5 3ZM15 19.1894V14.9993H19.1901L15 19.1894Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(NoteBlankSolid);
export default ForwardRef;