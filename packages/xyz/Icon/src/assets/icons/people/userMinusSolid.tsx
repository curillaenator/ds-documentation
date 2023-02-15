import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UserMinusSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M16.5 6.00008H21C21.1989 6.00008 21.3897 5.92106 21.5303 5.78041C21.671 5.63975 21.75 5.44899 21.75 5.25008C21.75 5.05116 21.671 4.8604 21.5303 4.71975C21.3897 4.57909 21.1989 4.50008 21 4.50008H16.5C16.3011 4.50008 16.1103 4.57909 15.9697 4.71975C15.829 4.8604 15.75 5.05116 15.75 5.25008C15.75 5.44899 15.829 5.63975 15.9697 5.78041C16.1103 5.92106 16.3011 6.00008 16.5 6.00008Z'
      fill='currentColor'
    />
    <path
      d='M21.7439 19.8741C20.3445 17.4637 18.1033 15.6559 15.4514 14.7982C16.6786 14.0698 17.6427 12.9707 18.2049 11.6591C18.7672 10.3475 18.8984 8.89132 18.5798 7.50035H16.4999C15.9921 7.50045 15.4991 7.32872 15.1013 7.01309C14.7035 6.69747 14.4241 6.25652 14.3087 5.76197C14.1934 5.26743 14.2487 4.74838 14.4657 4.28928C14.6828 3.83018 15.0488 3.45802 15.5043 3.23336C14.7448 2.77142 13.9015 2.4641 13.0228 2.32905C12.1442 2.19401 11.2476 2.2339 10.3844 2.44644C9.52122 2.65898 8.70856 3.03997 7.99308 3.56754C7.27761 4.0951 6.67342 4.75883 6.21524 5.52061C5.75706 6.28238 5.45391 7.12717 5.32321 8.00646C5.1925 8.88575 5.23683 9.7822 5.45363 10.6443C5.67043 11.5064 6.05544 12.3172 6.58653 13.03C7.11762 13.7429 7.78433 14.3438 8.54836 14.7982C5.89656 15.6559 3.65545 17.4637 2.25599 19.8739C2.19002 19.9879 2.15525 20.1173 2.15515 20.249C2.15506 20.3807 2.18965 20.5101 2.25545 20.6242C2.32126 20.7383 2.41594 20.833 2.52999 20.8989C2.64404 20.9648 2.77343 20.9995 2.90514 20.9995L21.0948 20.9997C21.2265 20.9997 21.3559 20.965 21.47 20.8991C21.584 20.8332 21.6787 20.7385 21.7445 20.6244C21.8103 20.5103 21.8449 20.3809 21.8448 20.2492C21.8447 20.1174 21.8099 19.9881 21.7439 19.8741Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(UserMinusSolid);
export default ForwardRef;
