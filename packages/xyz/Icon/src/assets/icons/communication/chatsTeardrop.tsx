import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ChatsTeardrop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.63401 16.4992C9.0998 17.8153 9.96203 18.9546 11.102 19.7604C12.242 20.5662 13.6038 20.9989 14.9998 20.9989H21.1873C21.3365 20.9989 21.4796 20.9397 21.5851 20.8342C21.6906 20.7287 21.7498 20.5856 21.7498 20.4364V14.2489C21.7498 12.5225 21.0883 10.8618 19.9014 9.60815C18.7145 8.35449 17.0924 7.60323 15.3686 7.50884M9.00001 16.4992H2.8125C2.66332 16.4992 2.52024 16.4399 2.41475 16.3345C2.30926 16.229 2.25 16.0859 2.25 15.9367V9.74919C2.25 7.95898 2.96116 6.2421 4.22703 4.97623C5.49289 3.71036 7.20978 2.99921 8.99999 2.99921C10.7902 2.99921 12.5071 3.71037 13.773 4.97624C15.0388 6.24211 15.75 7.95899 15.75 9.74921C15.75 11.5394 15.0388 13.2563 13.773 14.5222C12.5071 15.788 10.7902 16.4992 9.00001 16.4992Z'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(ChatsTeardrop);
export default ForwardRef;
