import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ULeftUpSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.75 6.75C18.5511 6.75 18.3603 6.82902 18.2197 6.96967C18.079 7.11032 18 7.30109 18 7.5V15.75C18 16.9435 17.5259 18.0881 16.682 18.932C15.8381 19.7759 14.6935 20.25 13.5 20.25C12.3065 20.25 11.1619 19.7759 10.318 18.932C9.47409 18.0881 8.99999 16.9435 8.99999 15.75V4.81064L12.2196 8.03032C12.3603 8.17098 12.551 8.25001 12.75 8.25002C12.9489 8.25003 13.1396 8.17101 13.2803 8.03036C13.421 7.88972 13.5 7.69895 13.5 7.50003C13.5 7.30112 13.421 7.11034 13.2804 6.96968L8.78035 2.46968C8.77884 2.46817 8.77717 2.46693 8.77567 2.46542C8.75958 2.44961 8.74289 2.43439 8.72543 2.42006C8.71661 2.41283 8.70732 2.40651 8.69828 2.39973C8.68773 2.39186 8.67741 2.38367 8.66642 2.37634C8.65583 2.36925 8.64481 2.36309 8.63394 2.35659C8.6238 2.35053 8.61387 2.34416 8.60343 2.33858C8.59249 2.33272 8.58123 2.32777 8.57006 2.32251C8.55903 2.31727 8.54815 2.31178 8.53682 2.30708C8.52616 2.30267 8.51529 2.29911 8.50448 2.29523C8.49219 2.29079 8.48006 2.28609 8.46747 2.2823C8.4568 2.27907 8.44595 2.27673 8.43517 2.27399C8.42227 2.27069 8.40949 2.26712 8.39633 2.26451C8.38411 2.26209 8.37175 2.26069 8.35944 2.25888C8.34754 2.25714 8.33582 2.2549 8.32373 2.25373C8.30199 2.25158 8.28013 2.25066 8.25827 2.25041C8.25548 2.25039 8.25278 2.25 8.24999 2.25C8.2472 2.25 8.2445 2.25039 8.2417 2.25041C8.21985 2.25066 8.19799 2.25158 8.17624 2.25373C8.16416 2.2549 8.15244 2.25714 8.14054 2.25888C8.12822 2.26069 8.11586 2.26209 8.10364 2.26451C8.09048 2.26712 8.07771 2.27069 8.0648 2.27399C8.05402 2.27673 8.04317 2.27907 8.03251 2.2823C8.01992 2.28609 8.00779 2.29079 7.99549 2.29523C7.98469 2.29912 7.97382 2.30267 7.96315 2.30708C7.95182 2.31178 7.94095 2.31727 7.92992 2.32251C7.91875 2.32777 7.90749 2.33272 7.89654 2.33858C7.88611 2.34416 7.87617 2.35053 7.86603 2.35659C7.85516 2.36309 7.84415 2.36925 7.83355 2.37634C7.82257 2.38367 7.81225 2.39186 7.80169 2.39973C7.79265 2.40651 7.78336 2.41283 7.77455 2.42006C7.75708 2.43439 7.7404 2.44961 7.72431 2.46542C7.7228 2.46693 7.72113 2.46817 7.71962 2.46968L3.21962 6.96968C3.07897 7.11034 2.99996 7.30112 2.99997 7.50003C2.99998 7.69895 3.07901 7.88972 3.21967 8.03037C3.36033 8.17102 3.5511 8.25003 3.75002 8.25002C3.94894 8.25001 4.1397 8.17098 4.28035 8.03032L7.49999 4.81064V15.75C7.49999 17.3413 8.13213 18.8674 9.25735 19.9926C10.3826 21.1179 11.9087 21.75 13.5 21.75C15.0913 21.75 16.6174 21.1179 17.7426 19.9926C18.8678 18.8674 19.5 17.3413 19.5 15.75V7.5C19.5 7.30109 19.421 7.11032 19.2803 6.96967C19.1397 6.82902 18.9489 6.75 18.75 6.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ULeftUpSolid);
export default ForwardRef;
