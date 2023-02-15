import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const PlayCircleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.747 9.41506 20.7188 6.93684 18.891 5.10901C17.0632 3.28118 14.5849 2.25299 12 2.25ZM15.416 12.624L10.916 15.624C10.8031 15.6995 10.6718 15.7428 10.5362 15.7494C10.4005 15.756 10.2657 15.7257 10.1459 15.6616C10.0262 15.5975 9.92612 15.5021 9.85639 15.3856C9.78665 15.2691 9.74988 15.1358 9.75 15V9C9.74988 8.8642 9.78665 8.73092 9.85639 8.6144C9.92612 8.49787 10.0262 8.40248 10.1459 8.3384C10.2657 8.27433 10.4005 8.24398 10.5362 8.2506C10.6718 8.25721 10.8031 8.30055 10.916 8.37598L15.416 11.376C15.5188 11.4445 15.603 11.5373 15.6613 11.6461C15.7195 11.755 15.75 11.8765 15.75 12C15.75 12.1235 15.7195 12.245 15.6613 12.3539C15.603 12.4627 15.5188 12.5555 15.416 12.624Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(PlayCircleSolid);
export default ForwardRef;