import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const RightSolid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <path
      d='M12.9696 19.2803C12.829 19.1397 12.75 18.9489 12.75 18.75C12.75 18.5511 12.829 18.3604 12.9696 18.2197L18.4394 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H18.4394L12.9696 5.78034C12.9 5.71069 12.8447 5.628 12.8071 5.53701C12.7694 5.44601 12.75 5.34848 12.75 5.24998C12.75 5.15149 12.7694 5.05396 12.8071 4.96297C12.8448 4.87197 12.9 4.78929 12.9697 4.71965C13.0393 4.65001 13.122 4.59477 13.213 4.55708C13.304 4.51939 13.4015 4.5 13.5 4.5C13.5985 4.5 13.6961 4.51941 13.787 4.5571C13.878 4.5948 13.9607 4.65005 14.0304 4.7197L20.7804 11.4697C20.7828 11.4721 20.7848 11.4748 20.7872 11.4773C20.802 11.4925 20.8164 11.5081 20.8299 11.5245C20.8374 11.5336 20.844 11.5434 20.851 11.5528C20.8586 11.5629 20.8665 11.5729 20.8736 11.5835C20.8809 11.5944 20.8873 11.6057 20.8939 11.617C20.8998 11.6268 20.9059 11.6363 20.9114 11.6464C20.9174 11.6577 20.9225 11.6693 20.9279 11.6808C20.933 11.6915 20.9383 11.7021 20.9429 11.713C20.9475 11.7241 20.9512 11.7354 20.9552 11.7467C20.9594 11.7585 20.964 11.7702 20.9676 11.7823C20.971 11.7935 20.9735 11.8049 20.9764 11.8163C20.9795 11.8286 20.983 11.8409 20.9855 11.8535C20.9881 11.8666 20.9896 11.8798 20.9915 11.8929C20.9931 11.904 20.9952 11.9148 20.9963 11.926C20.9987 11.9506 21 11.9753 21 12C21 12.0247 20.9987 12.0494 20.9963 12.074C20.9952 12.0852 20.9931 12.0961 20.9915 12.1071C20.9896 12.1203 20.9881 12.1335 20.9855 12.1465C20.983 12.1591 20.9795 12.1714 20.9764 12.1838C20.9735 12.1951 20.971 12.2065 20.9676 12.2177C20.964 12.2298 20.9594 12.2415 20.9552 12.2533C20.9512 12.2646 20.9475 12.276 20.9429 12.287C20.9383 12.298 20.933 12.3085 20.9279 12.3192C20.9225 12.3307 20.9174 12.3423 20.9114 12.3536C20.9059 12.3637 20.8998 12.3733 20.8939 12.3831C20.8873 12.3943 20.8809 12.4056 20.8736 12.4165C20.8665 12.4271 20.8586 12.4371 20.851 12.4473C20.844 12.4567 20.8374 12.4664 20.8299 12.4755C20.8162 12.4923 20.8016 12.5081 20.7865 12.5236C20.7843 12.5258 20.7825 12.5282 20.7804 12.5303L14.0304 19.2803C13.9607 19.35 13.878 19.4052 13.787 19.4429C13.696 19.4806 13.5985 19.5 13.5 19.5C13.4015 19.5 13.304 19.4806 13.213 19.4429C13.122 19.4052 13.0393 19.35 12.9696 19.2803Z'
      fill='currentColor'
    />
  </svg>
);

const ForwardRef = forwardRef(RightSolid);
export default ForwardRef;
