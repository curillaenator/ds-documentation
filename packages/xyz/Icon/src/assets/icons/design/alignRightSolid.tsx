import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const AlignRightSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21.0005 3.74927V20.2493C21.0005 20.4482 20.9215 20.6389 20.7809 20.7796C20.6402 20.9202 20.4495 20.9993 20.2505 20.9993C20.0516 20.9993 19.8609 20.9202 19.7202 20.7796C19.5796 20.6389 19.5005 20.4482 19.5005 20.2493V3.74927C19.5005 3.55036 19.5796 3.35959 19.7202 3.21894C19.8609 3.07829 20.0516 2.99927 20.2505 2.99927C20.4495 2.99927 20.6402 3.07829 20.7809 3.21894C20.9215 3.35959 21.0005 3.55036 21.0005 3.74927ZM16.5 4.49973H7.5C7.10231 4.50018 6.72105 4.65836 6.43984 4.93957C6.15864 5.22077 6.00045 5.60204 6 5.99973V9.74973C6.00045 10.1474 6.15864 10.5287 6.43984 10.8099C6.72105 11.0911 7.10231 11.2493 7.5 11.2497H16.5C16.8977 11.2493 17.279 11.0911 17.5602 10.8099C17.8414 10.5287 17.9995 10.1474 18 9.74973V5.99973C17.9995 5.60204 17.8414 5.22077 17.5602 4.93957C17.279 4.65836 16.8977 4.50018 16.5 4.49973ZM16.5 12.7497H3.75C3.35231 12.7502 2.97105 12.9084 2.68984 13.1896C2.40864 13.4708 2.25045 13.852 2.25 14.2497V17.9997C2.25045 18.3974 2.40864 18.7787 2.68984 19.0599C2.97105 19.3411 3.35231 19.4993 3.75 19.4997H16.5C16.8977 19.4993 17.279 19.3411 17.5602 19.0599C17.8414 18.7787 17.9995 18.3974 18 17.9997V14.2497C17.9995 13.852 17.8414 13.4708 17.5602 13.1896C17.279 12.9084 16.8977 12.7502 16.5 12.7497Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(AlignRightSolid);
export default ForwardRef;
