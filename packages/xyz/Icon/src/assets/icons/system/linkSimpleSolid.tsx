import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const LinkSimpleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M14.6519 8.28674L8.28802 14.6507C8.14753 14.7914 8.06866 14.9821 8.06873 15.1809C8.0688 15.3797 8.14782 15.5704 8.28841 15.711C8.42901 15.8516 8.61967 15.9306 8.8185 15.9307C9.01733 15.9308 9.20806 15.8519 9.34875 15.7114L15.7127 9.34747C15.7824 9.27784 15.8377 9.19515 15.8755 9.10413C15.9133 9.01311 15.9327 8.91553 15.9327 8.81699C15.9328 8.71845 15.9134 8.62086 15.8757 8.52981C15.838 8.43876 15.7827 8.35603 15.7131 8.28635C15.6434 8.21667 15.5606 8.1614 15.4696 8.12371C15.3786 8.08601 15.281 8.06663 15.1824 8.06667C15.0839 8.0667 14.9863 8.08616 14.8953 8.12392C14.8043 8.16168 14.7216 8.21701 14.6519 8.28674Z'
      fill='currentColor'
    />
    <path
      d='M13.0599 16.2422L10.4083 18.8938C9.70505 19.597 8.75125 19.9921 7.75671 19.9921C6.76216 19.9921 5.80836 19.597 5.10511 18.8938C4.40186 18.1906 4.00678 17.2368 4.00678 16.2422C4.00678 15.2477 4.40186 14.2939 5.10511 13.5906L7.75675 10.939C7.82648 10.8694 7.88181 10.7867 7.91957 10.6957C7.95733 10.6047 7.97679 10.5071 7.97682 10.4085C7.97686 10.31 7.95748 10.2124 7.91978 10.1214C7.88209 10.0303 7.82682 9.94758 7.75714 9.8779C7.68746 9.80822 7.60473 9.75295 7.51368 9.71526C7.42263 9.67757 7.32504 9.65818 7.2265 9.65822C7.12795 9.65826 7.03038 9.67771 6.93936 9.71547C6.84834 9.75323 6.76565 9.80856 6.69602 9.87829L4.04438 12.5299C3.05981 13.5145 2.50668 14.8498 2.50668 16.2422C2.50668 17.6346 3.05981 18.97 4.04438 19.9545C5.02895 20.9391 6.36431 21.4922 7.7567 21.4922C9.1491 21.4922 10.4845 20.9391 11.469 19.9545L14.1207 17.3029C14.2613 17.1622 14.3404 16.9715 14.3404 16.7725C14.3404 16.5736 14.2613 16.3828 14.1207 16.2422C13.98 16.1015 13.7892 16.0225 13.5903 16.0225C13.3914 16.0225 13.2006 16.1015 13.0599 16.2422Z'
      fill='currentColor'
    />
    <path
      d='M19.9544 4.04448C18.9698 3.05994 17.6345 2.50684 16.2421 2.50684C14.8497 2.50684 13.5143 3.05994 12.5298 4.04448L9.87811 6.69614C9.73762 6.83684 9.65874 7.02756 9.65882 7.22639C9.65889 7.42522 9.73791 7.61589 9.8785 7.75649C10.0191 7.89708 10.2098 7.9761 10.4086 7.97617C10.6074 7.97625 10.7981 7.89737 10.9388 7.75688L13.5905 5.10521C14.2938 4.40233 15.2475 4.00756 16.2418 4.00772C17.2362 4.00788 18.1897 4.40295 18.8928 5.10605C19.5959 5.80916 19.991 6.76273 19.9912 7.75708C19.9913 8.75142 19.5966 9.70512 18.8937 10.4084L16.242 13.0601C16.1015 13.2008 16.0227 13.3915 16.0227 13.5904C16.0228 13.7892 16.1018 13.9799 16.2424 14.1205C16.383 14.2611 16.5737 14.3401 16.7725 14.3401C16.9713 14.3402 17.1621 14.2613 17.3028 14.1208L19.9544 11.4692C20.9375 10.4838 21.4896 9.14874 21.4896 7.75683C21.4896 6.36492 20.9375 5.02984 19.9544 4.04448Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(LinkSimpleSolid);
export default ForwardRef;