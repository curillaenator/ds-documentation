import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Book = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 126 168' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M1 13C1 6.37259 6.37258 1 13 1H113C119.627 1 125 6.37258 125 13V155C125 161.627 119.627 167 113 167H13C6.37259 167 1 161.627 1 155V13Z'
      fill='#6BD087'
      fillOpacity={0.25}
      stroke='#6BD087'
      strokeWidth={2}
    />
    <path d='M22 2V166' stroke='#F2994A' strokeWidth={2} />
    <path
      d='M100 21H46C43.7909 21 42 22.7909 42 25V64C42 66.2091 43.7909 68 46 68H100C102.209 68 104 66.2091 104 64V25C104 22.7909 102.209 21 100 21Z'
      fill='#C8E2FB'
      stroke='#469FF1'
      strokeWidth={2}
    />
  </svg>
);

const ForwardRef = forwardRef(Book);
export default ForwardRef;
