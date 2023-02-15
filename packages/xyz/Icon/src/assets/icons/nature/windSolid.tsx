import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const WindSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M17.25 17.25C17.2499 17.954 17.0023 18.6355 16.5505 19.1753C16.0986 19.7152 15.4714 20.079 14.7784 20.203C14.0855 20.3271 13.371 20.2036 12.7599 19.854C12.1488 19.5045 11.6801 18.9512 11.4358 18.291C11.4016 18.1987 11.3859 18.1005 11.3897 18.0021C11.3935 17.9036 11.4166 17.8069 11.4577 17.7174C11.4989 17.6279 11.5573 17.5474 11.6295 17.4805C11.7018 17.4136 11.7865 17.3615 11.8789 17.3274C11.9712 17.2932 12.0694 17.2775 12.1679 17.2813C12.2663 17.2851 12.363 17.3082 12.4525 17.3493C12.542 17.3905 12.6225 17.4488 12.6894 17.5211C12.7563 17.5934 12.8084 17.6781 12.8426 17.7705C12.9376 18.0276 13.1013 18.2538 13.3158 18.4244C13.5304 18.595 13.7876 18.7036 14.0595 18.7384C14.3314 18.7732 14.6076 18.7328 14.8582 18.6216C15.1088 18.5104 15.3241 18.3327 15.4808 18.1078C15.6375 17.8828 15.7295 17.6193 15.747 17.3457C15.7644 17.0721 15.7066 16.799 15.5797 16.556C15.4529 16.313 15.2618 16.1094 15.0274 15.9673C14.793 15.8252 14.5241 15.75 14.25 15.75H3.75C3.55109 15.75 3.36032 15.671 3.21967 15.5303C3.07902 15.3897 3 15.1989 3 15C3 14.8011 3.07902 14.6103 3.21967 14.4697C3.36032 14.329 3.55109 14.25 3.75 14.25H14.25C15.0454 14.2509 15.8079 14.5673 16.3703 15.1297C16.9327 15.6921 17.2491 16.4546 17.25 17.25ZM11.25 9.75C11.7981 9.74988 12.3357 9.5996 12.8044 9.31547C13.2732 9.03135 13.6551 8.62423 13.9088 8.13835C14.1624 7.65246 14.2781 7.10636 14.2433 6.55935C14.2084 6.01235 14.0244 5.48533 13.7112 5.03554C13.3979 4.58575 12.9675 4.23038 12.4665 4.008C11.9655 3.78562 11.4132 3.70474 10.8695 3.77415C10.3258 3.84355 9.81147 4.06059 9.38242 4.40168C8.95337 4.74278 8.62597 5.1949 8.43576 5.70896C8.40158 5.80133 8.38593 5.89953 8.3897 5.99795C8.39347 6.09637 8.41659 6.19308 8.45773 6.28257C8.49888 6.37206 8.55725 6.45256 8.62951 6.51949C8.70177 6.58642 8.7865 6.63846 8.87888 6.67264C8.97125 6.70682 9.06945 6.72247 9.16787 6.7187C9.26629 6.71493 9.363 6.69181 9.45249 6.65067C9.54198 6.60952 9.62248 6.55115 9.68941 6.47889C9.75634 6.40663 9.80838 6.3219 9.84256 6.22952C9.93761 5.9724 10.1013 5.74624 10.3158 5.5756C10.5304 5.40496 10.7876 5.29636 11.0595 5.26159C11.3314 5.22683 11.6076 5.26723 11.8582 5.3784C12.1088 5.48958 12.3241 5.66729 12.4808 5.89222C12.6375 6.11715 12.7295 6.38071 12.747 6.65429C12.7644 6.92786 12.7066 7.20098 12.5797 7.44399C12.4529 7.687 12.2618 7.89061 12.0274 8.0327C11.793 8.1748 11.5241 8.24995 11.25 8.25H2.25C2.05109 8.25 1.86032 8.32902 1.71967 8.46967C1.57902 8.61032 1.5 8.80109 1.5 9C1.5 9.19891 1.57902 9.38968 1.71967 9.53033C1.86032 9.67098 2.05109 9.75 2.25 9.75H11.25ZM19.5 6.75C18.8874 6.75161 18.2898 6.93998 17.787 7.28999C17.2841 7.63999 16.9 8.13499 16.6858 8.70895C16.6516 8.80133 16.6359 8.89953 16.6397 8.99795C16.6435 9.09637 16.6666 9.19308 16.7077 9.28257C16.7489 9.37206 16.8072 9.45256 16.8795 9.51949C16.9518 9.58642 17.0365 9.63846 17.1289 9.67264C17.2212 9.70682 17.3194 9.72247 17.4179 9.7187C17.5163 9.71493 17.613 9.69181 17.7025 9.65067C17.792 9.60952 17.8725 9.55115 17.9394 9.47889C18.0063 9.40663 18.0584 9.3219 18.0926 9.22952C18.1876 8.9724 18.3513 8.74624 18.5658 8.5756C18.7804 8.40496 19.0376 8.29636 19.3095 8.26159C19.5814 8.22683 19.8576 8.26723 20.1082 8.3784C20.3588 8.48958 20.5741 8.66729 20.7308 8.89222C20.8875 9.11715 20.9795 9.38071 20.997 9.65428C21.0144 9.92786 20.9566 10.201 20.8297 10.444C20.7029 10.687 20.5118 10.8906 20.2774 11.0327C20.043 11.1748 19.7741 11.25 19.5 11.25H3C2.80109 11.25 2.61032 11.329 2.46967 11.4697C2.32902 11.6103 2.25 11.8011 2.25 12C2.25 12.1989 2.32902 12.3897 2.46967 12.5303C2.61032 12.671 2.80109 12.75 3 12.75H19.5C20.2956 12.75 21.0587 12.4339 21.6213 11.8713C22.1839 11.3087 22.5 10.5457 22.5 9.75C22.5 8.95435 22.1839 8.19129 21.6213 7.62868C21.0587 7.06607 20.2956 6.75 19.5 6.75Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(WindSolid);
export default ForwardRef;