import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const NumberSquareFourSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.5 3H4.5C4.10231 3.00045 3.72105 3.15864 3.43984 3.43984C3.15864 3.72105 3.00045 4.10231 3 4.5V19.5C3.00045 19.8977 3.15864 20.279 3.43984 20.5602C3.72105 20.8414 4.10231 20.9995 4.5 21H19.5C19.8977 20.9995 20.279 20.8414 20.5602 20.5602C20.8414 20.279 20.9995 19.8977 21 19.5V4.5C20.9995 4.10231 20.8414 3.72105 20.5602 3.43984C20.279 3.15864 19.8977 3.00045 19.5 3ZM14.625 16.5C14.625 16.6989 14.546 16.8897 14.4053 17.0303C14.2647 17.171 14.0739 17.25 13.875 17.25C13.6761 17.25 13.4853 17.171 13.3447 17.0303C13.204 16.8897 13.125 16.6989 13.125 16.5V14.25H9.375C9.25505 14.25 9.13686 14.2212 9.03033 14.1661C8.9238 14.111 8.83205 14.0311 8.76277 13.9332C8.69349 13.8352 8.64871 13.7221 8.63218 13.6033C8.61564 13.4845 8.62784 13.3635 8.66775 13.2504L10.9176 6.87538C10.9838 6.68781 11.1218 6.53422 11.3012 6.44839C11.4807 6.36257 11.6869 6.35155 11.8744 6.41775C12.062 6.48396 12.2156 6.62196 12.3014 6.80141C12.3872 6.98085 12.3983 7.18704 12.3321 7.37462L10.435 12.75H13.125V10.5C13.125 10.3011 13.204 10.1103 13.3447 9.96967C13.4853 9.82902 13.6761 9.75 13.875 9.75C14.0739 9.75 14.2647 9.82902 14.4053 9.96967C14.546 10.1103 14.625 10.3011 14.625 10.5V16.5Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(NumberSquareFourSolid);
export default ForwardRef;