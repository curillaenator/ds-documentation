import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LineUpSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M11.4695 6.21991C11.487 6.20233 11.5055 6.18565 11.5248 6.16988C11.5328 6.16328 11.5413 6.15759 11.5495 6.15138C11.5608 6.14287 11.5719 6.1341 11.5838 6.12621C11.594 6.11936 11.6046 6.11343 11.6152 6.10714C11.6256 6.10087 11.6359 6.0943 11.6466 6.08853C11.6575 6.08272 11.6687 6.07777 11.6798 6.07253C11.6909 6.06729 11.7018 6.0618 11.7131 6.05708C11.7239 6.05262 11.735 6.04903 11.7459 6.04507C11.7581 6.0407 11.77 6.03607 11.7824 6.03232C11.7935 6.02897 11.8046 6.02655 11.8158 6.02373C11.8283 6.02057 11.8407 6.01708 11.8535 6.01453C11.8666 6.01195 11.8798 6.01039 11.8929 6.00851C11.904 6.00693 11.9148 6.00483 11.926 6.00373C11.9506 6.00131 11.9753 6 12 6C12.0247 6 12.0494 6.0013 12.074 6.00373C12.0852 6.00483 12.096 6.00693 12.1071 6.00851C12.1203 6.01039 12.1334 6.01194 12.1465 6.01453C12.1593 6.01707 12.1717 6.02057 12.1842 6.02373C12.1954 6.02654 12.2065 6.02897 12.2176 6.03232C12.23 6.03607 12.2419 6.04069 12.2541 6.04507C12.265 6.04903 12.2761 6.05262 12.2869 6.05708C12.2982 6.0618 12.3091 6.06729 12.3202 6.07253C12.3313 6.07777 12.3425 6.08272 12.3534 6.08853C12.3642 6.0943 12.3744 6.10087 12.3848 6.10714C12.3954 6.11343 12.406 6.11936 12.4162 6.1262C12.4281 6.1341 12.4392 6.14287 12.4505 6.15138C12.4587 6.15758 12.4672 6.16328 12.4752 6.16987C12.4945 6.18567 12.513 6.20235 12.5306 6.21998L19.2803 12.9697C19.4208 13.1104 19.4997 13.3011 19.4997 13.4999C19.4996 13.6987 19.4206 13.8894 19.28 14.03C19.1394 14.1706 18.9487 14.2496 18.7499 14.2497C18.5511 14.2497 18.3604 14.1708 18.2197 14.0303L12.75 8.56064V21C12.75 21.1989 12.671 21.3897 12.5303 21.5303C12.3897 21.671 12.1989 21.75 12 21.75C11.8011 21.75 11.6103 21.671 11.4697 21.5303C11.329 21.3897 11.25 21.1989 11.25 21V8.56064L5.78032 14.0303C5.63964 14.1708 5.44892 14.2497 5.2501 14.2497C5.05127 14.2496 4.8606 14.1706 4.72001 14.03C4.57942 13.8894 4.50041 13.6987 4.50035 13.4999C4.50029 13.3011 4.57918 13.1104 4.71968 12.9697L11.4695 6.21991ZM21 3.75C21 3.55109 20.921 3.36032 20.7803 3.21967C20.6397 3.07902 20.4489 3 20.25 3H3.75C3.55109 3 3.36032 3.07902 3.21967 3.21967C3.07902 3.36032 3 3.55109 3 3.75C3 3.94891 3.07902 4.13968 3.21967 4.28033C3.36032 4.42098 3.55109 4.5 3.75 4.5H20.25C20.4489 4.5 20.6397 4.42098 20.7803 4.28033C20.921 4.13968 21 3.94891 21 3.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(LineUpSolid);
export default ForwardRef;