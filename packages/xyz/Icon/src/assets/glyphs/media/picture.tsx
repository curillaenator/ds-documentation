import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Picture = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 168 126' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M1 75.5097C5.80984 74.9265 11.1099 74.5933 17 74.4996C65.2401 73.7324 102.708 100.473 167 100.749V113C167 119.627 161.627 125 155 125H13C6.37259 125 1 119.627 1 113V75.5097Z'
      fill='#E3F1FD'
      stroke='#469FF1'
      strokeWidth={2}
    />
    <path
      d='M122 74.5005C80.9407 73.7584 54.2799 98.9395 1 100.445V113C1 119.627 6.37258 125 13 125H155C161.627 125 167 119.627 167 113V87.5C155.965 78.9851 142.428 74.8696 122 74.5005Z'
      fill='#C8E2FB'
      stroke='#469FF1'
      strokeWidth={2}
    />
    <path
      d='M13 125C6.37259 125 1.00001 119.627 1.00001 113L1 13C1 6.3726 6.37258 1.00001 13 1.00001L155 1C161.627 1 167 6.37259 167 13V113C167 119.627 161.627 125 155 125H13Z'
      stroke='#6BD087'
      strokeWidth={2}
    />
    <path
      d='M41 44C47.6274 44 53 38.6274 53 32C53 25.3726 47.6274 20 41 20C34.3726 20 29 25.3726 29 32C29 38.6274 34.3726 44 41 44Z'
      fill='#FBE0C9'
      stroke='#F2994A'
      strokeWidth={2}
    />
    <path
      d='M120.725 30.4691C122.37 24.6412 130.63 24.6412 132.275 30.4691L142.967 68.371C144.047 72.1995 141.171 76.0001 137.193 76.0001H115.807C111.829 76.0001 108.953 72.1995 110.033 68.371L120.725 30.4691Z'
      fill='#D3F1DB'
      stroke='#6BD087'
      strokeWidth={2}
    />
    <path d='M96 35L99 34L104.5 35L118.5 81.5L116 87.5H86L83 83.5L84.5 77L96 35Z' fill='#D3F1DB' />
    <path
      d='M94.7262 37.4266C96.3724 31.6026 104.628 31.6026 106.274 37.4266L118.694 81.3681C119.777 85.1973 116.9 89.0001 112.921 89.0001H88.0795C84.1003 89.0001 81.2234 85.1973 82.3058 81.3681L94.7262 37.4266Z'
      stroke='#6BD087'
      strokeWidth={2}
    />
    <path d='M101 68V100' stroke='#6BD087' strokeWidth={2} strokeLinecap='round' />
    <path d='M127 64V88' stroke='#6BD087' strokeWidth={2} strokeLinecap='round' />
  </svg>
);

const ForwardRef = forwardRef(Picture);
export default ForwardRef;
