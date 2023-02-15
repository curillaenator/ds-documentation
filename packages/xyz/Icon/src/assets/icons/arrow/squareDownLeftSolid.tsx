import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SquareDownLeftSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21 19.5V4.5C20.9995 4.10231 20.8414 3.72105 20.5602 3.43984C20.279 3.15864 19.8977 3.00045 19.5 3H4.5C4.10231 3.00045 3.72105 3.15864 3.43984 3.43984C3.15864 3.72105 3.00045 4.10231 3 4.5V19.5C3.00045 19.8977 3.15864 20.279 3.43984 20.5602C3.72105 20.8414 4.10231 20.9995 4.5 21H19.5C19.8977 20.9995 20.279 20.8414 20.5602 20.5602C20.8414 20.279 20.9995 19.8977 21 19.5ZM15.1553 9.90536L11.1857 13.875H13.875C14.0739 13.875 14.2647 13.954 14.4053 14.0947C14.546 14.2353 14.625 14.4261 14.625 14.625C14.625 14.8239 14.546 15.0147 14.4053 15.1553C14.2647 15.296 14.0739 15.375 13.875 15.375H9.375C9.36939 15.375 9.36397 15.3743 9.35838 15.3742C9.3394 15.3737 9.32041 15.3731 9.30148 15.3713C9.28848 15.37 9.27585 15.3677 9.26305 15.3658C9.25164 15.364 9.2402 15.3628 9.22887 15.3605C9.21515 15.3578 9.20185 15.3541 9.18842 15.3506C9.17816 15.348 9.16784 15.3458 9.15768 15.3428C9.1448 15.3388 9.13235 15.3341 9.11978 15.3295C9.10925 15.3257 9.09864 15.3223 9.08826 15.318C9.07675 15.3132 9.06569 15.3076 9.05448 15.3023C9.04348 15.2971 9.03239 15.2922 9.02161 15.2865C9.01108 15.2808 9.00108 15.2744 8.99085 15.2683C8.98004 15.2618 8.96912 15.2557 8.95858 15.2487C8.94764 15.2413 8.93732 15.2332 8.92679 15.2253C8.91772 15.2185 8.90839 15.2122 8.89956 15.2049C8.88245 15.1909 8.86613 15.176 8.85034 15.1605C8.84851 15.1587 8.84649 15.1572 8.84469 15.1554C8.84312 15.1538 8.84182 15.1521 8.84027 15.1505C8.82452 15.1344 8.80937 15.1179 8.79511 15.1005C8.7876 15.0914 8.78108 15.0818 8.77408 15.0724C8.76645 15.0622 8.75851 15.0521 8.75139 15.0415C8.74409 15.0306 8.73775 15.0193 8.73109 15.0081C8.72523 14.9983 8.71906 14.9887 8.71365 14.9786C8.70757 14.9672 8.70241 14.9555 8.69696 14.944C8.69197 14.9333 8.68666 14.9229 8.68215 14.9121C8.6775 14.9008 8.67375 14.8894 8.66966 14.878C8.66547 14.8662 8.66099 14.8547 8.65736 14.8428C8.65388 14.8313 8.65133 14.8196 8.64841 14.808C8.64538 14.7959 8.64198 14.7839 8.63955 14.7717C8.63685 14.7581 8.63523 14.7443 8.63329 14.7306C8.63181 14.7201 8.62978 14.7098 8.62874 14.6991C8.6263 14.6744 8.625 14.6496 8.625 14.6248V10.125C8.625 9.92609 8.70401 9.73532 8.84467 9.59467C8.98532 9.45402 9.17608 9.375 9.375 9.375C9.57391 9.375 9.76467 9.45402 9.90533 9.59467C10.046 9.73532 10.125 9.92609 10.125 10.125V12.8143L14.0947 8.84463C14.1643 8.77499 14.247 8.71975 14.338 8.68206C14.429 8.64437 14.5265 8.62498 14.625 8.62498C14.7235 8.62498 14.8211 8.64439 14.912 8.68208C15.003 8.71978 15.0857 8.77503 15.1554 8.84468C15.225 8.91433 15.2802 8.99701 15.3179 9.08801C15.3556 9.17901 15.375 9.27654 15.375 9.37503C15.375 9.47352 15.3556 9.57105 15.3179 9.66205C15.2802 9.75304 15.225 9.83572 15.1553 9.90536L15.1553 9.90536Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(SquareDownLeftSolid);
export default ForwardRef;