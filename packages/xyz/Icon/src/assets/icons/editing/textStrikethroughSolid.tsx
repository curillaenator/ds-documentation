import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const TextStrikethroughSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M21 12C21 12.0985 20.9806 12.196 20.9429 12.287C20.9052 12.378 20.85 12.4607 20.7803 12.5303C20.7107 12.6 20.628 12.6552 20.537 12.6929C20.446 12.7306 20.3485 12.75 20.25 12.75H16.4935C17.3548 13.4167 18 14.3627 18 15.75C18 17.0006 17.3424 18.159 16.1482 19.0119C15.0305 19.8103 13.5573 20.25 12 20.25C10.4427 20.25 8.96947 19.8103 7.85179 19.0119C6.65762 18.159 6 17.0006 6 15.75C6 15.5511 6.07902 15.3603 6.21967 15.2197C6.36032 15.079 6.55109 15 6.75 15C6.94891 15 7.13968 15.079 7.28033 15.2197C7.42098 15.3603 7.5 15.5511 7.5 15.75C7.5 17.3762 9.56076 18.75 12 18.75C14.4392 18.75 16.5 17.3762 16.5 15.75C16.5 14.3574 15.5118 13.5392 12.8657 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H12.9599C12.9627 11.25 12.9656 11.25 12.9684 11.25H20.25C20.3485 11.25 20.446 11.2694 20.537 11.3071C20.628 11.3448 20.7107 11.4 20.7803 11.4697C20.85 11.5393 20.9052 11.622 20.9429 11.713C20.9806 11.804 21 11.9015 21 12ZM7.15617 9.75046C7.27471 9.75037 7.39153 9.72221 7.49709 9.66828C7.60264 9.61435 7.69392 9.53619 7.76345 9.44019C7.83298 9.3442 7.87879 9.2331 7.89712 9.11599C7.91545 8.99888 7.90578 8.8791 7.86891 8.76645C7.81565 8.59955 7.78958 8.42518 7.79169 8.25C7.79169 6.5397 9.60086 5.25 12 5.25C13.8281 5.25 15.386 6.02362 15.969 7.22086C16.0121 7.30947 16.0722 7.38872 16.146 7.45408C16.2197 7.51945 16.3056 7.56965 16.3987 7.60181C16.4918 7.63398 16.5904 7.64748 16.6887 7.64154C16.7871 7.6356 16.8833 7.61034 16.9719 7.5672C17.0605 7.52406 17.1397 7.4639 17.205 7.39013C17.2703 7.31637 17.3205 7.23046 17.3526 7.13731C17.3847 7.04416 17.3981 6.9456 17.3921 6.84725C17.3861 6.7489 17.3608 6.6527 17.3176 6.56415C16.4724 4.82831 14.4348 3.75 12 3.75C8.74571 3.75 6.29169 5.6846 6.29169 8.25C6.28987 8.58402 6.34119 8.9162 6.44371 9.2341C6.49297 9.38422 6.58837 9.51497 6.7163 9.60769C6.84423 9.70041 6.99817 9.75037 7.15617 9.75046Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(TextStrikethroughSolid);
export default ForwardRef;