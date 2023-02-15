import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NotebookSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 3H4.5C4.10231 3.00045 3.72105 3.15864 3.43984 3.43984C3.15864 3.72105 3.00045 4.10231 3 4.5V19.5C3.00045 19.8977 3.15864 20.279 3.43984 20.5602C3.72105 20.8414 4.10231 20.9995 4.5 21H19.5C19.8977 20.9995 20.279 20.8414 20.5602 20.5602C20.8414 20.279 20.9995 19.8977 21 19.5V4.5C20.9995 4.10231 20.8414 3.72105 20.5602 3.43984C20.279 3.15864 19.8977 3.00045 19.5 3ZM7.5 19.5H4.5V4.5H7.5V19.5ZM16.5 14.25H10.5C10.3011 14.25 10.1103 14.171 9.96967 14.0303C9.82902 13.8897 9.75 13.6989 9.75 13.5C9.75 13.3011 9.82902 13.1103 9.96967 12.9697C10.1103 12.829 10.3011 12.75 10.5 12.75H16.5C16.6989 12.75 16.8897 12.829 17.0303 12.9697C17.171 13.1103 17.25 13.3011 17.25 13.5C17.25 13.6989 17.171 13.8897 17.0303 14.0303C16.8897 14.171 16.6989 14.25 16.5 14.25ZM16.5 11.25H10.5C10.3011 11.25 10.1103 11.171 9.96967 11.0303C9.82902 10.8897 9.75 10.6989 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H16.5C16.6989 9.75 16.8897 9.82902 17.0303 9.96967C17.171 10.1103 17.25 10.3011 17.25 10.5C17.25 10.6989 17.171 10.8897 17.0303 11.0303C16.8897 11.171 16.6989 11.25 16.5 11.25Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(NotebookSolid);
export default ForwardRef;