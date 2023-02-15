import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LinkBreakSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.24994 6.75003V4.50003C8.24994 4.30112 8.32896 4.11035 8.46961 3.9697C8.61026 3.82905 8.80103 3.75003 8.99994 3.75003C9.19885 3.75003 9.38962 3.82905 9.53027 3.9697C9.67092 4.11035 9.74994 4.30112 9.74994 4.50003V6.75003C9.74994 6.94894 9.67092 7.13971 9.53027 7.28036C9.38962 7.42101 9.19885 7.50003 8.99994 7.50003C8.80103 7.50003 8.61026 7.42101 8.46961 7.28036C8.32896 7.13971 8.24994 6.94894 8.24994 6.75003ZM14.9999 16.5C14.801 16.5 14.6103 16.5791 14.4696 16.7197C14.329 16.8604 14.2499 17.0511 14.2499 17.25V19.5C14.2499 19.6989 14.329 19.8897 14.4696 20.0304C14.6103 20.171 14.801 20.25 14.9999 20.25C15.1988 20.25 15.3896 20.171 15.5303 20.0304C15.6709 19.8897 15.7499 19.6989 15.7499 19.5V17.25C15.7499 17.0511 15.6709 16.8604 15.5303 16.7197C15.3896 16.5791 15.1988 16.5 14.9999 16.5ZM4.49994 9.75003H6.74994C6.94885 9.75003 7.13962 9.67101 7.28027 9.53036C7.42092 9.38971 7.49994 9.19894 7.49994 9.00003C7.49994 8.80112 7.42092 8.61035 7.28027 8.4697C7.13962 8.32905 6.94885 8.25003 6.74994 8.25003H4.49994C4.30103 8.25003 4.11026 8.32905 3.96961 8.4697C3.82896 8.61035 3.74994 8.80112 3.74994 9.00003C3.74994 9.19894 3.82896 9.38971 3.96961 9.53036C4.11026 9.67101 4.30103 9.75003 4.49994 9.75003ZM19.4999 14.25H17.2499C17.051 14.25 16.8603 14.329 16.7196 14.4697C16.579 14.6104 16.4999 14.8011 16.4999 15C16.4999 15.1989 16.579 15.3897 16.7196 15.5304C16.8603 15.671 17.051 15.75 17.2499 15.75H19.4999C19.6988 15.75 19.8896 15.671 20.0303 15.5304C20.1709 15.3897 20.2499 15.1989 20.2499 15C20.2499 14.8011 20.1709 14.6104 20.0303 14.4697C19.8896 14.329 19.6988 14.25 19.4999 14.25ZM11.4319 16.8107L10.3713 17.8713C9.80871 18.4339 9.04565 18.75 8.25 18.75C7.45435 18.7501 6.69128 18.434 6.12866 17.8714C5.56604 17.3088 5.24995 16.5458 5.24994 15.7501C5.24992 14.9544 5.56597 14.1914 6.12857 13.6288L7.1893 12.5681C7.32996 12.4275 7.40899 12.2367 7.40901 12.0378C7.40902 11.8389 7.33002 11.6481 7.18939 11.5075C7.04875 11.3668 6.858 11.2878 6.65909 11.2878C6.46018 11.2877 6.26941 11.3667 6.12875 11.5074L5.06793 12.5681C4.22512 13.4123 3.75195 14.5565 3.75244 15.7494C3.75292 16.9423 4.22701 18.0862 5.07051 18.9296C5.91402 19.7731 7.0579 20.2472 8.25078 20.2476C9.44365 20.2481 10.5879 19.7749 11.432 18.932L12.4927 17.8714C12.6333 17.7307 12.7124 17.54 12.7124 17.341C12.7124 17.1421 12.6333 16.9513 12.4927 16.8107C12.352 16.67 12.1612 16.591 11.9623 16.591C11.7634 16.591 11.5726 16.67 11.4319 16.8107ZM17.8713 6.12866C18.4331 6.69172 18.7486 7.4546 18.7486 8.24996C18.7486 9.04533 18.4331 9.80823 17.8714 10.3713L16.8107 11.4319C16.741 11.5016 16.6858 11.5843 16.6481 11.6752C16.6104 11.7662 16.591 11.8638 16.591 11.9622C16.5909 12.0607 16.6103 12.1583 16.648 12.2493C16.6857 12.3403 16.7409 12.4229 16.8106 12.4926C16.8802 12.5622 16.9629 12.6175 17.0539 12.6552C17.1449 12.6929 17.2424 12.7123 17.3409 12.7123C17.5398 12.7123 17.7306 12.6333 17.8712 12.4927L18.932 11.4319C19.3502 11.0141 19.682 10.518 19.9083 9.97199C20.1347 9.42593 20.2513 8.84063 20.2514 8.24951C20.2516 7.65838 20.1352 7.07303 19.9091 6.52688C19.6829 5.98074 19.3513 5.4845 18.9334 5.06652C18.5154 4.64854 18.0191 4.31701 17.473 4.09086C16.9268 3.86472 16.3415 3.7484 15.7503 3.74854C15.1592 3.74867 14.5739 3.86528 14.0279 4.09168C13.4818 4.31808 12.9857 4.64985 12.5679 5.06802L11.5073 6.12866C11.3666 6.26932 11.2876 6.4601 11.2876 6.65903C11.2876 6.85795 11.3666 7.04873 11.5073 7.18939C11.648 7.33005 11.8387 7.40907 12.0377 7.40907C12.2366 7.40907 12.4274 7.33005 12.568 7.18939L13.6287 6.12875C14.1917 5.56693 14.9546 5.2514 15.75 5.25138C16.5453 5.25136 17.3083 5.56687 17.8713 6.12866Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(LinkBreakSolid);
export default ForwardRef;