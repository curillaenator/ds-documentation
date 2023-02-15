import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const DownUpSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M9.96962 17.4696L8.24999 19.1893V3C8.24999 2.80109 8.17097 2.61032 8.03032 2.46967C7.88967 2.32902 7.6989 2.25 7.49999 2.25C7.30108 2.25 7.11031 2.32902 6.96966 2.46967C6.82901 2.61032 6.74999 2.80109 6.74999 3V19.1893L5.03035 17.4696C4.88969 17.329 4.69891 17.25 4.49999 17.25C4.30106 17.25 4.11028 17.329 3.96962 17.4696C3.82896 17.6103 3.74994 17.8011 3.74994 18C3.74994 18.1989 3.82896 18.3897 3.96962 18.5304L6.96962 21.5304C6.97319 21.5339 6.97708 21.5369 6.9807 21.5403C6.99485 21.5539 7.00917 21.5674 7.02437 21.5798C7.03403 21.5877 7.04415 21.5947 7.05413 21.6021C7.06378 21.6092 7.07326 21.6168 7.08328 21.6235C7.09463 21.6311 7.1064 21.6377 7.11807 21.6446C7.12746 21.6502 7.13657 21.6561 7.14622 21.6613C7.15785 21.6675 7.1698 21.6728 7.1817 21.6784C7.19205 21.6832 7.20221 21.6884 7.21283 21.6928C7.22422 21.6975 7.2359 21.7013 7.24752 21.7055C7.25902 21.7096 7.27037 21.714 7.28209 21.7176C7.29367 21.7211 7.30543 21.7237 7.31715 21.7266C7.32919 21.7296 7.34109 21.733 7.35336 21.7354C7.36668 21.7381 7.38014 21.7397 7.39355 21.7416C7.4044 21.7431 7.41502 21.7452 7.42596 21.7462C7.45054 21.7487 7.47526 21.75 7.49998 21.75C7.5247 21.75 7.54942 21.7487 7.574 21.7462C7.58494 21.7452 7.59556 21.7431 7.60641 21.7416C7.61982 21.7397 7.63328 21.7381 7.6466 21.7354C7.65887 21.733 7.67077 21.7296 7.68281 21.7266C7.69453 21.7237 7.70629 21.7211 7.71787 21.7176C7.72959 21.714 7.74094 21.7096 7.75243 21.7055C7.76406 21.7013 7.77573 21.6975 7.78713 21.6928C7.79775 21.6884 7.80792 21.6832 7.81826 21.6784C7.83016 21.6728 7.84211 21.6675 7.85373 21.6613C7.86339 21.6561 7.8725 21.6502 7.88189 21.6446C7.89356 21.6377 7.90532 21.6311 7.91668 21.6235C7.9267 21.6168 7.93618 21.6092 7.94583 21.6021C7.95581 21.5947 7.96593 21.5877 7.97559 21.5798C7.99079 21.5674 8.00511 21.5539 8.01926 21.5403C8.02287 21.5369 8.02677 21.5339 8.03034 21.5304L11.0303 18.5304C11.171 18.3897 11.25 18.1989 11.25 18C11.25 17.8011 11.171 17.6103 11.0303 17.4696C10.8897 17.329 10.6989 17.25 10.5 17.25C10.301 17.25 10.1103 17.329 9.96962 17.4696Z'
      fill='currentColor'
    />
    <path
      d='M20.0304 5.46971L17.0304 2.46971C17.0271 2.46646 17.0235 2.46371 17.0202 2.46051C17.0058 2.44663 16.9911 2.433 16.9757 2.42027C16.966 2.4124 16.956 2.40549 16.9461 2.39816C16.9363 2.39088 16.9268 2.38333 16.9167 2.37655C16.9054 2.369 16.8938 2.3625 16.8823 2.35564C16.8727 2.35001 16.8635 2.34401 16.8538 2.33879C16.8423 2.33261 16.8305 2.32739 16.8187 2.3219C16.8082 2.31695 16.7979 2.31169 16.7871 2.30725C16.7758 2.30258 16.7644 2.29883 16.7529 2.29475C16.7413 2.29054 16.7297 2.28606 16.7178 2.28244C16.7064 2.27901 16.6948 2.27644 16.6832 2.27356C16.6711 2.27049 16.659 2.26706 16.6466 2.26463C16.6334 2.26198 16.6201 2.26042 16.6067 2.25854C16.5959 2.25699 16.5851 2.25488 16.5741 2.25383C16.5248 2.24898 16.4753 2.24898 16.426 2.25383C16.415 2.25488 16.4042 2.25699 16.3933 2.25854C16.38 2.26042 16.3667 2.26198 16.3535 2.26463C16.3411 2.26706 16.329 2.27049 16.3168 2.27356C16.3053 2.27644 16.2937 2.27901 16.2822 2.28244C16.2703 2.28606 16.2588 2.29054 16.2472 2.29475C16.2357 2.29883 16.2242 2.30258 16.213 2.30725C16.2022 2.31169 16.1919 2.31695 16.1814 2.3219C16.1696 2.32739 16.1578 2.33261 16.1463 2.33879C16.1366 2.34401 16.1273 2.35001 16.1178 2.35564C16.1063 2.3625 16.0947 2.369 16.0834 2.37655C16.0733 2.38333 16.0638 2.39088 16.054 2.39816C16.0441 2.40549 16.034 2.4124 16.0244 2.42027C16.009 2.433 15.9943 2.44664 15.9799 2.46051C15.9766 2.46371 15.973 2.46646 15.9697 2.46971L12.9697 5.46971C12.9 5.53936 12.8448 5.62204 12.8071 5.71304C12.7694 5.80404 12.75 5.90158 12.75 6.00007C12.75 6.09857 12.7694 6.19611 12.8071 6.28711C12.8448 6.37811 12.9 6.46079 12.9697 6.53044C13.1103 6.6711 13.3011 6.75012 13.5 6.75012C13.5985 6.75012 13.6961 6.73072 13.7871 6.69303C13.8781 6.65534 13.9608 6.60009 14.0304 6.53044L15.75 4.81076V21.0001C15.75 21.199 15.8291 21.3898 15.9697 21.5304C16.1104 21.6711 16.3011 21.7501 16.5 21.7501C16.699 21.7501 16.8897 21.6711 17.0304 21.5304C17.171 21.3898 17.25 21.199 17.25 21.0001V4.81076L18.9697 6.53044C19.0393 6.60009 19.122 6.65534 19.213 6.69303C19.304 6.73073 19.4015 6.75013 19.5 6.75013C19.5985 6.75013 19.6961 6.73073 19.7871 6.69303C19.8781 6.65534 19.9608 6.60009 20.0304 6.53044C20.1001 6.4608 20.1553 6.37811 20.193 6.28711C20.2307 6.19611 20.2501 6.09858 20.2501 6.00008C20.2501 5.90158 20.2307 5.80405 20.193 5.71305C20.1553 5.62205 20.1001 5.53936 20.0304 5.46971Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(DownUpSolid);
export default ForwardRef;
