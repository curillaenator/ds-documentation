import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const WifiMediumSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M22.5566 6.52051C16.3442 1.83008 7.66062 1.82861 1.44529 6.51905C1.2823 6.6403 1.14621 6.79402 1.04561 6.97051C0.945017 7.147 0.882093 7.34242 0.860813 7.54444C0.838068 7.75029 0.857652 7.95861 0.918362 8.15661C0.979071 8.3546 1.07962 8.5381 1.21384 8.69581L10.8554 20.0608C10.9963 20.2275 11.1717 20.3615 11.3695 20.4536C11.5673 20.5456 11.7828 20.5936 12.001 20.594H12.0024C12.2185 20.5942 12.432 20.5473 12.6281 20.4564C12.8242 20.3656 12.9981 20.2331 13.1377 20.0682V20.0674L22.791 8.69141C22.9237 8.53391 23.0232 8.35114 23.0834 8.15413C23.1436 7.95713 23.1632 7.74997 23.1411 7.54517C23.1192 7.3434 23.0561 7.1483 22.9555 6.97201C22.8549 6.79572 22.7192 6.64203 22.5566 6.52051ZM2.3447 7.71876L2.34617 7.71729C2.34617 7.71803 2.34617 7.71803 2.3447 7.71876ZM19.1703 10.6404C18.6668 10.2651 18.1345 9.93018 17.5784 9.63863C17.5545 9.6259 17.5307 9.61336 17.5066 9.60091C16.9694 9.32257 16.412 9.08529 15.839 8.8911C15.792 8.87507 15.7445 8.86143 15.6971 8.84596C15.1328 8.66082 14.5556 8.51785 13.9701 8.41822C13.9203 8.4098 13.8701 8.40596 13.8199 8.39817C12.6152 8.20039 11.3863 8.2003 10.1816 8.3979C10.1313 8.40568 10.0805 8.40971 10.0302 8.41813C9.44541 8.51765 8.86882 8.6604 8.30516 8.84523C8.25755 8.8607 8.20994 8.87452 8.1627 8.89064C7.5905 9.08459 7.03374 9.32144 6.49717 9.59917C6.47245 9.61198 6.4481 9.62489 6.42356 9.63789C5.86808 9.92889 5.3364 10.2632 4.83348 10.6378L4.83329 10.6379L2.35349 7.7129C8.03709 3.42676 15.9721 3.42969 21.6469 7.72169L19.1703 10.6404Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(WifiMediumSolid);
export default ForwardRef;