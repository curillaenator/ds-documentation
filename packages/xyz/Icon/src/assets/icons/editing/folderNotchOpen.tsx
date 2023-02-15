import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const FolderNotchOpen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3 19.5V6C3 5.80109 3.07902 5.61032 3.21967 5.46967C3.36032 5.32902 3.55109 5.25 3.75 5.25H8.75C8.91228 5.25 9.07018 5.30263 9.2 5.4L11.8 7.35C11.9298 7.44737 12.0877 7.5 12.25 7.5H18.75C18.9489 7.5 19.1397 7.57902 19.2803 7.71967C19.421 7.86032 19.5 8.05109 19.5 8.25V10.5M3 19.5L5.81142 12.4715C5.86709 12.3323 5.96318 12.213 6.0873 12.1289C6.21143 12.0449 6.35788 12 6.50777 12H11.0229C11.171 12 11.3157 11.9562 11.4389 11.874L13.3111 10.626C13.4343 10.5438 13.579 10.5 13.7271 10.5H21.4594C21.5783 10.5 21.6954 10.5282 21.8012 10.5824C21.907 10.6365 21.9984 10.7151 22.0679 10.8115C22.1373 10.9079 22.1829 11.0194 22.2009 11.1369C22.2188 11.2544 22.2085 11.3744 22.1709 11.4872L19.5 19.5H3Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(FolderNotchOpen);
export default ForwardRef;