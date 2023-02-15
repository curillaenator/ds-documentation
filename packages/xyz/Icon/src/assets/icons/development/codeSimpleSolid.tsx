import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const CodeSimpleSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M8.81058 5.50178C8.74515 5.42816 8.66586 5.36814 8.57724 5.32517C8.48861 5.28219 8.39239 5.25709 8.29406 5.2513C8.19574 5.24551 8.09724 5.25914 8.00418 5.29142C7.91113 5.32371 7.82534 5.374 7.75173 5.43944L1.00173 11.4394C0.922565 11.5098 0.859207 11.5961 0.815819 11.6928C0.772432 11.7894 0.75 11.8941 0.75 12C0.75 12.1059 0.772432 12.2106 0.815819 12.3073C0.859207 12.4039 0.922565 12.4902 1.00173 12.5606L7.75173 18.5606C7.9004 18.6927 8.09548 18.7604 8.29406 18.7487C8.49263 18.7371 8.67843 18.647 8.81058 18.4983C8.94273 18.3496 9.01041 18.1545 8.99872 17.956C8.98704 17.7574 8.89695 17.5716 8.74828 17.4394L2.62889 12L8.74828 6.56059C8.89694 6.42844 8.98702 6.24265 8.99871 6.04409C9.01039 5.84552 8.94272 5.65045 8.81058 5.50178Z'
      fill='currentColor'
    />
    <path
      d='M22.9983 11.4394L16.2483 5.43941C16.0996 5.30726 15.9045 5.23958 15.706 5.25127C15.5074 5.26295 15.3216 5.35304 15.1894 5.50171C15.0573 5.65039 14.9896 5.84547 15.0013 6.04404C15.013 6.24262 15.1031 6.42842 15.2517 6.56057L21.3711 12L15.2517 17.4394C15.1781 17.5048 15.1181 17.5841 15.0751 17.6728C15.0322 17.7614 15.0071 17.8576 15.0013 17.9559C14.9955 18.0543 15.0091 18.1528 15.0414 18.2458C15.0737 18.3389 15.124 18.4247 15.1894 18.4983C15.2549 18.5719 15.3342 18.6319 15.4228 18.6749C15.5114 18.7178 15.6076 18.7429 15.706 18.7487C15.8043 18.7545 15.9028 18.7409 15.9958 18.7086C16.0889 18.6763 16.1747 18.626 16.2483 18.5606L22.9983 12.5606C23.0775 12.4902 23.1408 12.4039 23.1842 12.3072C23.2276 12.2106 23.25 12.1059 23.25 12C23.25 11.8941 23.2276 11.7894 23.1842 11.6927C23.1408 11.5961 23.0775 11.5098 22.9983 11.4394Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(CodeSimpleSolid);
export default ForwardRef;