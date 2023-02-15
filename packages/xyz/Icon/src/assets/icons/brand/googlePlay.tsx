import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const GooglePlay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M3.95947 2.46013L16.4921 14.9927M3.95955 21.5408L16.492 9.00829M3.73253 21.0143C3.735 21.1453 3.77171 21.2735 3.83901 21.386C3.90631 21.4985 4.00187 21.5915 4.11619 21.6556C4.23052 21.7198 4.35963 21.7529 4.49073 21.7518C4.62182 21.7506 4.75033 21.7152 4.86351 21.6491L20.5982 12.6424C20.7143 12.5803 20.8114 12.4878 20.8791 12.3748C20.9468 12.2618 20.9825 12.1325 20.9825 12.0008C20.9825 11.8691 20.9468 11.7398 20.8791 11.6268C20.8114 11.5138 20.7143 11.4213 20.5982 11.3591L4.86351 2.35252C4.75033 2.28636 4.62182 2.25094 4.49073 2.24978C4.35963 2.24863 4.23052 2.28178 4.11619 2.34595C4.00187 2.41012 3.90631 2.50306 3.83901 2.61557C3.77171 2.72808 3.735 2.85623 3.73253 2.9873V21.0143Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(GooglePlay);
export default ForwardRef;
