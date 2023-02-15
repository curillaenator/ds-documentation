import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ScissorsSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.7875 10.6065C14.6751 10.4423 14.6326 10.2402 14.6693 10.0447C14.706 9.84922 14.8188 9.67628 14.9829 9.56395L21.3266 5.22353C21.4908 5.1112 21.6928 5.06869 21.8883 5.10535C22.0838 5.14201 22.2568 5.25483 22.3691 5.419C22.4814 5.58316 22.5239 5.78522 22.4873 5.98073C22.4506 6.17624 22.3378 6.34918 22.1736 6.46151L15.83 10.8019C15.7487 10.8576 15.6573 10.8967 15.5609 10.9169C15.4645 10.9372 15.365 10.9383 15.2682 10.9202C15.1714 10.902 15.0791 10.865 14.9966 10.8112C14.9141 10.7573 14.8431 10.6878 14.7875 10.6065V10.6065ZM22.3691 18.5819C22.3135 18.6632 22.2424 18.7328 22.1599 18.7866C22.0774 18.8404 21.9852 18.8775 21.8883 18.8956C21.7915 18.9138 21.6921 18.9127 21.5957 18.8924C21.4993 18.8721 21.4079 18.833 21.3266 18.7774L12.7501 12.9092L8.76515 15.6358C9.07118 16.4079 9.082 17.2658 8.79555 18.0455C8.5091 18.8251 7.94545 19.4719 7.21229 19.8623C6.47913 20.2526 5.62785 20.3592 4.82108 20.1617C4.0143 19.9641 3.30859 19.4762 2.83877 18.7913C2.36894 18.1063 2.16793 17.2723 2.27414 16.4485C2.38035 15.6247 2.78633 14.8689 3.41452 14.3255C4.04272 13.7821 4.84909 13.4892 5.67959 13.5027C6.51009 13.5162 7.3065 13.8352 7.91668 14.3988L11.4219 12.0005L7.91664 9.60216C7.30922 10.1618 6.51697 10.4782 5.69113 10.4909C4.86528 10.5036 4.06369 10.2117 3.43936 9.67098C2.81502 9.13025 2.41168 8.37854 2.30633 7.55935C2.20097 6.74016 2.40098 5.91086 2.86817 5.22976C3.33537 4.54865 4.03702 4.06345 4.8392 3.86676C5.64138 3.67008 6.4879 3.77569 7.21717 4.16344C7.94643 4.55119 8.50736 5.19392 8.79289 5.96893C9.07841 6.74395 9.06853 7.59697 8.76513 8.36516L22.1736 17.5394C22.3378 17.6517 22.4506 17.8246 22.4873 18.0202C22.5239 18.2157 22.4814 18.4177 22.3691 18.5819ZM7.50008 16.8754C7.50009 16.4416 7.34969 16.0213 7.0745 15.6859C6.79931 15.3506 6.41637 15.1211 5.99091 15.0364C5.56545 14.9518 5.12381 15.0173 4.74123 15.2218C4.35866 15.4262 4.05882 15.7571 3.89281 16.1578C3.72679 16.5586 3.70488 17.0045 3.8308 17.4196C3.95672 17.8348 4.22268 18.1934 4.58336 18.4344C4.94404 18.6754 5.37714 18.7839 5.80884 18.7414C6.24055 18.6988 6.64416 18.508 6.9509 18.2012C7.12556 18.0275 7.26403 17.8209 7.35829 17.5933C7.45256 17.3658 7.50075 17.1218 7.50008 16.8754ZM6.9509 8.45122C7.21312 8.18899 7.3917 7.8549 7.46405 7.49119C7.5364 7.12747 7.49926 6.75047 7.35735 6.40786C7.21544 6.06525 6.97511 5.77241 6.66677 5.56638C6.35843 5.36036 5.99591 5.25039 5.62507 5.25039C5.25423 5.25039 4.89172 5.36036 4.58337 5.56638C4.27503 5.77241 4.03471 6.06525 3.89279 6.40786C3.75088 6.75047 3.71375 7.12747 3.7861 7.49119C3.85844 7.8549 4.03702 8.18899 4.29925 8.45122C4.47251 8.62683 4.67894 8.76626 4.90654 8.86144C5.13414 8.95661 5.37838 9.00562 5.62507 9.00562C5.87177 9.00562 6.11601 8.95661 6.34361 8.86144C6.57121 8.76626 6.77763 8.62683 6.9509 8.45122Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(ScissorsSolid);
export default ForwardRef;