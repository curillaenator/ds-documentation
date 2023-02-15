import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PictureInPictureSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.25 4.5H3.75C3.35231 4.50045 2.97105 4.65864 2.68984 4.93984C2.40864 5.22105 2.25045 5.60231 2.25 6V18C2.25045 18.3977 2.40864 18.779 2.68984 19.0602C2.97105 19.3414 3.35231 19.4995 3.75 19.5H20.25C20.6477 19.4995 21.029 19.3414 21.3102 19.0602C21.5914 18.779 21.7495 18.3977 21.75 18V6C21.7495 5.60231 21.5914 5.22105 21.3102 4.93984C21.029 4.65864 20.6477 4.50045 20.25 4.5ZM3.75 6H20.25L20.2504 11.25H13.5C13.1023 11.2505 12.721 11.4086 12.4398 11.6898C12.1586 11.971 12.0005 12.3523 12 12.75V18H3.75V6Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PictureInPictureSolid);
export default ForwardRef;
