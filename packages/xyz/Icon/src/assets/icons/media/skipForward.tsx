import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SkipForward = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.75 3.75V20.25M17.7028 11.3594L6.39109 4.44671C6.2774 4.37723 6.14725 4.33929 6.01403 4.3368C5.88082 4.33431 5.74934 4.36735 5.63313 4.43252C5.51692 4.4977 5.42017 4.59265 5.35283 4.70763C5.28549 4.8226 5.25 4.95343 5.25 5.08667V18.9121C5.25 19.0453 5.28549 19.1762 5.35283 19.2911C5.42017 19.4061 5.51692 19.5011 5.63313 19.5662C5.74934 19.6314 5.88082 19.6644 6.01403 19.662C6.14725 19.6595 6.2774 19.6215 6.39109 19.552L17.7028 12.6393C17.8124 12.5723 17.903 12.4783 17.9659 12.3662C18.0287 12.2542 18.0617 12.1279 18.0617 11.9994C18.0617 11.8709 18.0287 11.7446 17.9659 11.6325C17.903 11.5204 17.8124 11.4264 17.7028 11.3594Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SkipForward);
export default ForwardRef;
