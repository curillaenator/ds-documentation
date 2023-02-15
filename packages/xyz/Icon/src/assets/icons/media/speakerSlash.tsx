import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SpeakerSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.5208 7.22782C21.7867 8.49369 22.4979 10.2106 22.4979 12.0008C22.4979 13.791 21.7867 15.5079 20.5208 16.7738M7.49949 8.25057V15.7506M7.49949 8.25057L3 8.25134C2.80109 8.25134 2.61032 8.33036 2.46967 8.47101C2.32902 8.61166 2.25 8.80243 2.25 9.00134V15.0013C2.25 15.2003 2.32902 15.391 2.46967 15.5317C2.61032 15.6723 2.80109 15.7513 3 15.7513L7.49949 15.7506M7.49949 8.25057L8.13963 7.75385M7.49949 15.7506L14.25 21.0013V14.4753M17.8692 9.87999C18.4318 10.4426 18.7479 11.2056 18.7479 12.0013C18.7479 12.7969 18.4318 13.56 17.8692 14.1226M4.5 3.74999L19.5 20.25M10.5146 5.90583L14.25 3.00061V10.0147'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SpeakerSlash);
export default ForwardRef;
