import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FolderSimplePlusSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.2495 6.74976H12.25L9.64845 4.79932C9.38908 4.6056 9.07423 4.50057 8.7505 4.49976H3.74955C3.35185 4.50015 2.97055 4.65831 2.68933 4.93953C2.40811 5.22075 2.24995 5.60205 2.24956 5.99976V18.7498C2.24995 19.1475 2.40811 19.5288 2.68933 19.81C2.97055 20.0912 3.35185 20.2494 3.74955 20.2498H20.333C20.7085 20.2492 21.0685 20.0998 21.334 19.8343C21.5995 19.5688 21.7489 19.2088 21.7495 18.8333V8.24976C21.7491 7.85205 21.5909 7.47075 21.3097 7.18953C21.0285 6.90831 20.6472 6.75015 20.2495 6.74976ZM14.25 14.2499H12.75V15.7499C12.75 15.9489 12.6709 16.1396 12.5303 16.2803C12.3896 16.4209 12.1989 16.4999 12 16.4999C11.8011 16.4999 11.6103 16.4209 11.4696 16.2803C11.329 16.1396 11.25 15.9489 11.25 15.7499V14.2499H9.74998C9.55107 14.2499 9.3603 14.1709 9.21965 14.0303C9.079 13.8896 8.99998 13.6989 8.99998 13.4999C8.99998 13.301 9.079 13.1103 9.21965 12.9696C9.3603 12.829 9.55107 12.7499 9.74998 12.7499H11.25V11.2499C11.25 11.051 11.329 10.8603 11.4696 10.7196C11.6103 10.579 11.8011 10.4999 12 10.4999C12.1989 10.4999 12.3896 10.579 12.5303 10.7196C12.6709 10.8603 12.75 11.051 12.75 11.2499V12.7499H14.25C14.4489 12.7499 14.6396 12.829 14.7803 12.9696C14.9209 13.1103 15 13.301 15 13.4999C15 13.6989 14.9209 13.8896 14.7803 14.0303C14.6396 14.1709 14.4489 14.2499 14.25 14.2499Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(FolderSimplePlusSolid);
export default ForwardRef;