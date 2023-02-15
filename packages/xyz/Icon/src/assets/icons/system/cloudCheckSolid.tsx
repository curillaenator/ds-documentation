import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CloudCheckSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.0002 3.75C13.468 3.75126 11.9663 4.17869 10.6631 4.9845C9.35994 5.79031 8.30658 6.94272 7.62082 8.3129L7.62032 8.31285C7.04604 9.45703 6.74766 10.7198 6.74906 12C6.74906 12.1989 6.67004 12.3897 6.52939 12.5303C6.38874 12.671 6.19797 12.75 5.99906 12.75C5.80015 12.75 5.60938 12.671 5.46873 12.5303C5.32808 12.3897 5.24906 12.1989 5.24906 12C5.24788 10.7313 5.49569 9.47462 5.97843 8.30132C4.46678 8.4972 3.08637 9.26115 2.11761 10.438C1.14885 11.6148 0.664391 13.1163 0.762635 14.6374C0.860879 16.1586 1.53446 17.5853 2.64656 18.6277C3.75866 19.6702 5.22587 20.2502 6.75016 20.25H15.0002C17.1882 20.25 19.2866 19.3808 20.8338 17.8336C22.381 16.2865 23.2502 14.188 23.2502 12C23.2502 9.81196 22.381 7.71354 20.8338 6.16637C19.2866 4.61919 17.1882 3.75 15.0002 3.75ZM18.5304 11.4053L14.0304 15.9053C13.9607 15.975 13.8781 16.0302 13.7871 16.0679C13.6961 16.1056 13.5986 16.125 13.5001 16.125C13.4016 16.125 13.3041 16.1056 13.2131 16.0679C13.1221 16.0302 13.0394 15.975 12.9697 15.9053L10.7197 13.6553C10.5792 13.5146 10.5004 13.3239 10.5004 13.1251C10.5005 12.9263 10.5795 12.7356 10.7201 12.595C10.8607 12.4544 11.0513 12.3754 11.2502 12.3753C11.449 12.3753 11.6397 12.4542 11.7804 12.5947L13.5001 14.3144L17.4697 10.3447C17.6104 10.2042 17.8011 10.1253 18 10.1253C18.1988 10.1254 18.3895 10.2044 18.5301 10.345C18.6706 10.4856 18.7497 10.6763 18.7497 10.8751C18.7498 11.0739 18.6709 11.2646 18.5304 11.4053H18.5304Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CloudCheckSolid);
export default ForwardRef;