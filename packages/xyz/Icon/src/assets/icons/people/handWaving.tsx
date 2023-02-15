import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const HandWaving = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M15.8096 10.3754L12.0596 3.88019C11.8107 3.44998 11.4012 3.13617 10.9211 3.00773C10.441 2.8793 9.9295 2.94675 9.49908 3.19525C9.06866 3.44376 8.75451 3.85298 8.62567 4.33301C8.49684 4.81303 8.56385 5.32456 8.812 5.75519L11.2495 9.97706L8.06206 4.45536C7.93906 4.2419 7.7752 4.05478 7.57984 3.90468C7.38448 3.75459 7.16146 3.64446 6.92352 3.5806C6.68558 3.51673 6.43739 3.50039 6.19313 3.53249C5.94887 3.5646 5.71333 3.64453 5.49998 3.76771C5.28662 3.89089 5.09964 4.05491 4.9497 4.25039C4.79977 4.44587 4.68983 4.66898 4.62616 4.90698C4.5625 5.14497 4.54636 5.39317 4.57867 5.63741C4.61098 5.88164 4.69111 6.11711 4.81447 6.33036L8.37697 12.5008L6.68944 9.57873C6.44057 9.14851 6.03108 8.83471 5.55095 8.70627C5.07083 8.57784 4.55935 8.64528 4.12893 8.89379C3.6985 9.14229 3.38435 9.55152 3.25552 10.0315C3.12668 10.5116 3.1937 11.0231 3.44185 11.4537L7.00434 17.6242C7.49668 18.4774 8.15227 19.2252 8.93366 19.825C9.71506 20.4248 10.607 20.8648 11.5584 21.1198C12.5099 21.3749 13.5023 21.44 14.4789 21.3115C15.4555 21.183 16.3973 20.8633 17.2504 20.3708C18.1035 19.8783 18.8512 19.2225 19.4508 18.441C20.0504 17.6595 20.4902 16.7675 20.745 15.8159C20.9999 14.8644 21.0648 13.872 20.936 12.8954C20.8073 11.9188 20.4874 10.9771 19.9947 10.1242L18.1197 6.87657C17.9967 6.66311 17.8329 6.47598 17.6375 6.32589C17.4421 6.17579 17.2191 6.06566 16.9812 6.0018C16.7432 5.93794 16.4951 5.92159 16.2508 5.9537C16.0065 5.9858 15.771 6.06573 15.5576 6.18891C15.3443 6.31209 15.1573 6.47611 15.0074 6.67159C14.8574 6.86707 14.7475 7.09019 14.6838 7.32818C14.6202 7.56617 14.604 7.81438 14.6363 8.05861C14.6686 8.30284 14.7488 8.53831 14.8721 8.75157L15.8096 10.3754ZM15.8096 10.3754C14.9483 10.8727 14.3198 11.6917 14.0624 12.6524C13.805 13.6131 13.9398 14.6366 14.437 15.498M7.60258 22.5001C6.33137 21.6181 5.27171 20.465 4.5 19.124M16.5 2.90625C17.3557 2.90614 18.1964 3.13139 18.9374 3.55936C19.6784 3.98733 20.2936 4.6029 20.7212 5.34416'
      stroke='currentColor'
      strokeWidth='inherit'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ForwardRef = forwardRef(HandWaving);
export default ForwardRef;
