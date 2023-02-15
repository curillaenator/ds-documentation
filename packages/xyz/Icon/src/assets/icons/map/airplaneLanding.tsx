import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const AirplaneLanding = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9 20.25H22.5M2.25 9.72433V4.79028C2.25 4.67144 2.27824 4.55431 2.33239 4.44852C2.38655 4.34274 2.46506 4.25134 2.56147 4.18185C2.65787 4.11237 2.76941 4.06678 2.88689 4.04886C3.00437 4.03094 3.12443 4.04119 3.23717 4.07877L4.5 4.49971L6 7.31221L9 8.24971V4.79028C9 4.67144 9.02824 4.55431 9.08239 4.44852C9.13655 4.34274 9.21506 4.25134 9.31147 4.18185C9.40787 4.11237 9.51941 4.06678 9.63689 4.04886C9.75437 4.03094 9.87443 4.04119 9.98717 4.07877L11.25 4.49971L14.25 9.74972L18.8029 11.0144C19.4347 11.1899 19.9916 11.5676 20.3884 12.0896C20.7852 12.6116 21 13.2493 21 13.905V17.2497L4.44111 12.6132C3.81071 12.4367 3.25535 12.0588 2.85974 11.5373C2.46414 11.0157 2.25 10.379 2.25 9.72433Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(AirplaneLanding);
export default ForwardRef;
