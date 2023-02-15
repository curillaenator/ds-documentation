import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FloppyDiskSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.5607 7.50001L16.5001 3.43955C16.3612 3.29976 16.1959 3.18892 16.0138 3.11347C15.8317 3.03802 15.6365 2.99946 15.4394 3.00001H9.74996L9.75 3.00092V7.50092H15C15.1989 7.50092 15.3897 7.57994 15.5303 7.72059C15.671 7.86124 15.75 8.05201 15.75 8.25092C15.75 8.44983 15.671 8.6406 15.5303 8.78125C15.3897 8.9219 15.1989 9.00092 15 9.00092H9C8.80109 9.00091 8.61033 8.92189 8.46968 8.78124C8.32903 8.64059 8.25001 8.44983 8.25 8.25092V3.00092L8.25005 3.00001H4.5C4.10231 3.00046 3.72105 3.15864 3.43984 3.43985C3.15864 3.72105 3.00045 4.10232 3 4.50001V19.5C3.00045 19.8977 3.15864 20.279 3.43984 20.5602C3.72105 20.8414 4.10231 20.9995 4.5 21H19.5C19.8977 20.9995 20.2789 20.8414 20.5602 20.5602C20.8414 20.279 20.9995 19.8977 21 19.5V8.56074C21.0005 8.36367 20.962 8.16845 20.8866 7.98638C20.8112 7.8043 20.7004 7.63899 20.5607 7.50001ZM12 16.875C11.555 16.875 11.12 16.7431 10.75 16.4958C10.38 16.2486 10.0916 15.8972 9.92127 15.4861C9.75097 15.0749 9.70642 14.6225 9.79323 14.1861C9.88005 13.7496 10.0943 13.3487 10.409 13.034C10.7237 12.7194 11.1246 12.5051 11.561 12.4183C11.9975 12.3315 12.4499 12.376 12.861 12.5463C13.2722 12.7166 13.6236 13.005 13.8708 13.375C14.118 13.745 14.25 14.18 14.25 14.625C14.2493 15.2216 14.0121 15.7935 13.5903 16.2153C13.1684 16.6371 12.5965 16.8744 12 16.875Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(FloppyDiskSolid);
export default ForwardRef;