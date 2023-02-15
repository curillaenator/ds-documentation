import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TrainSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.625 2.25H6.375C5.57963 2.25091 4.8171 2.56727 4.25468 3.12968C3.69227 3.6921 3.37591 4.45463 3.375 5.25V17.25C3.37591 18.0454 3.69227 18.8079 4.25468 19.3703C4.8171 19.9327 5.57963 20.2491 6.375 20.25H7.49998L6.14996 22.05C6.03062 22.2092 5.97938 22.4092 6.00753 22.6061C6.03567 22.803 6.14088 22.9807 6.30002 23.1C6.45916 23.2194 6.65919 23.2706 6.85611 23.2425C7.05302 23.2143 7.23069 23.1091 7.35004 22.95L9.37502 20.25H14.625L16.65 22.95C16.7693 23.1091 16.947 23.2143 17.1439 23.2425C17.3408 23.2706 17.5408 23.2194 17.7 23.1C17.8591 22.9807 17.9643 22.803 17.9925 22.6061C18.0206 22.4092 17.9694 22.2092 17.85 22.05L16.5 20.25H17.625C18.4204 20.2491 19.1829 19.9327 19.7453 19.3703C20.3077 18.8079 20.6241 18.0454 20.625 17.25V5.25C20.6241 4.45463 20.3077 3.6921 19.7453 3.12968C19.1829 2.56727 18.4204 2.25091 17.625 2.25ZM7.875 17.25C7.6525 17.25 7.43499 17.184 7.24998 17.0604C7.06498 16.9368 6.92078 16.7611 6.83564 16.5555C6.75049 16.3499 6.72821 16.1238 6.77162 15.9055C6.81502 15.6873 6.92217 15.4868 7.0795 15.3295C7.23684 15.1722 7.43729 15.065 7.65552 15.0216C7.87375 14.9782 8.09995 15.0005 8.30552 15.0856C8.51109 15.1708 8.68679 15.315 8.8104 15.5C8.93402 15.685 9 15.9025 9 16.125C9 16.4234 8.88147 16.7095 8.6705 16.9205C8.45952 17.1315 8.17337 17.25 7.875 17.25ZM11.25 11.25H4.875V7.5H11.25V11.25ZM16.125 17.25C15.9025 17.25 15.685 17.184 15.5 17.0604C15.315 16.9368 15.1708 16.7611 15.0856 16.5555C15.0005 16.3499 14.9782 16.1238 15.0216 15.9055C15.065 15.6873 15.1722 15.4868 15.3295 15.3295C15.4868 15.1722 15.6873 15.065 15.9055 15.0216C16.1238 14.9782 16.35 15.0005 16.5555 15.0856C16.7611 15.1708 16.9368 15.315 17.0604 15.5C17.184 15.685 17.25 15.9025 17.25 16.125C17.25 16.4234 17.1315 16.7095 16.9205 16.9205C16.7095 17.1315 16.4234 17.25 16.125 17.25ZM19.125 11.25H12.75V7.5H19.125V11.25Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(TrainSolid);
export default ForwardRef;
