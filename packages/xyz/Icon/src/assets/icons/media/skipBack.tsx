import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SkipBack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M5.25 3.75V20.25M6.29728 11.3594L17.609 4.44671C17.7227 4.37723 17.8528 4.33929 17.986 4.3368C18.1193 4.33431 18.2507 4.36735 18.3669 4.43252C18.4832 4.4977 18.5799 4.59265 18.6472 4.70763C18.7146 4.8226 18.7501 4.95343 18.7501 5.08667V18.9121C18.7501 19.0453 18.7146 19.1762 18.6472 19.2911C18.5799 19.4061 18.4832 19.5011 18.3669 19.5662C18.2507 19.6314 18.1193 19.6644 17.986 19.662C17.8528 19.6595 17.7227 19.6215 17.609 19.552L6.29728 12.6393C6.18765 12.5723 6.09707 12.4783 6.03422 12.3662C5.97137 12.2542 5.93837 12.1279 5.93837 11.9994C5.93837 11.8709 5.97137 11.7446 6.03422 11.6325C6.09707 11.5204 6.18765 11.4264 6.29728 11.3594Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SkipBack);
export default ForwardRef;
