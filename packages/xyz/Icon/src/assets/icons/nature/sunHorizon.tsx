import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SunHorizon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.69947 5.53159L7.98193 3.79932M4.03164 10.1986L2.29938 9.48104M19.9685 10.1986L21.7007 9.48104M15.3006 5.53159L16.0181 3.79932M22.5 14.9998H1.5M19.5 18.7498H4.5M6.57722 14.9998C6.34705 14.1647 6.31285 13.2878 6.47728 12.4373C6.6417 11.5869 7.00032 10.7859 7.52517 10.0968C8.05002 9.40767 8.72692 8.8491 9.50311 8.4646C10.2793 8.08009 11.1338 7.88004 12 7.88004C12.8662 7.88004 13.7207 8.08009 14.4969 8.46459C15.2731 8.8491 15.95 9.40767 16.4748 10.0968C16.9997 10.7859 17.3583 11.5868 17.5227 12.4373C17.6872 13.2878 17.653 14.1647 17.4228 14.9998'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(SunHorizon);
export default ForwardRef;
