import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CurrencyEurSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M18.0534 17.7426C18.123 17.8123 18.1783 17.895 18.216 17.986C18.2536 18.077 18.273 18.1745 18.273 18.273C18.273 18.3715 18.2536 18.469 18.2159 18.56C18.1782 18.651 18.1229 18.7337 18.0533 18.8033C17.0496 19.807 15.7817 20.5053 14.3969 20.817C13.0121 21.1286 11.5673 21.041 10.2303 20.5641C8.89341 20.0872 7.71925 19.2408 6.8443 18.1231C5.96934 17.0054 5.42953 15.6623 5.28758 14.25H3.75C3.55109 14.25 3.36032 14.171 3.21967 14.0303C3.07902 13.8897 3 13.6989 3 13.5C3 13.3011 3.07902 13.1103 3.21967 12.9697C3.36032 12.829 3.55109 12.75 3.75 12.75H5.25V11.25H3.75C3.55109 11.25 3.36032 11.171 3.21967 11.0303C3.07902 10.8897 3 10.6989 3 10.5C3 10.3011 3.07902 10.1103 3.21967 9.96967C3.36032 9.82902 3.55109 9.75 3.75 9.75H5.28758C5.42953 8.33768 5.96934 6.99464 6.8443 5.87694C7.71925 4.75924 8.89341 3.91278 10.2303 3.43591C11.5673 2.95905 13.0121 2.87136 14.3969 3.18305C15.7817 3.49473 17.0496 4.19299 18.0533 5.19667C18.123 5.26629 18.1783 5.34897 18.2161 5.43998C18.2538 5.53098 18.2733 5.62854 18.2733 5.72707C18.2734 5.8256 18.254 5.92317 18.2163 6.01421C18.1786 6.10524 18.1234 6.18796 18.0537 6.25764C17.984 6.32732 17.9013 6.38258 17.8103 6.42028C17.7193 6.45798 17.6217 6.47737 17.5232 6.47735C17.4246 6.47733 17.3271 6.45789 17.2361 6.42015C17.1451 6.38241 17.0624 6.32711 16.9927 6.2574C16.199 5.46351 15.1984 4.90828 14.1047 4.65485C13.0111 4.40142 11.8682 4.45997 10.8062 4.82383C9.74415 5.18769 8.80552 5.84226 8.09705 6.71311C7.38857 7.58396 6.93868 8.63614 6.79852 9.75H12.75C12.9489 9.75 13.1397 9.82902 13.2803 9.96967C13.421 10.1103 13.5 10.3011 13.5 10.5C13.5 10.6989 13.421 10.8897 13.2803 11.0303C13.1397 11.171 12.9489 11.25 12.75 11.25H6.75V12.75H11.25C11.4489 12.75 11.6397 12.829 11.7803 12.9697C11.921 13.1103 12 13.3011 12 13.5C12 13.6989 11.921 13.8897 11.7803 14.0303C11.6397 14.171 11.4489 14.25 11.25 14.25H6.79852C6.93868 15.3639 7.38857 16.416 8.09705 17.2869C8.80552 18.1577 9.74415 18.8123 10.8062 19.1762C11.8682 19.54 13.0111 19.5986 14.1047 19.3452C15.1984 19.0917 16.199 18.5365 16.9927 17.7426C17.1334 17.602 17.3242 17.523 17.5231 17.523C17.722 17.523 17.9127 17.602 18.0534 17.7426Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CurrencyEurSolid);
export default ForwardRef;
