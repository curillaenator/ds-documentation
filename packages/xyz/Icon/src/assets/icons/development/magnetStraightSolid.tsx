import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const MagnetStraightSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.75 3.75H15C14.6023 3.75045 14.2211 3.90864 13.9398 4.18984C13.6586 4.47105 13.5005 4.85231 13.5 5.25V13.5C13.5 13.8978 13.342 14.2794 13.0607 14.5607C12.7794 14.842 12.3978 15 12 15C11.6022 15 11.2206 14.842 10.9393 14.5607C10.658 14.2794 10.5 13.8978 10.5 13.5V5.25C10.4995 4.85231 10.3414 4.47105 10.0602 4.18984C9.77895 3.90864 9.39769 3.75045 9 3.75H5.25C4.85232 3.75045 4.47105 3.90864 4.18984 4.18984C3.90864 4.47105 3.75045 4.85231 3.75 5.25V13.5C3.74999 15.688 4.61912 17.7863 6.1662 19.3335C7.71327 20.8806 9.81158 21.7499 11.9995 21.75C12.0204 21.75 12.0415 21.7499 12.0624 21.7498C16.5771 21.7163 20.25 17.9733 20.25 13.4059V5.25C20.2495 4.85231 20.0914 4.47105 19.8102 4.18984C19.529 3.90864 19.1477 3.75045 18.75 3.75ZM18.75 5.25V9H15V5.25H18.75ZM9 5.25V9H5.25V5.25H9Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(MagnetStraightSolid);
export default ForwardRef;
