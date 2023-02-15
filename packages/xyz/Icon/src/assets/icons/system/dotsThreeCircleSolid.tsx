import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DotsThreeCircleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.747 9.41506 20.7188 6.93684 18.891 5.10901C17.0632 3.28118 14.5849 2.25299 12 2.25ZM7.5 13.125C7.2775 13.125 7.05999 13.059 6.87499 12.9354C6.68998 12.8118 6.54579 12.6361 6.46064 12.4305C6.37549 12.225 6.35321 11.9988 6.39662 11.7805C6.44003 11.5623 6.54717 11.3618 6.70451 11.2045C6.86184 11.0472 7.0623 10.94 7.28053 10.8966C7.49876 10.8532 7.72496 10.8755 7.93052 10.9606C8.13609 11.0458 8.31179 11.19 8.43541 11.375C8.55902 11.56 8.625 11.7775 8.625 12C8.62499 12.2984 8.50646 12.5845 8.29548 12.7955C8.08451 13.0065 7.79837 13.125 7.5 13.125ZM12 13.125C11.7775 13.125 11.56 13.059 11.375 12.9354C11.19 12.8118 11.0458 12.6361 10.9606 12.4305C10.8755 12.225 10.8532 11.9988 10.8966 11.7805C10.94 11.5623 11.0472 11.3618 11.2045 11.2045C11.3618 11.0472 11.5623 10.94 11.7805 10.8966C11.9988 10.8532 12.225 10.8755 12.4305 10.9606C12.6361 11.0458 12.8118 11.19 12.9354 11.375C13.059 11.56 13.125 11.7775 13.125 12C13.125 12.2984 13.0065 12.5845 12.7955 12.7955C12.5845 13.0065 12.2984 13.125 12 13.125ZM16.5 13.125C16.2775 13.125 16.06 13.059 15.875 12.9354C15.69 12.8118 15.5458 12.6361 15.4606 12.4305C15.3755 12.225 15.3532 11.9988 15.3966 11.7805C15.44 11.5623 15.5472 11.3618 15.7045 11.2045C15.8618 11.0472 16.0623 10.94 16.2805 10.8966C16.4988 10.8532 16.725 10.8755 16.9305 10.9606C17.1361 11.0458 17.3118 11.19 17.4354 11.375C17.559 11.56 17.625 11.7775 17.625 12C17.625 12.2984 17.5065 12.5845 17.2955 12.7955C17.0845 13.0065 16.7984 13.125 16.5 13.125Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(DotsThreeCircleSolid);
export default ForwardRef;
