import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Nut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M20.625 16.4375V7.56266C20.625 7.42984 20.5897 7.29941 20.5228 7.18469C20.4558 7.06998 20.3596 6.97509 20.244 6.90974L12.369 2.45865C12.2564 2.39501 12.1293 2.36157 12 2.36157C11.8706 2.36157 11.7435 2.39501 11.6309 2.45865L3.75593 6.90974C3.6403 6.97509 3.54411 7.06998 3.47717 7.18469C3.41024 7.29941 3.37497 7.42984 3.37497 7.56266V16.4375C3.37497 16.5703 3.41024 16.7007 3.47717 16.8154C3.54411 16.9301 3.6403 17.025 3.75593 17.0904L11.6309 21.5415C11.7435 21.6051 11.8706 21.6386 12 21.6386C12.1293 21.6386 12.2564 21.6051 12.369 21.5415L20.244 17.0904C20.3596 17.025 20.4558 16.9301 20.5228 16.8154C20.5897 16.7007 20.625 16.5703 20.625 16.4375Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.9999 15.375C13.8638 15.375 15.3749 13.864 15.3749 12C15.3749 10.136 13.8638 8.62501 11.9999 8.62501C10.136 8.62501 8.62493 10.136 8.62493 12C8.62493 13.864 10.136 15.375 11.9999 15.375Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(Nut);
export default ForwardRef;
