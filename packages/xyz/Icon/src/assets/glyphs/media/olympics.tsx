import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Olympics = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 168 126' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M13 125C6.37259 125 1.00001 119.627 1.00001 113L1 13C1 6.3726 6.37258 1.00001 13 1.00001L155 1C161.627 1 167 6.37259 167 13V113C167 119.627 161.627 125 155 125H13Z'
      fill='#E3F1FD'
      stroke='#469FF1'
      strokeWidth={2}
    />
    <path
      d='M40 63C51.0457 63 60 54.0457 60 43C60 31.9543 51.0457 23 40 23C28.9543 23 20 31.9543 20 43C20 54.0457 28.9543 63 40 63Z'
      stroke='#469FF1'
      strokeWidth={2}
    />
    <path
      d='M84 63C95.0457 63 104 54.0457 104 43C104 31.9543 95.0457 23 84 23C72.9543 23 64 31.9543 64 43C64 54.0457 72.9543 63 84 63Z'
      stroke='#343A45'
      strokeWidth={2}
    />
    <path
      d='M64 83C75.0457 83 84 74.0457 84 63C84 51.9543 75.0457 43 64 43C52.9543 43 44 51.9543 44 63C44 74.0457 52.9543 83 64 83Z'
      stroke='#F2994A'
      strokeWidth={2}
    />
    <path
      d='M128 63C139.046 63 148 54.0457 148 43C148 31.9543 139.046 23 128 23C116.954 23 108 31.9543 108 43C108 54.0457 116.954 63 128 63Z'
      stroke='#FF6476'
      strokeWidth={2}
    />
    <path
      d='M108 83C119.046 83 128 74.0457 128 63C128 51.9543 119.046 43 108 43C96.9543 43 88 51.9543 88 63C88 74.0457 96.9543 83 108 83Z'
      stroke='#6BD087'
      strokeWidth={2}
    />
    <path
      d='M104 96H64C61.7909 96 60 97.7909 60 100V108C60 110.209 61.7909 112 64 112H104C106.209 112 108 110.209 108 108V100C108 97.7909 106.209 96 104 96Z'
      fill='#C8E2FB'
      stroke='#469FF1'
      strokeWidth={2}
    />
  </svg>
);

const ForwardRef = forwardRef(Olympics);
export default ForwardRef;
