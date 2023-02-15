import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ThermometerSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M19.875 4.875C19.3558 4.875 18.8483 5.02895 18.4166 5.31739C17.985 5.60583 17.6485 6.0158 17.4498 6.49546C17.2511 6.97511 17.1992 7.50291 17.3004 8.01211C17.4017 8.52131 17.6517 8.98904 18.0188 9.35616C18.386 9.72327 18.8537 9.97328 19.3629 10.0746C19.8721 10.1758 20.3999 10.1239 20.8795 9.92518C21.3592 9.7265 21.7692 9.39005 22.0576 8.95837C22.3461 8.52669 22.5 8.01918 22.5 7.5C22.4992 6.80405 22.2224 6.13682 21.7303 5.64471C21.2382 5.15259 20.571 4.87578 19.875 4.875ZM19.875 8.625C19.6525 8.625 19.435 8.55902 19.25 8.4354C19.065 8.31179 18.9208 8.13609 18.8356 7.93052C18.7505 7.72495 18.7282 7.49875 18.7716 7.28052C18.815 7.06229 18.9222 6.86184 19.0795 6.7045C19.2368 6.54717 19.4373 6.44002 19.6555 6.39662C19.8738 6.35321 20.1 6.37549 20.3055 6.46064C20.5111 6.54578 20.6868 6.68998 20.8104 6.87498C20.934 7.05999 21 7.2775 21 7.5C20.9997 7.79827 20.881 8.08422 20.6701 8.29513C20.4592 8.50603 20.1733 8.62467 19.875 8.625ZM15 13.432V4.5C15 3.50544 14.6049 2.55161 13.9017 1.84835C13.1984 1.14509 12.2446 0.75 11.25 0.75C10.2554 0.75 9.30161 1.14509 8.59835 1.84835C7.89509 2.55161 7.5 3.50544 7.5 4.5V13.432C6.65089 14.1914 6.05239 15.1908 5.7837 16.2979C5.51501 17.405 5.58879 18.5675 5.99528 19.6317C6.40177 20.6959 7.12182 21.6116 8.06013 22.2577C8.99844 22.9037 10.1108 23.2496 11.25 23.2496C12.3892 23.2496 13.5016 22.9037 14.4399 22.2577C15.3782 21.6116 16.0982 20.6959 16.5047 19.6317C16.9112 18.5675 16.985 17.405 16.7163 16.2979C16.4476 15.1908 15.8491 14.1914 15 13.432ZM11.25 2.25C11.8465 2.25067 12.4184 2.48794 12.8402 2.90975C13.2621 3.33157 13.4993 3.90347 13.5 4.5V7.5H9V4.5C9.00068 3.90347 9.23795 3.33157 9.65976 2.90975C10.0816 2.48794 10.6535 2.25067 11.25 2.25Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ThermometerSolid);
export default ForwardRef;