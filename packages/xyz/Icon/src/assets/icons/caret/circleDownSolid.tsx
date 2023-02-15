import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CircleDownSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.747 9.41506 20.7188 6.93684 18.891 5.10901C17.0632 3.28118 14.5849 2.25299 12 2.25ZM15.9324 11.3767L12.5574 15.1267C12.4871 15.2049 12.4011 15.2673 12.3051 15.3101C12.2091 15.3529 12.1051 15.375 12 15.375C11.8949 15.375 11.7909 15.3529 11.6949 15.3101C11.5989 15.2673 11.5129 15.2049 11.4426 15.1267L8.06763 11.3767C8.00169 11.3035 7.95081 11.2181 7.91791 11.1252C7.88501 11.0324 7.87072 10.9339 7.87587 10.8356C7.88101 10.7372 7.90549 10.6408 7.9479 10.5519C7.99032 10.4629 8.04983 10.3833 8.12305 10.3174C8.19627 10.2514 8.28175 10.2006 8.37462 10.1678C8.46749 10.1349 8.56593 10.1207 8.6643 10.1259C8.76268 10.131 8.85906 10.1556 8.94796 10.198C9.03685 10.2405 9.11651 10.3 9.18238 10.3733L12 13.5037L14.8176 10.3733C14.8835 10.3 14.9632 10.2405 15.0521 10.198C15.1409 10.1556 15.2373 10.131 15.3357 10.1259C15.4341 10.1207 15.5325 10.1349 15.6254 10.1678C15.7183 10.2006 15.8037 10.2514 15.877 10.3174C15.9502 10.3833 16.0097 10.4629 16.0521 10.5519C16.0945 10.6408 16.119 10.7372 16.1241 10.8356C16.1293 10.9339 16.115 11.0324 16.0821 11.1252C16.0492 11.2181 15.9983 11.3035 15.9324 11.3767Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CircleDownSolid);
export default ForwardRef;